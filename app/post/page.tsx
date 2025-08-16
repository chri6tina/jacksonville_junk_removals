import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { getBlogPosts, BlogPost } from '@/lib/contentful'

export default async function BlogPage() {
  let posts: BlogPost[] = []
  let error: string | null = null

  try {
    posts = await getBlogPosts()
    console.log('📝 Blog page - Posts loaded:', posts.length)
  } catch (err) {
    console.error('❌ Blog page error:', err)
    error = err instanceof Error ? err.message : 'Unknown error occurred'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Posts Grid */}
      {!error && posts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Featured Image */}
                {post.imageUrl ? (
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={post.imageUrl}
                      alt={post.imageAltText || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-blue-600">
                      <div className="text-4xl mb-2">📝</div>
                      <div className="text-sm font-medium">No Image</div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Featured Badge */}
                  {post.featured && (
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                      Featured
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/post/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-xl font-medium text-red-900 mb-2">Error Loading Blog Posts</h3>
            <p className="text-red-600 mb-6">
              {error}
            </p>
            <Link
              href="https://app.contentful.com/spaces/xpopyri6s8gv/entries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Check Contentful
            </Link>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!error && posts.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No blog posts found</h3>
            <p className="text-gray-600 mb-6">
              No blog posts were found in Contentful. This could mean:
            </p>
            <ul className="text-gray-600 mb-6 text-left max-w-md mx-auto space-y-2">
              <li>• Posts haven't been published yet</li>
              <li>• Content type field names may have changed</li>
              <li>• API credentials may need updating</li>
              <li>• Contentful space may be empty</li>
            </ul>
            <Link
              href="https://app.contentful.com/spaces/xpopyri6s8gv/entries"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Check Contentful
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
