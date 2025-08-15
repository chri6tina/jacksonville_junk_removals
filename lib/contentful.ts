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
    const response = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost',
      order: ['-fields.dateAndTime'] as any, // Use the correct field name
      include: 2, // Include linked entries for category and media
      limit: 100,
    })

    if (!response.items || response.items.length === 0) {
      console.log('📝 No blog posts found in Contentful')
      return []
    }

    console.log(`📝 Found ${response.items.length} blog posts in Contentful`)
    
    return response.items.map(item => {
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
    return []
  }
}
