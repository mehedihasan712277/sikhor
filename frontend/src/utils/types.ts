export type ProductDataType = {
    id: string
    name: string
    description: string
    imgUrl: string
    regularPrice: number
    discount: number
    reducedPrice: number
    category: string[]
    launchedAt: string
    rating: number
}

export type BannerImageType = {
    id: string
    imgUrl: string
    alt: string
}

export type CategoryType = {
    id: string
    name: string
    subCategories?: {
        name: string
        subCategories?: string[]
    }[]
}