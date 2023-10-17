export type typeProduct = {
    title: string,
    id: number,
    price: number,
    image: string,
    description: string,
    category: string,
    rating: {
      rate: number,
      count: number
    },
    count?: number
  }

export type typeFilters = {
  price: {
      min:number,
      max: number
  },
  rating: number[],
  category: string[]
}