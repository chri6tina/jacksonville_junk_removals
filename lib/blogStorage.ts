import fs from 'fs'
import path from 'path'
import { BlogPost } from './blogData'

// Path to the JSON storage file
const STORAGE_FILE = path.join(process.cwd(), 'data', 'blog-posts.json')

// Ensure the data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(STORAGE_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Initialize storage with sample data if file doesn't exist
function initializeStorage() {
  ensureDataDirectory()
  
  if (!fs.existsSync(STORAGE_FILE)) {
    const samplePosts = [
      {
        id: '1',
        title: 'Top 5 Junk Removal Companies in Jacksonville',
        slug: 'top-5-junk-removal-companies-jacksonville',
        excerpt: 'Compare the best junk removal companies in Jacksonville, Florida. Find out why Jacksonville Junk Removals leads the pack.',
        content: `# Top 5 Junk Removal Companies in Jacksonville

Jacksonville, Florida is home to many junk removal companies, but not all are created equal. In this comprehensive guide, we'll compare the top 5 junk removal companies in Jacksonville and explain why Jacksonville Junk Removals stands out from the competition.

## What to Look for in a Junk Removal Company

When choosing a junk removal company, consider these important factors:

- **Licensing & Insurance**: Ensure the company is properly licensed and insured
- **Experience**: Look for companies with proven track records
- **Eco-Friendly Practices**: Choose companies that prioritize responsible disposal
- **Transparent Pricing**: Avoid hidden fees and surprise charges
- **Customer Service**: Read reviews and testimonials

## The Top 5 Companies

### 1. Jacksonville Junk Removals ⭐⭐⭐⭐⭐

**Why We're #1:**
- Licensed and fully insured
- Same-day service available
- Eco-friendly disposal practices
- Transparent, upfront pricing
- 500+ satisfied customers
- 24/7 customer support

**Services Offered:**
- Residential junk removal
- Commercial cleanouts
- Construction debris removal
- Appliance and furniture removal
- Estate cleanouts
- Garage and storage cleanouts

**Starting Prices:**
- Quarter-truck: $99
- Half-truck: $199
- Full-truck: $299

### 2. Junk King Jacksonville ⭐⭐⭐⭐

**Pros:**
- Nationwide brand recognition
- Professional service
- Good customer reviews

**Cons:**
- Higher pricing
- Limited local knowledge
- Less flexible scheduling

### 3. 1-800-GOT-JUNK? ⭐⭐⭐⭐

**Pros:**
- Large company with resources
- Consistent service quality
- Good customer service

**Cons:**
- Higher prices
- Less personal touch
- Standardized processes

### 4. College Hunks Hauling Junk ⭐⭐⭐

**Pros:**
- Young, energetic team
- Good customer service
- Competitive pricing

**Cons:**
- Limited experience
- Inconsistent service quality
- Less specialized equipment

### 5. Local Junk Removal Services ⭐⭐⭐

**Pros:**
- Local knowledge
- Competitive pricing
- Flexible scheduling

**Cons:**
- Limited resources
- Inconsistent quality
- Less professional appearance

## Why Choose Jacksonville Junk Removals?

### Local Expertise
We're Jacksonville natives who understand the unique needs of our community. From historic Riverside homes to modern Southside developments, we know every neighborhood.

### Professional Service
Our team is trained, licensed, and insured. We treat every job with the same level of care and professionalism, regardless of size.

### Eco-Friendly Practices
We're committed to environmental responsibility. We recycle and donate whenever possible, reducing waste sent to landfills.

### Transparent Pricing
No hidden fees, no surprises. You'll know exactly what you're paying for before we start the job.

### Same-Day Service
Need junk removed today? We can often accommodate same-day requests, making us the go-to choice for urgent cleanouts.

## How to Get Started

Getting started with Jacksonville Junk Removals is easy:

1. **Call or Text**: (904) 742-3531
2. **Get a Quote**: Free, no-obligation estimates
3. **Schedule Service**: Choose a time that works for you
4. **Professional Cleanup**: Our team handles everything
5. **Satisfaction Guaranteed**: We're not done until you're happy

## Conclusion

While there are many junk removal companies in Jacksonville, Jacksonville Junk Removals offers the best combination of local expertise, professional service, competitive pricing, and environmental responsibility. 

Don't just take our word for it - read our customer reviews and see why we're the #1 choice for junk removal in Jacksonville, Florida.

**Ready to get started? Call (904) 742-3531 today for your free quote!**`,
        author: 'Jacksonville Junk Removals',
        publishedAt: '2024-01-15',
        tags: ['junk removal', 'Jacksonville', 'comparison', 'reviews', 'Florida'],
        featured: true,
        readTime: 8,
        imageUrl: '/images/blog/junk-removal-comparison.jpg'
      }
    ]
    
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(samplePosts, null, 2))
  }
}

