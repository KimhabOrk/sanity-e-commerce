# Content Revalidation Guide

This document explains how the automatic content revalidation system works and how to configure it.

## Overview

The luxury womenswear e-commerce platform includes a comprehensive revalidation system that allows you to update content without redeploying your application. This system supports both automatic webhooks from Sanity and manual revalidation through the admin dashboard.

## Key Features

- **Automatic Cache Invalidation**: Content is cached with tags for efficient revalidation
- **Webhook Support**: Sanity Studio can trigger automatic revalidation on publish/update
- **Manual Admin Dashboard**: `/admin/revalidate` page for manual cache refresh
- **Type-Specific Revalidation**: Products, collections, and categories can be revalidated independently
- **Zero Downtime Updates**: Content changes take effect immediately without redeploying

## System Architecture

### 1. Cache Tags System

The application uses Next.js cache tags to organize cached content:

- `products` - All product-related content (products, featured products, product details)
- `collections` - All collection-related content
- `categories` - All category-related content

### 2. Revalidation Methods

#### A. Automatic Webhooks (Recommended)

Content changes in Sanity Studio trigger automatic revalidation:

```
Sanity Content Change
    ↓
Webhook Request to /api/revalidate
    ↓
Server Action Processes Request
    ↓
Cache Tags Invalidated
    ↓
New Content Served on Next Request
```

#### B. Manual Revalidation

Admin users can manually trigger revalidation via the dashboard:

```
Admin Visits /admin/revalidate
    ↓
Clicks "Revalidate" Button
    ↓
Server Action Triggered
    ↓
Cache Invalidated
    ↓
Confirmation Message
```

## Setup Instructions

### Step 1: Set Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WEBHOOK_SECRET=your-secure-webhook-secret
```

Generate a secure webhook secret:
```bash
openssl rand -base64 32
```

### Step 2: Configure Sanity Webhooks

1. Go to your Sanity project dashboard
2. Navigate to **Settings → API → Webhooks**
3. Click **Create Webhook**
4. Fill in the details:
   - **URL**: `https://your-domain.com/api/revalidate`
   - **Events**: Select "Create", "Update", "Delete", "Publish"
   - **Trigger on**: All document types
   - **HTTP Headers**: Add custom header
     - Header: `X-Sanity-Webhook-Secret`
     - Value: Your webhook secret from Step 1
5. Click **Create**

### Step 3: Test the Webhook

1. Make a small change in Sanity Studio
2. Publish the change
3. Check the webhook event log in Sanity to verify it was sent
4. Verify the content updated on your site without redeploying

## Usage Guide

### Manual Revalidation

1. Navigate to `/admin/revalidate`
2. You'll see four revalidation options:
   - **Products**: Refreshes all product pages
   - **Collections**: Refreshes all collection pages
   - **Categories**: Refreshes all category pages
   - **All Content**: Refreshes everything at once

3. Click the button for the content type you want to revalidate
4. Wait for the confirmation message

### API Endpoint

The revalidation webhook endpoint:

```
POST /api/revalidate
Header: X-Sanity-Webhook-Secret: your-secret
Content-Type: application/json

Body: {
  "_type": "product|collection|category",
  "_id": "document-id",
  ...other sanity fields
}
```

Response:
```json
{
  "success": true,
  "message": "Content revalidated for product",
  "documentId": "abc123",
  "timestamp": "2024-01-20T10:30:00Z"
}
```

## Server Actions Used

### `lib/revalidate.ts` exports these actions:

- `revalidateProductPages()` - Revalidates `/products` and `/products/[slug]`
- `revalidateCollectionPages()` - Revalidates `/collections` and `/collections/[slug]`
- `revalidateCategoryPages()` - Revalidates `/categories` and `/categories/[slug]`
- `revalidateAllContent()` - Revalidates all routes and cache tags

## Cache Configuration

### Default Cache Duration

- Products: 1 hour (3600 seconds)
- Collections: 1 hour
- Categories: 1 hour
- Home page: 1 hour

### Customize Cache Duration

