// Product Queries
export const ALL_PRODUCTS_QUERY = `
  *[_type == "product"] | order(publishedAt desc) {
    _id,
    name,
    slug,
    description,
    price,
    salePrice,
    image {
      asset->{url, alt}
    },
    gallery[] {
      asset->{url, alt}
    },
    category->{_id, name, slug},
    collections[]->{_id, name, slug},
    inStock,
    featured,
  }
`

export const FEATURED_PRODUCTS_QUERY = `
  *[_type == "product" && featured == true] | order(publishedAt desc) {
    _id,
    name,
    slug,
    description,
    price,
    salePrice,
    image {
      asset->{url, alt}
    },
    category->{_id, name, slug},
    inStock,
  }
`

export const PRODUCT_BY_SLUG_QUERY = `
  *[_type == "product" && slug.current == $slug] {
    _id,
    name,
    slug,
    description,
    longDescription,
    price,
    salePrice,
    image {
      asset->{url, alt}
    },
    gallery[] {
      asset->{url, alt}
    },
    category->{_id, name, slug},
    collections[]->{_id, name, slug},
    colors[]->{_id, name, hex},
    sizes[]->{_id, size, sizeType},
    materials[]->{_id, name, composition, careInstructions},
    inStock,
    tags,
  }[0]
`

export const PRODUCTS_BY_CATEGORY_QUERY = `
  *[_type == "product" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    name,
    slug,
    description,
    price,
    salePrice,
    image {
      asset->{url, alt}
    },
    category->{_id, name, slug},
    inStock,
  }
`

// Category Queries
export const ALL_CATEGORIES_QUERY = `
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    image {
      asset->{url, alt}
    },
    parent->{_id, name, slug},
  }
`

export const CATEGORY_BY_SLUG_QUERY = `
  *[_type == "category" && slug.current == $slug] {
    _id,
    name,
    slug,
    description,
    image {
      asset->{url, alt}
    },
    parent->{_id, name, slug},
  }[0]
`

// Collection Queries
export const ALL_COLLECTIONS_QUERY = `
  *[_type == "collection"] | order(publishedAt desc) {
    _id,
    name,
    slug,
    description,
    image {
      asset->{url, alt}
    },
    season,
    featured,
  }
`

export const FEATURED_COLLECTIONS_QUERY = `
  *[_type == "collection" && featured == true] | order(publishedAt desc) {
    _id,
    name,
    slug,
    description,
    image {
      asset->{url, alt}
    },
    season,
  }
`

export const COLLECTION_BY_SLUG_QUERY = `
  *[_type == "collection" && slug.current == $slug] {
    _id,
    name,
    slug,
    description,
    image {
      asset->{url, alt}
    },
    products[]->{
      _id,
      name,
      slug,
      description,
      price,
      salePrice,
      image {
        asset->{url, alt}
      },
      inStock,
    },
    season,
    featured,
  }[0]
`

export const PRODUCTS_BY_COLLECTION_QUERY = `
  *[_type == "product" && $collectionId in collections[]._ref] | order(publishedAt desc) {
    _id,
    name,
    slug,
    description,
    price,
    salePrice,
    image {
      asset->{url, alt}
    },
    inStock,
  }
`

// Brand Queries
export const ALL_BRANDS_QUERY = `
  *[_type == "brand"] | order(name asc) {
    _id,
    name,
    slug,
    logo {
      asset->{url, alt}
    },
  }
`

export const BRAND_BY_SLUG_QUERY = `
  *[_type == "brand" && slug.current == $slug] {
    _id,
    name,
    slug,
    description,
    logo {
      asset->{url, alt}
    },
    website,
  }[0]
`
