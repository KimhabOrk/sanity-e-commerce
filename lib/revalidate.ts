'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

// Revalidate specific paths
export async function revalidateProductPages() {
  try {
    console.log('Revalidating product pages...')
    revalidatePath('/products')
    revalidatePath('/products/[slug]', 'page')
    revalidatePath('/')
    return { success: true, message: 'Product pages revalidated' }
  } catch (error) {
    console.error('Error revalidating product pages:', error)
    return { success: false, message: 'Failed to revalidate product pages' }
  }
}

export async function revalidateCollectionPages() {
  try {
    console.log('Revalidating collection pages...')
    revalidatePath('/collections')
    revalidatePath('/collections/[slug]', 'page')
    revalidatePath('/')
    return { success: true, message: 'Collection pages revalidated' }
  } catch (error) {
    console.error('Error revalidating collection pages:', error)
    return { success: false, message: 'Failed to revalidate collection pages' }
  }
}

export async function revalidateCategoryPages() {
  try {
    console.log('Revalidating category pages...')
    revalidatePath('/categories')
    revalidatePath('/categories/[slug]', 'page')
    revalidatePath('/')
    return { success: true, message: 'Category pages revalidated' }
  } catch (error) {
    console.error('Error revalidating category pages:', error)
    return { success: false, message: 'Failed to revalidate category pages' }
  }
}

// Revalidate using tags (cache strategy)
export async function revalidateProductTag() {
  try {
    console.log('Revalidating product cache tag...')
    revalidateTag('products')
    return { success: true, message: 'Product cache revalidated' }
  } catch (error) {
    console.error('Error revalidating product tag:', error)
    return { success: false, message: 'Failed to revalidate product cache' }
  }
}

export async function revalidateCollectionTag() {
  try {
    console.log('Revalidating collection cache tag...')
    revalidateTag('collections')
    return { success: true, message: 'Collection cache revalidated' }
  } catch (error) {
    console.error('Error revalidating collection tag:', error)
    return { success: false, message: 'Failed to revalidate collection cache' }
  }
}

export async function revalidateCategoryTag() {
  try {
    console.log('Revalidating category cache tag...')
    revalidateTag('categories')
    return { success: true, message: 'Category cache revalidated' }
  } catch (error) {
    console.error('Error revalidating category tag:', error)
    return { success: false, message: 'Failed to revalidate category cache' }
  }
}

// Revalidate all content
export async function revalidateAllContent() {
  try {
    console.log('Revalidating all content...')
    revalidatePath('/', 'layout')
    revalidateTag('products')
    revalidateTag('collections')
    revalidateTag('categories')
    return { success: true, message: 'All content revalidated successfully' }
  } catch (error) {
    console.error('Error revalidating all content:', error)
    return { success: false, message: 'Failed to revalidate all content' }
  }
}