Edit `lib/sanity.client.ts` and update the `revalidate` value:

```typescript
const cachedFetch = unstable_cache(
  async () => { /* ... */ },
  [query, JSON.stringify(params)],
  {
    tags: tags,
    revalidate: 7200, // Change to 2 hours
  }
)
```

## Using Cache Tags in Components

When fetching data in your components, add cache tags:

```typescript
// In app/products/page.tsx
import { sanityFetch } from '@/lib/sanity.client'
import { ALL_PRODUCTS_QUERY } from '@/lib/sanity.queries'

export default async function ProductsPage() {
  const products = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
    tags: ['products'], // ← Add this
  })

  return (
    // ... render products
  )
}
```

## Monitoring and Debugging

### Check Webhook Status

1. In Sanity, go to **Settings → API → Webhooks**
2. Click on your webhook
3. View recent event logs to see if webhooks are being sent and responses

### Enable Debug Logging

The system logs revalidation events:

```
[v0] Webhook triggered for product (abc123)
[v0] Revalidating product content...
[v0] Product pages revalidated
```

View these in your server logs or Vercel dashboard.

### Common Issues

**Issue**: Webhook not triggering
- Solution: Verify the URL is correct and publicly accessible
- Solution: Check that the webhook secret matches

**Issue**: Changes not appearing
- Solution: Visit `/admin/revalidate` and manually trigger revalidation
- Solution: Check browser cache (Ctrl+Shift+Delete)
- Solution: Verify content was published in Sanity

**Issue**: Webhook receiving 401 Unauthorized
- Solution: Verify `X-Sanity-Webhook-Secret` header matches `SANITY_WEBHOOK_SECRET` env var

## Performance Tips

1. **Use cache tags strategically** - Only tag data that changes frequently
2. **Batch updates** - When making multiple content changes, batch them together
3. **Monitor webhook latency** - Check how long webhooks take to process
4. **Use ISR (Incremental Static Regeneration)** - Combined with revalidation for optimal performance

## Security Considerations

- **Always use HTTPS** for your webhook URL
- **Use a strong webhook secret** - Use a cryptographically secure random string
- **Validate webhook signature** - The endpoint verifies the `X-Sanity-Webhook-Secret` header
- **Environment variables** - Never commit secrets to git; use `.env.local` and Vercel environment variables

## Troubleshooting

### Revalidation Not Working

1. Check if `SANITY_WEBHOOK_SECRET` environment variable is set
2. Verify the webhook URL in Sanity matches your actual domain
3. Test the webhook manually via Sanity dashboard
4. Check server logs for errors

### Content Still Showing Old Version

1. Clear your browser cache
2. Use incognito/private mode to test
3. Visit `/admin/revalidate` and manually trigger revalidation
4. Check if you're using a CDN (Vercel Edge Cache might need configuration)

## Advanced Configuration

### Custom Revalidation Logic

You can add custom revalidation logic in `lib/revalidate.ts`:

```typescript
export async function revalidateSpecificProduct(productId: string) {
  try {
    revalidateTag(`product-${productId}`)
    revalidatePath(`/products/${productId}`)
    return { success: true }
  } catch (error) {
    return { success: false }
  }
}
```

### Scheduled Revalidation

To revalidate on a schedule (e.g., every 30 minutes), use a cron service:

1. Set up a cron job with a service like EasyCron or your deployment platform's cron
2. Make a POST request to `/api/revalidate` with the webhook body
3. Or call the server actions directly from your cron function

## Best Practices

1. **Test Webhooks** - Always test webhook configuration after setting up
2. **Monitor Success** - Set up alerts for failed webhook deliveries
3. **Version Your API** - If you change the webhook format, maintain backward compatibility
4. **Document Changes** - Keep track of which content types use which cache tags
5. **Regular Audits** - Periodically review cache hit rates and revalidation frequency

## Support

For issues with revalidation:

1. Check the logs in Vercel dashboard
2. Verify webhook configuration in Sanity
3. Test manually via `/admin/revalidate`
4. Review environment variables are set correctly
