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
    }
  }