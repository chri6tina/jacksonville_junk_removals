'use client'

import Link from 'next/link'
import { Settings, FileText, Users, BarChart3, Home } from 'lucide-react'

export default function AdminNav() {
  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
              <Home className="w-4 h-4" />
              <span>Back to Site</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link href="/admin/blog" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <FileText className="w-4 h-4" />
                <span>Blog Management</span>
              </Link>
              
              <Link href="/admin" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                <Settings className="w-4 h-4" />
                <span>Admin Dashboard</span>
              </Link>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            Admin Panel
          </div>
        </div>
      </div>
    </div>
  )
}
