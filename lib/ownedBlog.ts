import { del, list, put } from '@vercel/blob'
import { sampleBlogPosts } from './blogData'

export interface OwnedBlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  tags: string[]
  featured: boolean
  readTime: number
  imageUrl?: string
  imageAltText?: string
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  wordCount?: number
}

const BLOG_PREFIX = 'blog-posts/'

function normalizeSamplePosts(): OwnedBlogPost[] {
  return sampleBlogPosts.map((post) => ({
    ...post,
    publishDate: post.publishedAt,
    readTime: post.readTime || Math.max(3, Math.ceil(post.content.split(/\s+/).length / 220)),
    imageAltText: post.title,
    metaTitle: post.title,
    metaDescription: post.excerpt,
    keywords: post.tags.join(', '),
    wordCount: post.content.split(/\s+/).length,
  }))
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 90)
}

export function calculateReadTime(content: string) {
  return Math.max(3, Math.ceil(content.split(/\s+/).filter(Boolean).length / 220))
}

export function getWordCount(content: string) {
  return content.split(/\s+/).filter(Boolean).length
}

export async function listOwnedBlogPosts({ includeFallback = true } = {}) {
  let blobPosts: OwnedBlogPost[] = []

  try {
    const { blobs } = await list({ prefix: BLOG_PREFIX, token: process.env.BLOB_READ_WRITE_TOKEN })
    const jsonBlobs = blobs.filter((blob) => blob.pathname.endsWith('.json'))

    blobPosts = await Promise.all(
      jsonBlobs.map(async (blob) => {
        const response = await fetch(blob.url, { cache: 'no-store' })
        if (!response.ok) throw new Error(`Unable to fetch ${blob.pathname}`)
        return (await response.json()) as OwnedBlogPost
      })
    )
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Using fallback blog posts because Vercel Blob is unavailable:', error)
    }
  }

  const postsBySlug = new Map<string, OwnedBlogPost>()

  if (includeFallback) {
    for (const post of normalizeSamplePosts()) postsBySlug.set(post.slug, post)
  }

  for (const post of blobPosts) postsBySlug.set(post.slug, post)

  return Array.from(postsBySlug.values()).sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )
}

export async function getOwnedBlogPost(slug: string) {
  const posts = await listOwnedBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

export async function saveOwnedBlogPost(post: Omit<OwnedBlogPost, 'id'> & { id?: string }) {
  const finalPost: OwnedBlogPost = {
    ...post,
    id: post.id || `${Date.now()}-${post.slug}`,
    readTime: post.readTime || calculateReadTime(post.content),
    wordCount: post.wordCount || getWordCount(post.content),
  }

  await put(`${BLOG_PREFIX}${finalPost.slug}.json`, JSON.stringify(finalPost, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  })

  return finalPost
}

export async function deleteOwnedBlogPost(slug: string) {
  await del(`${BLOG_PREFIX}${slug}.json`, {
    token: process.env.BLOB_READ_WRITE_TOKEN,
  })
}
