'use client'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown to HTML conversion
  const renderMarkdown = (markdown: string) => {
    let html = markdown

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-10">$1</h1>')

    // Bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')

    // Lists
    html = html.replace(/^- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>')
    html = html.replace(/(<li.*<\/li>)/g, '<ul class="list-disc text-gray-700 mb-4">$1</ul>')

    // Numbered lists
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2">$1</li>')
    html = html.replace(/(<li.*<\/li>)/g, '<ol class="list-decimal text-gray-700 mb-4">$1</ol>')

    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p class="text-gray-700 mb-4 leading-relaxed">')
    html = html.replace(/^(?!<[h|u|o|l])(.*$)/gim, '<p class="text-gray-700 mb-4 leading-relaxed">$1</p>')

    // Clean up empty paragraphs
    html = html.replace(/<p class="text-gray-700 mb-4 leading-relaxed"><\/p>/g, '')
    html = html.replace(/<p class="text-gray-700 mb-4 leading-relaxed">\s*<\/p>/g, '')

    // Line breaks
    html = html.replace(/\n/g, '<br>')

    return html
  }

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  )
}
