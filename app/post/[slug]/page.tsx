import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { getOwnedBlogPost, listOwnedBlogPosts } from '@/lib/ownedBlog'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await listOwnedBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getOwnedBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt

  return {
    title,
    description,
    keywords: post.keywords || post.tags.join(', '),
    alternates: {
      canonical: `/post/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishDate,
      url: `https://www.jacksonvillejunkremovals.com/post/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getOwnedBlogPost(slug)

  if (!post) notFound()

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </header>

          {post.imageUrl && (
            <div className="mb-8">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.imageAltText || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <article className="prose prose-lg max-w-none text-gray-800">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/post"
              className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </footer>
        </div>
      </div>
    </div>
  )
}
