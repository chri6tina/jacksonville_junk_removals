import { NextRequest, NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/contentful'

// GET /api/blog - Get all blog posts from Contentful
export async function GET() {
  try {
    const posts = await getBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

// POST /api/blog - Create a new blog post (redirect to Contentful)
export async function POST(request: NextRequest) {
  return NextResponse.json(
    { 
      message: 'Please create blog posts directly in Contentful admin panel',
      adminUrl: 'https://app.contentful.com/spaces/xpopyri6s8gv/entries'
    },
    { status: 200 }
  )
}

// PUT /api/blog - Update a blog post (redirect to Contentful)
export async function PUT(request: NextRequest) {
  return NextResponse.json(
    { 
      message: 'Please edit blog posts directly in Contentful admin panel',
      adminUrl: 'https://app.contentful.com/spaces/xpopyri6s8gv/entries'
    },
    { status: 200 }
  )
}

// DELETE /api/blog - Delete a blog post (redirect to Contentful)
export async function DELETE(request: NextRequest) {
  return NextResponse.json(
    { 
      message: 'Please delete blog posts directly in Contentful admin panel',
      adminUrl: 'https://app.contentful.com/spaces/xpopyri6s8gv/entries'
    },
    { status: 200 }
  )
}
