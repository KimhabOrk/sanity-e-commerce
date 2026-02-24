# Sanity CMS Setup Checklist

Follow this checklist to get your KIMHAB ORK Sanity CMS up and running with sample data.

## Phase 1: Initial Setup

- [ ] Create Sanity account at https://sanity.io
- [ ] Create new project in Sanity
- [ ] Choose "Single dataset" with name "production"
- [ ] Note your Project ID
- [ ] Add to `.env.local`:
  ```env
  NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
  NEXT_PUBLIC_SANITY_DATASET=production
  ```
- [ ] Run `npx sanity deploy` to deploy schemas
- [ ] Access Sanity Studio at http://localhost:3000/studio

## Phase 2: Create Base Data

### Brands

Create at least 2 brands:

- [ ] **Brand 1**
  - Name: "KIMHAB ORK Originals"
  - Logo: (optional image)
  - Description: "Our signature collection"
- [ ] **Brand 2**
  - Name: "Designer Collaborations"
  - Logo: (optional image)
  - Description: "Exclusive partnerships"

### Colors

Create color options:

- [ ] Black (#000000)
- [ ] White (#FFFFFF)
- [ ] Cream (#f5f1ed)
- [ ] Navy (#001f3f)
- [ ] Gold (#d4af37)
- [ ] Camel (#c19a6b)
- [ ] Charcoal (#36454f)
- [ ] Blush (#f0a5a5)

### Sizes

Create size options:

- [ ] XS (Extra Small)
- [ ] S (Small)
- [ ] M (Medium)
- [ ] L (Large)
- [ ] XL (Extra Large)
- [ ] XXL (Extra Extra Large)
- [ ] One Size

### Materials

Create at least 5 materials:

- [ ] **Silk**
  - Composition: "100% Mulberry Silk"
  - Care: "Hand wash cold. Hang dry."
- [ ] **Cashmere**
  - Composition: "100% Pure Cashmere"
  - Care: "Dry clean only."
- [ ] **Cotton**
  - Composition: "100% Organic Cotton"
  - Care: "Machine wash cold."
- [ ] **Linen**
  - Composition: "100% Linen"
  - Care: "Hand wash. Line dry."
- [ ] **Wool**
  - Composition: "100% Virgin Wool"
  - Care: "Dry clean. Professional care recommended."

## Phase 3: Create Categories

Create main categories:

- [ ] **Dresses**
  - Add image
  - Description: "Elegant dresses for every occasion"
- [ ] **Tops**
  - Add image
  - Description: "Luxurious tops and blouses"
- [ ] **Bottoms**
  - Add image
  - Description: "Premium pants, skirts, and trousers"
- [ ] **Outerwear**
  - Add image
  - Description: "Sophisticated jackets and coats"
- [ ] **Accessories**
  - Add image
  - Description: "Elegant accessories and finishing touches"

## Phase 4: Create Collections

Create at least 2-3 collections:

- [ ] **Spring/Summer 2024**
  - Season: Spring/Summer
  - Featured: Yes
  - Add description and hero image
  - Add 4-6 products (create below)
- [ ] **Fall/Winter 2024**
  - Season: Fall/Winter
  - Featured: Yes
  - Add description and hero image
  - Add 4-6 products (create below)
- [ ] **Timeless Classics**
  - Season: Capsule
  - Featured: No
  - Add description
  - Add 4-6 evergreen products

## Phase 5: Create Sample Products

Create a minimum of 8-12 products (2-3 per category):

### Sample Product 1: Silk Dress

- [ ] Name: "Flowing Silk Maxi Dress"
- [ ] Slug: flowing-silk-maxi-dress
- [ ] Price: $450
- [ ] Sale Price: $315 (30% off)
- [ ] Category: Dresses
- [ ] Collections: Spring/Summer 2024, Timeless Classics
- [ ] Colors: White, Cream, Black
- [ ] Sizes: XS, S, M, L, XL
- [ ] Materials: Silk
- [ ] Brand: KIMHAB ORK Originals
- [ ] In Stock: Yes
- [ ] Featured: Yes
- [ ] Tags: dress, formal, spring, elegant
- [ ] Description: "Luxurious silk maxi dress with elegant drape"
- [ ] Long Description: Add detailed description
- [ ] Add 3-4 images to gallery

### Sample Product 2: Cashmere Sweater

- [ ] Name: "Premium Cashmere Crewneck"
- [ ] Slug: premium-cashmere-crewneck
- [ ] Price: $550
- [ ] Sale Price: (no sale)
- [ ] Category: Tops
- [ ] Collections: Fall/Winter 2024, Timeless Classics
- [ ] Colors: Navy, Camel, Black, Cream
- [ ] Sizes: XS, S, M, L, XL, XXL
- [ ] Materials: Cashmere
- [ ] Brand: Designer Collaborations
- [ ] In Stock: Yes
- [ ] Featured: Yes
- [ ] Tags: sweater, cashmere, winter, luxury
- [ ] Description: "Sumptuous cashmere sweater for ultimate comfort"
- [ ] Add 3-4 images

### Sample Product 3: Tailored Trousers

- [ ] Name: "High-Waisted Wool Trousers"
- [ ] Slug: high-waisted-wool-trousers
- [ ] Price: $380
- [ ] Sale Price: (no sale)
- [ ] Category: Bottoms
- [ ] Collections: Timeless Classics
- [ ] Colors: Black, Navy, Charcoal
- [ ] Sizes: XS, S, M, L, XL
- [ ] Materials: Wool
- [ ] Brand: KIMHAB ORK Originals
- [ ] In Stock: Yes
- [ ] Featured: No
- [ ] Tags: pants, tailored, professional
- [ ] Description: "Perfectly tailored wool trousers"
- [ ] Add 3-4 images

### Continue creating 5-9 more products

- [ ] Various dresses (2-3 more)
- [ ] Various tops (2 more)
- [ ] Various outerwear (2-3)
- [ ] Accessories (1-2)

**Pro Tips:**

- Use realistic product names
- Write compelling descriptions
- Price items appropriately for luxury market
- Add 3-4 images per product for gallery
- Mark some as featured to appear on homepage
- Vary materials and colors

## Phase 6: Verify Data

### Homepage Check

- [ ] Visit http://localhost:3000
- [ ] See featured products
- [ ] See featured collections
- [ ] Navigation works

### Product Pages

- [ ] Click products to see detail pages
- [ ] Images load correctly
- [ ] Colors/sizes display properly
- [ ] Price shows correctly

### Category Pages

- [ ] Visit /categories
- [ ] Click categories to see filtered products
- [ ] Products listed correctly

### Collection Pages

- [ ] Visit /collections
- [ ] Click collections
- [ ] See all products in collection
- [ ] Details display correctly

## Phase 7: Content Optimization

- [ ] Add high-quality product images (minimum 1 per product)
- [ ] Add gallery images for featured products (3-4 per product)
- [ ] Write compelling product descriptions
- [ ] Use relevant tags for all products
- [ ] Set appropriate featured flags
- [ ] Organize products into logical collections
- [ ] Create seasonal collections

## Phase 8: Advanced Setup (Optional)

- [ ] Add blog/lookbook content type (if needed)
- [ ] Create customer review schema (if needed)
- [ ] Set up API tokens for server-side access
- [ ] Configure webhook for content changes
- [ ] Set up preview mode for drafts
- [ ] Create custom document previews

## Troubleshooting

### Common Issues

**Schema not deploying:**

```bash
npx sanity deploy
# If issues persist:
npx sanity init
```

**Environment variables not loading:**

- Check `.env.local` file exists
- Restart dev server: `npm run dev`
- Variables must start with `NEXT_PUBLIC_` to be accessible in browser

**Sanity Studio not accessible:**

- Visit http://localhost:3000/studio
- Or http://your-project-id.sanity.studio
- Check Project ID in `.env.local`

**Images not showing:**

- Ensure images are uploaded to Sanity (not external)
- Check image asset is referenced in schema
- Verify CDN is enabled in Sanity

**Products not appearing:**

- Verify products have `slug` and `name` filled
- Check collection references are correct
- Ensure product is published (not draft)

## Sample Query Tests

Once content is created, test these GROQ queries in Sanity Vision:

```groq
// Get all products
*[_type == "product"] { name, price }

// Get featured products
*[_type == "product" && featured == true] { name, price }

// Get products by category
*[_type == "product" && category->name == "Dresses"] { name }

// Get collections with products
*[_type == "collection"] { name, "productCount": count(products) }

// Get product with all details
*[_type == "product" && slug.current == "flowing-silk-maxi-dress"][0] {
  name, price, colors[]->name, sizes[]->size, materials[]->name
}
```

## Next Steps

Once content is created:

1. **Test all pages** on desktop and mobile
2. **Verify image quality** and loading
3. **Check links and navigation** work correctly
4. **Optimize images** if needed
5. **Deploy to production** when ready
6. **Set up monitoring** and analytics
7. **Configure domain** and SSL
8. **Create backup** of Sanity project

## Deployment to Production

Before deploying to production:

- [ ] All content is created and reviewed
- [ ] Images are optimized and uploaded
- [ ] Product prices are final
- [ ] Collections are organized
- [ ] Links and navigation tested
- [ ] Mobile responsive tested
- [ ] SEO metadata set
- [ ] Analytics configured
- [ ] Performance tested
- [ ] Backup created

---

**Expected time to complete: 2-4 hours**

Once this checklist is complete, your KIMHAB ORK platform will be fully operational with sample content ready to showcase!
