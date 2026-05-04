'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, Eye, FileText, RefreshCw, Trash2, User } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  featured: boolean
  author: string
  readTime: number
  publishDate: string
  imageUrl?: string
  wordCount?: number
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await fetch('/api/blog')
      if (!response.ok) throw new Error('Failed to fetch posts')
      setPosts(await response.json())
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Delete this owned blog post from Vercel Blob?')) return

    try {
      const response = await fetch(`/api/blog/${slug}`, { method: 'DELETE' })
      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        alert(data.error || 'Failed to delete post')
        return
      }

      setPosts(posts.filter((post) => post.slug !== slug))
    } catch {
      alert('Error deleting post')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-10 h-10 text-primary animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading owned blog posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Posts</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button onClick={fetchPosts} className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Owned Blog Management</h1>
              <p className="text-gray-600 mt-1">Review posts from the autonomous Jacksonville SEO writer.</p>
            </div>
            <div className="flex space-x-3">
              <Link
                href="/api/cron/generate-blog?dryRun=1"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Preview Next Topic
              </Link>
              <Link
                href="/admin"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back to Admin
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-medium text-primary">Autonomous Blog System Active</h3>
            <p className="mt-2 text-sm text-primary">
              Posts are stored in the project-owned blog system and generated weekly by the SEO cron.
            </p>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Blog Posts ({posts.length})</h3>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
                <p className="text-gray-600 mb-6">The autonomous writer will publish the first owned post on its next run.</p>
                <Link
                  href="/api/cron/generate-blog?dryRun=1"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:opacity-90"
                >
                  Preview Next Topic
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <li key={post.slug} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center space-x-4 min-w-0">
                        {post.imageUrl ? (
                          <img src={post.imageUrl} alt={post.title} className="w-16 h-16 object-cover rounded-lg" />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                            <FileText className="w-7 h-7 text-gray-400" />
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-lg font-medium text-gray-900 truncate">{post.title}</h4>
                            {post.featured && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Featured
                              </span>
                            )}
                          </div>

                          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{post.excerpt}</p>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>
                                {new Date(post.publishDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                })}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime} min read</span>
                            </div>
                            {post.wordCount ? <span>{post.wordCount.toLocaleString()} words</span> : null}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <Link
                          href={`/post/${post.slug}`}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Link>

                        <button
                          onClick={() => handleDelete(post.slug)}
                          className="inline-flex items-center px-3 py-2 border border-secondary/30 text-sm font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
