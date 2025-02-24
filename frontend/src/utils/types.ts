export type ProductDataType = {
    id: string
    name: string
    description: string
    imageUrl: string
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
        subSubCategories?: string[]
    }[]
}
export type BannerSliderDataType = {
    allData: BannerImageType[];
}

export type ProductSliderDataType = {
    category: string
    allData: ProductDataType[]
}