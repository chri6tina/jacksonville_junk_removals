import Link from 'next/link'
import { FileText, Settings, Users, BarChart3, Home, Plus, Edit, Trash2 } from 'lucide-react'
import AdminNav from '@/components/AdminNav'

export default function AdminDashboardPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <AdminNav />
        
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your Jacksonville Junk Removals website</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Blog Management</p>
                    <p className="text-2xl font-bold text-gray-900">Contentful</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Plus className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Content Platform</p>
                    <p className="text-2xl font-bold text-gray-900">CMS</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Website Pages</p>
                    <p className="text-2xl font-bold text-gray-900">34</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link
                    href="/admin/blog"
                    className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                  >
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-900">Manage Blog Posts</span>
                  </Link>
                  
                  <Link
                    href="https://app.contentful.com/spaces/xpopyri6s8gv/entries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200"
                  >
                    <Plus className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-900">Create New Post</span>
                  </Link>
                  
                  <Link
                    href="/"
                    className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <Home className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">View Website</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Blog Posts</h2>
                <div className="text-center py-4">
                  <div className="text-4xl mb-2">📝</div>
                  <p className="text-gray-600 mb-4">
                    Blog posts are now managed through Contentful CMS
                  </p>
                  <Link
                    href="/admin/blog"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View All Posts
                  </Link>
                </div>
              </div>
            </div>

            {/* Admin Features */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Admin Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <h3 className="font-medium text-gray-900">Blog Management</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    View and manage blog posts through Contentful CMS integration
                  </p>
                  <Link
                    href="/admin/blog"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Manage Blog →
                  </Link>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Settings className="w-5 h-5 text-gray-600" />
                    <h3 className="font-medium text-gray-900">Website Settings</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Configure website settings and preferences
                  </p>
                  <span className="text-gray-400 text-sm font-medium">
                    Coming Soon
                  </span>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="w-5 h-5 text-gray-600" />
                    <h3 className="font-medium text-gray-900">User Management</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Manage user accounts and permissions
                  </p>
                  <span className="text-gray-400 text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
              <p className="text-blue-700 text-sm mb-3">
                Here are some tips for managing your website:
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Use HTML and CSS directly in Contentful for rich blog content</li>
                <li>• Add relevant meta titles and descriptions for better SEO</li>
                <li>• Set featured posts to highlight your best content</li>
                <li>• Keep content fresh and relevant to Jacksonville junk removal</li>
                <li>• Use the Contentful admin panel for all content management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
