import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: 'xpopyri6s8gv',
  accessToken: 'fXf7iLPe24GN4mAnW3slX5-isvDyi33KzlY14CHeWYI',
})

export const previewClient = createClient({
  space: 'xpopyri6s8gv',
  accessToken: 'C3iwtiRpDswn6ZF9KCRkPM5uSThM3Ckq6hdI8cwNC_c',
  host: 'preview.contentful.com',
})

// Types for your blog posts based on actual fields
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: any // Rich text content
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  canonicalUrl?: string
  featured: boolean
  category?: any // Reference to category
  imageAltText?: string
  readTime?: number
  publishDate: string
  featuredImage?: any // Asset
  // Fallback fields for compatibility
  author: string
  tags: string[]
  imageUrl?: string
}

export interface ContentfulResponse {
  items: Array<{
    sys: { id: string }
    fields: any
  }>
}

// Helper function to get blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('🔍 Starting Contentful API call...')
    console.log('📡 Space ID:', 'xpopyri6s8gv')
    console.log('🔑 Access Token:', 'fXf7iLPe24GN4mAnW3slX5-isvDyi33KzlY14CHeWYI'.substring(0, 10) + '...')
    
    const response = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost',
      order: ['-sys.createdAt', '-fields.dateAndTime'] as any, // Order by creation date first, then by custom date
      include: 2, // Include linked entries for category and media
      limit: 100,
    })

    console.log('✅ Contentful response received:', {
      total: response.total,
      items: response.items?.length || 0,
      hasItems: !!response.items,
      firstItem: response.items?.[0] ? 'exists' : 'none'
    })

    if (!response.items || response.items.length === 0) {
      console.log('⚠️ No blog posts found. Response details:', {
        total: response.total,
        items: response.items,
        sys: response.sys
      })
      return []
    }

    console.log(`📝 Found ${response.items.length} blog posts in Contentful`)
    
    // Log the first item to see what fields are available
    if (response.items.length > 0) {
      console.log('🔍 First item fields:', Object.keys(response.items[0].fields))
      console.log('🔍 First item content type:', response.items[0].sys.contentType?.sys?.id)
      console.log('🔍 First item creation date:', response.items[0].sys.createdAt)
      console.log('🔍 First item custom date:', response.items[0].fields.dateAndTime)
    }
    
    // Sort items to ensure newest first (fallback sorting)
    const sortedItems = response.items.sort((a, b) => {
      const dateA = a.fields.dateAndTime || a.sys.createdAt
      const dateB = b.fields.dateAndTime || b.sys.createdAt
      return new Date(dateB).getTime() - new Date(dateA).getTime()
    })
    
    console.log('📅 Posts after sorting (newest first):', sortedItems.map(item => ({
      title: item.fields.title,
      createdAt: item.sys.createdAt,
      customDate: item.fields.dateAndTime,
      finalDate: item.fields.dateAndTime || item.sys.createdAt
    })))
    
    return sortedItems.map(item => {
      console.log('📝 Processing post:', item.fields.title)
      
      // Map fields using the exact field IDs from your content type
      const fields = item.fields
      return {
        id: item.sys.id,
        title: String(fields.title || 'Untitled Post'),
        slug: String(fields.slug || `post-${item.sys.id}`),
        excerpt: String(fields.excerpt || 'No excerpt available'),
        content: fields.content || '',
        metaTitle: String(fields.metaTitle || ''),
        metaDescription: String(fields.metaDescription || ''),
        keywords: String(fields.keywords || ''),
        canonicalUrl: String(fields.canonicalUrl || ''),
        featured: Boolean(fields.featured || false),
        category: fields.category || null,
        imageAltText: String(fields.imageAltText || ''),
        readTime: Number(fields.readTime || 5),
        publishDate: String(fields.dateAndTime || new Date().toISOString()),
        featuredImage: fields.media || null,
        author: 'Jacksonville Junk Removals',
        tags: [], // User doesn't have tags field yet
        imageUrl: fields.media && typeof fields.media === 'object' && 'fields' in fields.media
          ? String((fields.media.fields as any)?.file?.url || '')
          : '',
      }
    })
  } catch (error) {
    console.error('❌ Contentful API error:', error)
    if (error instanceof Error) {
      console.error('🔍 Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      })
    }
    
    // Log additional error context
    if (error && typeof error === 'object' && 'status' in error) {
      console.error('🔍 HTTP Status:', (error as any).status)
    }
    if (error && typeof error === 'object' && 'statusText' in error) {
      console.error('🔍 HTTP Status Text:', (error as any).statusText)
    }
    
    return []
  }
}
