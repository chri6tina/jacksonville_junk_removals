import { NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'

export async function GET() {
  try {
    console.log('🧪 Testing Contentful connection...')
    
    // Test basic connection
    const response = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost',
      limit: 1,
    })

    console.log('✅ Contentful test successful:', {
      total: response.total,
      items: response.items?.length || 0,
      hasItems: !!response.items,
    })

    return NextResponse.json({
      success: true,
      message: 'Contentful connection successful',
      data: {
        total: response.total,
        itemsCount: response.items?.length || 0,
        hasItems: !!response.items,
        firstItem: response.items?.[0] ? {
          id: response.items[0].sys.id,
          title: response.items[0].fields.title,
          contentType: response.items[0].sys.contentType?.sys?.id,
          fields: Object.keys(response.items[0].fields)
        } : null
      }
    })
  } catch (error) {
    console.error('❌ Contentful test failed:', error)
    
    let errorDetails = 'Unknown error'
    let status = 500
    
    if (error instanceof Error) {
      errorDetails = error.message
    }
    
    if (error && typeof error === 'object' && 'status' in error) {
      status = (error as any).status
    }
    
    return NextResponse.json({
      success: false,
      message: 'Contentful connection failed',
      error: errorDetails,
      status: status
    }, { status: status })
  }
}
