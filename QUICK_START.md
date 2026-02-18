# KIMHAB ORK - Quick Start Guide

Get your luxury womenswear platform running in 5 minutes!

## Step 1: Setup (2 minutes)

```bash
# Install dependencies
pnpm install

# Create .env.local
echo "NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production" > .env.local
```

## Step 2: Get Sanity Project ID (1 minute)

1. Go to https://sanity.io
2. Create free account
3. Create new project
4. Copy Project ID
5. Paste into `.env.local`

## Step 3: Deploy Schemas (1 minute)

```bash
npx sanity deploy
```

## Step 4: Start Development (1 minute)

```bash
npm run dev
```

## Step 5: Access the App

| Resource | URL |
|----------|-----|
| App | http://localhost:3000 |
| Sanity Studio | http://localhost:3000/studio |
| Products | http://localhost:3000/products |
| Collections | http://localhost:3000/collections |

---

## Key Shortcuts

### Create Your First Product
1. Visit http://localhost:3000/studio
2. Go to Products
3. Click "Create" → "Product"
4. Fill in:
   - Name: "Silk Evening Gown"
   - Price: 500
   - Add image
   - Select category, colors, sizes
5. Publish
6. Check home page!

### Check If It Works
- [ ] Home page shows featured products
- [ ] Product page loads
- [ ] Collections appear
- [ ] Mobile view works

---

## Troubleshooting

**"Can't find .env.local"**
```bash
cp .env.example .env.local
# Then edit with your Project ID
```

**"Sanity Studio blank"**
```bash
npx sanity deploy
# Restart dev server
npm run dev
```

**"Images not showing"**
- Upload images to Sanity (not external URLs)
- Images must be in Sanity Studio
- Check image field is filled in product

---

## File Locations

- **Home Page**: `app/page.tsx`
- **Theme Colors**: `app/globals.css`
- **Components**: `components/`
- **Schemas**: `sanity/schemas/`
- **Queries**: `lib/sanity.queries.ts`

---

## Next: Add Content

See `SANITY_SETUP_CHECKLIST.md` for detailed steps to:
1. Create brands
2. Create materials
3. Create colors
4. Create sizes
5. Create categories
6. Create products
7. Create collections

---

## Need Help?

- **Setup Issues**: See `README.md`
- **Features Guide**: See `IMPLEMENTATION_GUIDE.md`
- **Content Setup**: See `SANITY_SETUP_CHECKLIST.md`
- **Full Details**: See `PROJECT_SUMMARY.md`

---

**You're all set! Build something beautiful! 🎨✨**