// Read all blog posts from storage
export function readBlogPosts(): BlogPost[] {
  try {
    initializeStorage()
    const data = fs.readFileSync(STORAGE_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

// Write blog posts to storage
export function writeBlogPosts(posts: BlogPost[]): boolean {
  try {
    ensureDataDirectory()
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(posts, null, 2))
    return true
  } catch (error) {
    console.error('Error writing blog posts:', error)
    return false
  }
}

// Add a new blog post
export function addBlogPost(post: Omit<BlogPost, 'id'>): BlogPost | null {
  try {
    const posts = readBlogPosts()
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString()
    }
    
    posts.push(newPost)
    
    if (writeBlogPosts(posts)) {
      return newPost
    }
    return null
  } catch (error) {
    console.error('Error adding blog post:', error)
    return null
  }
}

// Update an existing blog post
export function updateBlogPost(id: string, updates: Partial<BlogPost>): BlogPost | null {
  try {
    const posts = readBlogPosts()
    const index = posts.findIndex(post => post.id === id)
    
    if (index === -1) {
      return null
    }
    
    posts[index] = { ...posts[index], ...updates }
    
    if (writeBlogPosts(posts)) {
      return posts[index]
    }
    return null
  } catch (error) {
    console.error('Error updating blog post:', error)
    return null
  }
}

// Delete a blog post
export function deleteBlogPost(id: string): boolean {
  try {
    const posts = readBlogPosts()
    const filteredPosts = posts.filter(post => post.id !== id)
    
    if (filteredPosts.length === posts.length) {
      return false // Post not found
    }
    
    return writeBlogPosts(filteredPosts)
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return false
  }
}

// Get blog post by ID
export function getBlogPostById(id: string): BlogPost | null {
  try {
    const posts = readBlogPosts()
    return posts.find(post => post.id === id) || null
  } catch (error) {
    console.error('Error getting blog post by ID:', error)
    return null
  }
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const posts = readBlogPosts()
    return posts.find(post => post.slug === slug) || null
  } catch (error) {
    console.error('Error getting blog post by slug:', error)
    return null
  }
}

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  try {
    return readBlogPosts().sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  } catch (error) {
    console.error('Error getting all blog posts:', error)
    return []
  }
}

// Get featured blog posts
export function getFeaturedBlogPosts(): BlogPost[] {
  try {
    return readBlogPosts().filter(post => post.featured)
  } catch (error) {
    console.error('Error getting featured blog posts:', error)
    return []
  }
}

// Get blog posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  try {
    return readBlogPosts().filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
  } catch (error) {
    console.error('Error getting blog posts by tag:', error)
    return []
  }
}

// Get all unique tags
export function getAllTags(): string[] {
  try {
    const posts = readBlogPosts()
    const tags = posts.flatMap(post => post.tags)
    return [...new Set(tags)].sort()
  } catch (error) {
    console.error('Error getting all tags:', error)
    return []
  }
}

// Search blog posts
export function searchBlogPosts(query: string): BlogPost[] {
  try {
    const posts = readBlogPosts()
    const lowercaseQuery = query.toLowerCase()
    
    return posts.filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  } catch (error) {
    console.error('Error searching blog posts:', error)
    return []
  }
}
