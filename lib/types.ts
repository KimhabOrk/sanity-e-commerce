// Sanity Image Type
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface SanityImageAsset {
  _id: string
  url: string
  alt?: string
  title?: string
}

export interface SanityImageWithAsset {
  asset?: SanityImageAsset
}

// Product Types
export interface Color {
  _id: string
  _type: 'color'
  name: string
  hex: string
}

export interface Size {
  _id: string
  _type: 'size'
  size: string
  sizeType: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'one-size'
}

export interface Material {
  _id: string
  _type: 'material'
  name: string
  description?: string
  composition?: string
  careInstructions?: string
}

export interface Brand {
  _id: string
  _type: 'brand'
  name: string
  slug: {
    current: string
  }
  description?: any[]
  logo?: SanityImageWithAsset
  website?: string
}

export interface Category {
  _id: string
  _type: 'category'
  name: string
  slug: {
    current: string
  }
  description?: string
  image?: SanityImageWithAsset
  parent?: Category
}

export interface Collection {
  _id: string
  _type: 'collection'
  name: string
  slug: {
    current: string
  }
  description?: string
  longDescription?: any[]
  image?: SanityImageWithAsset
  products?: Product[]
  season?: 'spring-summer' | 'fall-winter' | 'capsule' | 'limited-edition'
  featured?: boolean
  publishedAt?: string
}

export interface Product {
  _id: string
  _type: 'product'
  name: string
  slug: {
    current: string
  }
  description?: string
  longDescription?: any[]
  price: number
  salePrice?: number
  image: SanityImageWithAsset
  gallery?: SanityImageWithAsset[]
  category?: Category
  collections?: Collection[]
  colors?: Color[]
  sizes?: Size[]
  materials?: Material[]
  brand?: Brand
  inStock: boolean
  featured?: boolean
  tags?: string[]
  publishedAt?: string
}

// Cart Types
export interface CartItem {
  productId: string
  quantity: number
  selectedColor?: string
  selectedSize?: string
  selectedMaterial?: string
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

// User Types
export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

// Order Types
export interface OrderItem {
  product: Product
  quantity: number
  price: number
  color?: Color
  size?: Size
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  totalPrice: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Filter Types
export interface ProductFilters {
  categories?: string[]
  collections?: string[]
  colors?: string[]
  sizes?: string[]
  priceRange?: {
    min: number
    max: number
  }
  sortBy?: 'newest' | 'price-low' | 'price-high' | 'best-sellers'
  search?: string
}

// Page Props Types
export interface PageParams {
  params: Promise<{ slug: string }>
}

export interface PageSearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
