import { createClient } from 'next-sanity'
import { unstable_cache } from 'next/cache'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

// Create client only if credentials are available
export const client = projectId && dataset ?
  createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  }) :
  null

export async function sanityFetch < T > ({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params ? : Record < string,
  unknown >
  tags ? : string[]
}): Promise < T > {
  if (!client) {
    console.warn(
      'Sanity credentials not configured. Add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to your environment variables.'
    )
    return [] as T
  }
  
  try {
    // Create a cached version of the fetch function
    const cachedFetch = unstable_cache(
      async () => {
          return await client.fetch(query, params)
        },
        [query, JSON.stringify(params)],
        {
          tags: tags.length > 0 ? tags : undefined,
          revalidate: 3600, // Revalidate every hour by default
        }
    )
    
    return await cachedFetch()
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}