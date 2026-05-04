import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { revalidatePath } from 'next/cache'
import { buildJunkSeoPrompt, chooseNextJunkSeoTopic } from '@/lib/junkSeoTopics'
import { getWordCount, listOwnedBlogPosts, saveOwnedBlogPost, slugify } from '@/lib/ownedBlog'

export const dynamic = 'force-dynamic'
export const maxDuration = 300

function unauthorized(request: Request) {
  const secret = process.env.CRON_SECRET?.trim()
  const authHeader = request.headers.get('authorization')?.trim()
  const xCronSecret = request.headers.get('x-cron-secret')?.trim()

  if (!secret && process.env.NODE_ENV === 'development') return null
  if (!secret) return new NextResponse('CRON_SECRET is not configured', { status: 503 })
  if (authHeader === `Bearer ${secret}` || xCronSecret === secret) return null
  return new NextResponse('Unauthorized', { status: 401 })
}

function parseDraft(raw: string) {
  const cleaned = raw
    .trim()
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```$/i, '')
    .trim()

  return JSON.parse(cleaned) as {
    title: string
    slug?: string
    excerpt: string
    content: string
    tags?: string[]
    keywords?: string
  }
}

export async function GET(request: Request) {
  const authError = unauthorized(request)
  if (authError) return authError

  try {
    const posts = await listOwnedBlogPosts()
    const topic = chooseNextJunkSeoTopic(posts)

    if (new URL(request.url).searchParams.get('dryRun') === '1') {
      return NextResponse.json({ success: true, dryRun: true, nextTopic: topic, existingPostCount: posts.length })
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    const prompt = buildJunkSeoPrompt(topic, posts.slice(0, 8).map((post) => post.title))

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.7,
      messages: [{ role: 'user', content: prompt }],
    })

    const draft = parseDraft(completion.choices[0]?.message?.content || '{}')
    const content = String(draft.content || '').trim()
    const wordCount = getWordCount(content)

    if (!draft.title || !draft.excerpt || !content || wordCount < 900) {
      return NextResponse.json(
        { error: 'Draft failed quality gate', wordCount, title: draft.title || null },
        { status: 422 }
      )
    }

    const post = await saveOwnedBlogPost({
      title: draft.title.trim(),
      slug: slugify(draft.slug || draft.title),
      excerpt: draft.excerpt.trim(),
      content,
      author: 'Jacksonville Junk Removals',
      publishDate: new Date().toISOString(),
      tags: draft.tags?.length ? draft.tags : ['junk removal', 'Jacksonville', topic.primaryKeyword],
      featured: false,
      readTime: 0,
      imageAltText: draft.title,
      metaTitle: `${draft.title} | Jacksonville Junk Removals`,
      metaDescription: draft.excerpt.trim(),
      keywords: draft.keywords || topic.primaryKeyword,
      wordCount,
    })

    revalidatePath('/post')
    revalidatePath(`/post/${post.slug}`)
    revalidatePath('/sitemap.xml')

    return NextResponse.json({ success: true, post })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Autonomous blog generation failed:', message)
    return NextResponse.json({ error: 'Failed to generate blog post', details: message }, { status: 500 })
  }
}
