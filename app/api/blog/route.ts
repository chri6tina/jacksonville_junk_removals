import { NextRequest, NextResponse } from 'next/server'
import { listOwnedBlogPosts, saveOwnedBlogPost, slugify } from '@/lib/ownedBlog'

export async function GET() {
  try {
    const posts = await listOwnedBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const xCronSecret = request.headers.get('x-cron-secret')

  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}` &&
    xCronSecret !== process.env.CRON_SECRET
  ) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const title = String(body.title || '').trim()
    const content = String(body.content || '').trim()

    if (!title || !content) {
      return NextResponse.json({ error: 'title and content are required' }, { status: 400 })
    }

    const post = await saveOwnedBlogPost({
      title,
      slug: body.slug ? slugify(String(body.slug)) : slugify(title),
      excerpt: String(body.excerpt || '').trim() || content.replace(/[#*_`>\[\]()]/g, '').slice(0, 155),
      content,
      author: String(body.author || 'Jacksonville Junk Removals'),
      publishDate: body.publishDate || new Date().toISOString(),
      tags: Array.isArray(body.tags) ? body.tags.map(String) : ['junk removal', 'Jacksonville'],
      featured: Boolean(body.featured),
      readTime: Number(body.readTime) || 0,
      imageUrl: body.imageUrl || '',
      imageAltText: body.imageAltText || title,
      metaTitle: body.metaTitle || title,
      metaDescription: body.metaDescription || body.excerpt || '',
      keywords: body.keywords || '',
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Blog create error:', error)
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 })
  }
}
