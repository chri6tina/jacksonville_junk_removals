# Jacksonville Junk Removals Website

A modern, responsive website for Jacksonville Junk Removals, built with Next.js, React, TypeScript, and Tailwind CSS. This website showcases professional junk removal services with a focus on environmental responsibility and community service.

## 🎨 Design Features

### Color Palette
- **Primary**: Deep Forest Green (#014421) - Sustainability and trust
- **Secondary**: Neutral Beige (#f5f5f5) - Clean backgrounds
- **Accent**: Safety Orange (#f57c00) - Calls-to-action and highlights
- **Neutral**: Steel Gray (#5e6973) - Icons and secondary elements
- **Text**: Dark Slate Gray (#2f3e46) - High readability

### Design Principles
- Modern, professional aesthetic
- Mobile-first responsive design
- Accessibility-focused with semantic HTML
- Smooth animations and transitions
- Eco-friendly messaging and imagery

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Validation**: Zod

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About Us page
│   ├── services/page.tsx  # Services page
│   ├── pricing/page.tsx   # Pricing page
│   ├── gallery/page.tsx   # Gallery page
│   ├── testimonials/page.tsx # Testimonials page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/             # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section component
│   ├── ServicesSection.tsx # Services section component
│   └── Footer.tsx         # Footer component
└── styles/                 # Additional styles
```

## 🏗️ Components

### Core Components

#### Navbar
- Responsive navigation with mobile menu
- Sticky positioning with smooth transitions
- Call-to-action button integration

#### Hero
- Compelling headline and tagline
- Feature highlights with icons
- Dual call-to-action buttons
- Animated wave separator

#### ServicesSection
- Service cards with icons and descriptions
- Feature lists for each service
- Hover effects and animations
- Custom solution CTA

#### Footer
- Company information and contact details
- Quick links and service listings
- Social media integration
- Trust indicators and certifications

### Page Components

#### Home Page
- Hero section with compelling messaging
- Services overview with call-to-action
- Trust indicators and social proof

#### About Us
- Company story and mission
- Team member profiles
- Environmental commitment
- Community involvement
- Licensing and certifications

#### Services
- Detailed service descriptions
- Pricing information
- Service packages
- Additional services and fees

#### Pricing
- Transparent pricing structure
- Service packages comparison
- What's included/excluded
- Additional fees breakdown

#### Gallery
- Before-and-after project showcase
- Category filtering
- Lightbox image viewer
- Project details and recycling rates

#### Testimonials
- Customer review carousel
- Rating system and feedback
- Service-specific testimonials
- Trust indicators and statistics

#### Contact
- Comprehensive quote request form
- Service area information
- Contact details and hours
- Form validation and submission

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interactions
- Adaptive layouts

### Accessibility
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast ratios
- Screen reader compatibility

### Performance
- Optimized images and assets
- Lazy loading implementation
- Smooth animations
- Fast page transitions

### SEO Optimization
- Meta tags and descriptions
- Open Graph integration
- Structured data markup
- Semantic HTML structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jacksonville-junk-removals
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with main messaging
- Services overview
- Trust indicators
- Call-to-action sections

### About Us (`/about`)
- Company story and values
- Team member profiles
- Environmental commitment
- Community involvement

### Services (`/services`)
- Comprehensive service listings
- Detailed descriptions
- Pricing information
- Service packages

### Pricing (`/pricing`)
- Transparent pricing structure
- Service packages
- Additional fees
- What's included/excluded

### Gallery (`/gallery`)
- Project showcase
- Before-and-after photos
- Category filtering
- Project details

### Testimonials (`/testimonials`)
- Customer reviews
- Rating system
- Service-specific feedback
- Trust indicators

### Contact (`/contact`)
- Quote request form
- Contact information
- Service areas
- Form validation

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#014421', // Deep forest green
    light: '#0a5a2e',
    dark: '#013318',
  },
  accent: {
    DEFAULT: '#f57c00', // Safety orange
    light: '#ff8f1f',
    dark: '#e65100',
  },
  // ... other colors
}
```

### Content
- Update company information in components
- Modify service descriptions
- Change contact details
- Update testimonials and gallery items

### Styling
- Modify Tailwind classes in components
- Update animations in `tailwind.config.ts`
- Customize component layouts

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Component-based architecture

### Best Practices
- Semantic HTML structure
- Accessible design patterns
- Performance optimization
- SEO best practices
- Mobile-first responsive design

## 📈 Future Enhancements

- Blog/News section
- Online booking system
- Customer portal
- Real-time chat support
- Advanced analytics
- Multi-language support
- Progressive Web App features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions about this website:
- Email: info@jacksonvillejunkremovals.com
- Phone: (904) 555-0123
- Website: [jacksonvillejunkremovals.com](https://jacksonvillejunkremovals.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons
- The Jacksonville community for inspiration

---

Built with ❤️ for Jacksonville Junk Removals

