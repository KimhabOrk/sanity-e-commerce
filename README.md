# KIMHAB ORK - Premium Luxury Womenswear Fashion E-Commerce Platform

A beautifully designed, fully responsive e-commerce platform for luxury womenswear built with Next.js 16, Sanity CMS, and TailwindCSS. Features a sophisticated dark theme with gold accents, optimized for premium fashion retail.

## Features

- **Fully Dark Theme**: Luxurious dark-themed design with gold accents throughout
- **Sanity CMS Integration**: Headless CMS for product, category, and collection management
- **Complete Product Catalog**:
  - Product listings with gallery view
  - Detailed product pages with specifications
  - Color and size selection
  - Material information display
- **Collections & Categories**: Curated collections and product categories with dedicated pages
- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Modern UI Components**: Smooth animations, hover effects, and interactive elements
- **Premium Aesthetics**: Gold (#d4af37) and cream (#e8d4a0) accents on dark backgrounds
- **SEO Optimized**: Proper metadata and structured data for search engines

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **CMS**: Sanity (Headless Content Management System)
- **Styling**: TailwindCSS with custom dark theme
- **Fonts**: Playfair Display (headings), Geist (body)
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Sanity account (free at sanity.io)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd luxara-fashion
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up Sanity**

   ````bash

   npx sanity init

   ```txt
   - Follow the prompts to create a new Sanity project
   - Choose your project name, dataset name (usually "production"), and API visibility

   ````

4. **Environment Variables**
   Create a `.env.local` file in the project root:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

   Get your Project ID from your Sanity project settings at `https://manage.sanity.io`

5. **Deploy Sanity Schema**

   ```bash
   npx sanity deploy
   ```

6. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

7. **Access Sanity Studio**
   Sanity Studio will be available at [http://localhost:3000/studio](http://localhost:3000/studio)
   Or visit your deployed studio at `https://<your-project-id>.sanity.studio`

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Home page with featured products
│   ├── globals.css             # Global styles and dark theme
│   ├── products/
│   │   ├── page.tsx            # All products listing
│   │   └── [slug]/
│   │       └── page.tsx        # Product detail page
│   ├── collections/
│   │   ├── page.tsx            # Collections listing
│   │   └── [slug]/
│   │       └── page.tsx        # Collection detail page
│   ├── categories/
│   │   ├── page.tsx            # Categories listing
│   │   └── [slug]/
│   │       └── page.tsx        # Category detail page
│   ├── cart/
│   │   └── page.tsx            # Shopping cart page
│   ├── wishlist/
│   │   └── page.tsx            # Wishlist page
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer with links
│   ├── ProductCard.tsx         # Product card component
│   ├── CollectionCard.tsx      # Collection card component
│   └── HeroBanner.tsx          # Hero banner component
├── lib/
│   ├── sanity.client.ts        # Sanity client configuration
│   ├── sanity.queries.ts       # GROQ queries for Sanity
│   └── utils.ts                # Utility functions
├── sanity/
│   └── schemas/
│       ├── product.ts          # Product schema
│       ├── category.ts         # Category schema
│       ├── collection.ts       # Collection schema
│       ├── color.ts            # Color schema
│       ├── size.ts             # Size schema
│       ├── material.ts         # Material schema
│       ├── brand.ts            # Brand schema
│       └── index.ts            # Schema exports
├── sanity.config.ts            # Sanity configuration
├── tailwind.config.ts          # TailwindCSS configuration
└── package.json
```

## Sanity Schema

The application includes the following Sanity schemas:

### Product

- Name, slug, description, long description
- Price and sale price
- Main image and gallery
- Category, collections, colors, sizes, materials
- Brand reference
- Stock status, featured flag, tags, publish date

### Category

- Name, slug, description
- Category image
- Parent category (for subcategories)

### Collection

- Name, slug, description, long description
- Hero image
- Products list
- Season (Spring/Summer, Fall/Winter, Capsule, Limited Edition)
- Featured flag, publish date

### Supporting Schemas

- **Color**: Name and hex color code
- **Size**: Size label and type (XS, S, M, L, XL, XXL, One Size)
- **Material**: Name, description, composition, care instructions
- **Brand**: Name, slug, logo, description, website

## Customization

### Colors

The dark theme uses these primary colors:

- **Background**: #0a0a0a (almost black)
- **Foreground**: #fafafa (off-white)
- **Primary Gold**: #d4af37
- **Light Gold**: #e8d4a0
- **Dark Cards**: #1a1a1a
- **Borders**: #2d2d2d

Edit `tailwind.config.ts` and `app/globals.css` to modify the color scheme.

### Typography

- **Headings**: Playfair Display (serif, elegant)
- **Body**: Geist (clean, modern sans-serif)
- **Monospace**: Geist Mono (code, technical)

Modify font imports in `app/layout.tsx` to change typography.

### Content Updates

1. Add products, categories, and collections through Sanity Studio
2. Set featured items to appear on the home page
3. Create collections to group related products
4. Organize products into categories

## Database/CMS Features

### Sanity Benefits

- **Visual Content Management**: Drag-and-drop interface for managing content
- **Real-time Collaboration**: Multiple team members can work simultaneously
- **Flexible Schema**: Easily add new product attributes or fields
- **Image Optimization**: Built-in image processing and CDN
- **Versioning**: Track all content changes with full history
- **Localization**: Support for multiple languages (future enhancement)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
4. Deploy!

### Deploy to Other Platforms

The application can be deployed to any platform supporting Node.js and Next.js:

- Netlify
- Railway
- Render
- Self-hosted servers

## Future Enhancements

- [ ] Shopping cart functionality with local storage/database
- [ ] User authentication and accounts
- [ ] Checkout and payment processing (Stripe)
- [ ] Order management system
- [ ] Product reviews and ratings
- [ ] Advanced search and filtering
- [ ] Inventory management
- [ ] Admin dashboard for analytics
- [ ] Email notifications
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Wishlist persistence

## Performance Optimization

- Image optimization with Next.js Image component
- Lazy loading for images and components
- Server-side rendering for fast initial page loads
- Cached queries with Sanity CDN
- Minimal CSS bundle with TailwindCSS
- Responsive images for different screen sizes

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive components
- Proper heading hierarchy
- Color contrast compliant with WCAG standards
- Keyboard navigation support
- Screen reader friendly

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support with Sanity CMS, visit: [https://www.sanity.io/help](https://www.sanity.io/help)
For Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)
For TailwindCSS documentation: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## Credits

- Designed and built with modern web technologies
- Premium fashion e-commerce best practices
- Dark theme aesthetic inspired by luxury retail brands
