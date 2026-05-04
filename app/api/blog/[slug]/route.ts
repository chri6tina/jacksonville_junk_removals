import { NextRequest, NextResponse } from 'next/server'
import { deleteOwnedBlogPost, slugify } from '@/lib/ownedBlog'

function isAuthorized(request: NextRequest) {
  if (!process.env.CRON_SECRET) return process.env.NODE_ENV !== 'production'

  const authHeader = request.headers.get('authorization')
  const xCronSecret = request.headers.get('x-cron-secret')

  return authHeader === `Bearer ${process.env.CRON_SECRET}` || xCronSecret === process.env.CRON_SECRET
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { slug } = await params

  try {
    await deleteOwnedBlogPost(slugify(slug))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Blog delete error:', error)
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 })
  }
}
