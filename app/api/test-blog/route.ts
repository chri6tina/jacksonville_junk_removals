import { NextResponse } from 'next/server'
import { listOwnedBlogPosts } from '@/lib/ownedBlog'
import { chooseNextJunkSeoTopic } from '@/lib/junkSeoTopics'

export async function GET() {
  try {
    const posts = await listOwnedBlogPosts()
    const nextTopic = chooseNextJunkSeoTopic(posts)

    return NextResponse.json({
      success: true,
      message: 'Owned blog system is available',
      data: {
        postsCount: posts.length,
        latestPost: posts[0]
          ? {
              title: posts[0].title,
              slug: posts[0].slug,
              publishDate: posts[0].publishDate,
            }
          : null,
        nextTopic,
      },
    })
  } catch (error) {
    console.error('Owned blog test failed:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Owned blog system check failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
