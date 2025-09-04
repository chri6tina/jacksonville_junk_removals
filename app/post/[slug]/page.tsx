import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { contentfulClient } from '@/lib/contentful'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const response = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost',
      'fields.slug': slug,
      limit: 1,
    })

    if (response.items.length === 0) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }

    const post = response.items[0]
    const fields = post.fields

    return {
      title: (fields.metaTitle as string) || (fields.title as string) || 'Blog Post',
      description: (fields.metaDescription as string) || (fields.excerpt as string) || 'Blog post from Jacksonville Junk Removals',
      keywords: (fields.keywords as string) || 'junk removal, Jacksonville, blog',
      canonical: `/post/${slug}`,
      openGraph: {
        title: (fields.metaTitle as string) || (fields.title as string),
        description: (fields.metaDescription as string) || (fields.excerpt as string),
        type: 'article',
        publishedTime: fields.dateAndTime as string,
        url: `https://www.jacksonvillejunkremovals.com/post/${slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Blog Post',
      description: 'Blog post from Jacksonville Junk Removals',
      canonical: `/post/${slug}`,
    }
  }
}

// Get the blog post data
async function getBlogPost(slug: string) {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost',
      'fields.slug': slug,
      include: 2,
      limit: 1,
    })

    if (response.items.length === 0) {
      return null
    }

    const post = response.items[0]
    const fields = post.fields

    return {
      id: post.sys.id,
      title: (fields.title as string) || 'Untitled Post',
      slug: (fields.slug as string) || '',
      excerpt: (fields.excerpt as string) || '',
      content: fields.content || '',
      metaTitle: (fields.metaTitle as string) || '',
      metaDescription: (fields.metaDescription as string) || '',
      keywords: (fields.keywords as string) || '',
      canonicalUrl: (fields.canonicalUrl as string) || '',
      featured: (fields.featured as boolean) || false,
      category: fields.category || null,
      imageAltText: (fields.imageAltText as string) || '',
      readTime: (fields.readTime as number) || 5,
      publishDate: (fields.dateAndTime as string) || new Date().toISOString(),
      featuredImage: fields.media || null,
      author: 'Jacksonville Junk Removals',
      tags: [],
      imageUrl: fields.media && typeof fields.media === 'object' && 'fields' in fields.media 
        ? (fields.media.fields as any)?.file?.url || ''
        : '',
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Blog */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/post"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>

              {post.featured && (
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </div>
          </header>

          {/* Blog Content */}
          <article className="prose prose-lg max-w-none">
            {/* Debug information */}
            <div className="mb-4 p-4 bg-gray-100 rounded text-xs">
              <strong>Debug Info:</strong><br/>
              Content type: {typeof post.content}<br/>
              Content length: {post.content ? String(post.content).length : 0}<br/>
              Contains HTML: {post.content && typeof post.content === 'string' ? post.content.includes('<') : 'N/A'}<br/>
              First 100 chars: {post.content && typeof post.content === 'string' ? post.content.substring(0, 100) : 'N/A'}
            </div>

            {/* Handle content from Contentful - detect HTML and render it */}
            <div className="text-gray-800 leading-relaxed">
              {post.content && typeof post.content === 'string' && post.content.includes('<') ? (
                // HTML content detected in Content field - render it directly
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="prose prose-lg max-w-none"
                />
              ) : post.content && typeof post.content === 'object' && 'content' in post.content ? (
                // Rich Text content - transform it
                <div>
                  {Array.isArray((post.content as any).content) && (post.content as any).content.map((node: any, index: number) => {
                    if (node.nodeType === 'paragraph') {
                      return (
                        <p key={index} className="mb-4">
                          {node.content?.map((content: any, contentIndex: number) => {
                            if (content.nodeType === 'text') {
                              return (
                                <span key={contentIndex}>
                                  {content.marks?.includes('bold') ? (
                                    <strong>{content.value}</strong>
                                  ) : content.marks?.includes('italic') ? (
                                    <em>{content.value}</em>
                                  ) : (
                                    content.value
                                  )}
                                </span>
                              )
                            }
                            return null
                          })}
                        </p>
                      )
                    }
                    if (node.nodeType === 'heading-1') {
                      return (
                        <h1 key={index} className="text-3xl font-bold text-blue-600 mb-6">{node.content?.[0]?.value || ''}</h1>
                      )
                    }
                    if (node.nodeType === 'heading-2') {
                      return (
                        <h2 key={index} className="text-2xl font-semibold text-gray-800 mb-4">{node.content?.[0]?.value || ''}</h2>
                      )
                    }
                    if (node.nodeType === 'heading-3') {
                      return (
                        <h3 key={index} className="text-xl font-medium text-gray-700 mb-3">{node.content?.[0]?.value || ''}</h3>
                      )
                    }
                    if (node.nodeType === 'unordered-list') {
                      return (
                        <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                          {node.content?.map((listItem: any, listIndex: number) => (
                            <li key={listIndex} className="text-gray-700">{listItem.content?.[0]?.content?.[0]?.value || ''}</li>
                          ))}
                        </ul>
                      )
                    }
                    if (node.nodeType === 'ordered-list') {
                      return (
                        <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
                          {node.content?.map((listItem: any, listIndex: number) => (
                            <li key={listIndex} className="text-gray-700">{listItem.content?.[0]?.content?.[0]?.value || ''}</li>
                          ))}
                        </ol>
                      )
                    }
                    return null
                  })}
                </div>
              ) : typeof post.content === 'string' ? (
                // Plain text content
                <div className="whitespace-pre-wrap">
                  {post.content}
                </div>
              ) : (
                // Fallback for debugging
                <div className="text-gray-500 italic">
                  Content not available. Content type: {typeof post.content}
                  {post.content && (
                    <pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">
                      {JSON.stringify(post.content, null, 2)}
                    </pre>
                  )}
                </div>
              )}
            </div>
          </article>

          {/* Featured Image - Now Below Content */}
          {post.featuredImage && post.imageUrl && (
            <div className="mt-8">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.imageAltText || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link
                href="/post"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <button className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
