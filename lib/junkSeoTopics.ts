import { OwnedBlogPost, slugify } from './ownedBlog'

export interface JunkSeoTopic {
  title: string
  primaryKeyword: string
  audience: string
  angle: string
  links: Array<{ label: string; href: string }>
}

export const JUNK_SEO_TOPICS: JunkSeoTopic[] = [
  {
    title: 'Same-Day Junk Removal in Jacksonville: What Can Be Hauled Away?',
    primaryKeyword: 'same-day junk removal Jacksonville',
    audience: 'homeowners who need fast pickup',
    angle: 'explain common accepted items, scheduling, pricing expectations, and prep steps',
    links: [
      { label: 'same-day junk removal', href: '/same-day-junk-removal' },
      { label: 'contact Jacksonville Junk Removals', href: '/contact' },
      { label: 'residential junk removal', href: '/residential-junk-removal' },
    ],
  },
  {
    title: 'Estate Cleanout Checklist for Jacksonville Families',
    primaryKeyword: 'estate cleanout Jacksonville',
    audience: 'families handling inherited homes and downsizing',
    angle: 'step-by-step sorting, donation, hauling, and timeline advice',
    links: [
      { label: 'estate cleanout', href: '/estate-cleanout' },
      { label: 'senior cleanout', href: '/senior-cleanout' },
      { label: 'family home cleanout', href: '/family-home-cleanout' },
    ],
  },
  {
    title: 'Construction Debris Removal in Jacksonville: Builder and Homeowner Guide',
    primaryKeyword: 'construction debris removal Jacksonville',
    audience: 'contractors, remodelers, and homeowners',
    angle: 'cover materials, safety, staging, local disposal, and post-project cleanup',
    links: [
      { label: 'construction debris removal', href: '/construction-debris-removal' },
      { label: 'post-construction cleanup', href: '/post-construction-cleanup' },
      { label: 'renovation cleanup', href: '/renovation-cleanup' },
    ],
  },
  {
    title: 'Hot Tub Removal in Jacksonville: Cost, Prep, and Safety Tips',
    primaryKeyword: 'hot tub removal Jacksonville',
    audience: 'homeowners with old spas or backyard renovations',
    angle: 'explain disconnecting, access paths, disposal, and when demolition is needed',
    links: [
      { label: 'hot tub removal', href: '/hot-tub-removal' },
      { label: 'yard waste removal', href: '/yard-waste-removal' },
      { label: 'contact our team', href: '/contact' },
    ],
  },
  {
    title: 'Appliance Removal in Jacksonville: Fridges, Washers, Dryers, and More',
    primaryKeyword: 'appliance removal Jacksonville',
    audience: 'homeowners replacing large appliances',
    angle: 'safe pickup guidance, recycling notes, and same-day hauling options',
    links: [
      { label: 'appliance removal', href: '/appliance-removal' },
      { label: 'e-waste junk removal', href: '/e-waste-junk-removal' },
      { label: 'residential junk removal', href: '/residential-junk-removal' },
    ],
  },
  {
    title: 'Garage Cleanout Tips for Jacksonville Homes',
    primaryKeyword: 'garage cleanout Jacksonville',
    audience: 'homeowners reclaiming garage storage',
    angle: 'sorting plan, donation piles, hazardous item warnings, and hauling checklist',
    links: [
      { label: 'garage cleanout', href: '/garage-cleanout' },
      { label: 'storage unit cleanout', href: '/storage-unit-cleanout' },
      { label: 'same-day junk removal', href: '/same-day-junk-removal' },
    ],
  },
]

export function chooseNextJunkSeoTopic(posts: OwnedBlogPost[]) {
  const used = new Set(posts.map((post) => post.slug))
  return (
    JUNK_SEO_TOPICS.find((topic) => !used.has(slugify(topic.title))) ||
    JUNK_SEO_TOPICS[new Date().getDay() % JUNK_SEO_TOPICS.length]
  )
}

export function buildJunkSeoPrompt(topic: JunkSeoTopic, recentTitles: string[]) {
  return [
    'You are an expert local SEO writer for Jacksonville Junk Removals.',
    'Return ONLY valid JSON with keys: title, slug, excerpt, content, tags, keywords.',
    `Write about: ${topic.title}`,
    `Primary keyword: ${topic.primaryKeyword}`,
    `Audience: ${topic.audience}`,
    `Angle: ${topic.angle}`,
    'Requirements:',
    '- 1,100+ words in Markdown.',
    '- Mention Jacksonville, FL naturally throughout.',
    '- Include at least four H2 sections.',
    '- Include a practical checklist or step-by-step section.',
    '- Include a short FAQ section.',
    '- Do not use a generic Conclusion heading.',
    '- Keep the excerpt between 110 and 170 characters.',
    '- Include exactly 3 natural Markdown internal links from this list:',
    ...topic.links.map((link) => `  - [${link.label}](${link.href})`),
    `Avoid repeating these recent titles: ${recentTitles.join('; ') || 'none'}`,
  ].join('\n')
}
