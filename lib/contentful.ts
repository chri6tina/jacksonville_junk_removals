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
    console.log('🔍 Fetching blog posts from Contentful...')
    console.log('📡 Space ID:', 'xpopyri6s8gv')
    
    const response = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost',
      order: '-fields.dateAndTime', // Use the correct field name
      include: 2, // Include linked entries for category and media
      limit: 100,
    })
    
    console.log('✅ Contentful response received:', response)
    console.log('📊 Number of items:', response.items.length)
    
    if (response.items.length === 0) {
      console.log('⚠️ No blog posts found. Make sure you have published posts in Contentful.')
      return []
    }
    
    // Log the first item to see what fields are actually available
    if (response.items.length > 0) {
      console.log('🔍 First item fields:', response.items[0].fields)
      console.log('🔍 Available field names:', Object.keys(response.items[0].fields))
    }
    
    return response.items.map(item => {
      console.log('📝 Processing post:', item.fields.title)
      
      // Map fields using the exact field IDs from your content type
      return {
        id: item.sys.id,
        title: item.fields.title || 'Untitled Post',
        slug: item.fields.slug || `post-${item.sys.id}`,
        excerpt: item.fields.excerpt || 'No excerpt available',
        content: item.fields.content || '',
        metaTitle: item.fields.metaTitle || '',
        metaDescription: item.fields.metaDescription || '',
        keywords: item.fields.keywords || '',
        canonicalUrl: item.fields.canonicalUrl || '',
        featured: item.fields.featured || false,
        category: item.fields.category || null,
        imageAltText: item.fields.imageAltText || '',
        readTime: item.fields.readTime || 5,
        // Use the correct field name: dateAndTime
        publishDate: item.fields.dateAndTime || new Date().toISOString(),
        featuredImage: item.fields.media || null,
        // Fallback fields for compatibility
        author: 'Jacksonville Junk Removals',
        tags: [], // You don't have tags field yet, but we can add it later
        imageUrl: item.fields.media?.fields?.file?.url || '',
      }
    })
  } catch (error) {
    console.error('❌ Contentful API error:', error)
    console.error('🔍 Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    })
    return []
  }
}
