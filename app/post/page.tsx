import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import type { Metadata } from 'next'
import { listOwnedBlogPosts } from '@/lib/ownedBlog'

export const metadata: Metadata = {
  title: 'Blog | Jacksonville Junk Removal Insights & Tips',
  description:
    'Read Jacksonville junk removal tips, cleanout guides, pricing advice, and local disposal insights from Jacksonville Junk Removals.',
  keywords:
    'Jacksonville junk removal blog, junk removal tips, cleanout advice, property management, Jacksonville junk hauling',
  alternates: {
    canonical: '/post',
  },
}

export default async function BlogPage() {
  const posts = await listOwnedBlogPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20" />

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
            <p className="text-gray-600">
              Jacksonville junk removal guides, cleanout tips, and local disposal advice.
            </p>
          </div>
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
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
                    <div className="text-center text-secondary">
                      <div className="text-4xl mb-2">JJR</div>
                      <div className="text-sm font-medium">Junk Removal Guide</div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {post.featured && (
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                      Featured
                    </span>
                  )}

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-x-4 gap-y-2">
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
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  <Link
                    href={`/post/${post.slug}`}
                    className="text-secondary hover:text-primary font-medium text-sm flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-4xl mb-4">JJR</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No blog posts found</h3>
            <p className="text-gray-600">
              The owned blog system is ready. New autonomous posts will appear here after the next cron run.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
