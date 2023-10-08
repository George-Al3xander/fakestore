export type typeProduct = {
    title: string,
    id: number,
    price: number,
    image: string,
    desription: string,
    category: string,
    rating: {
      rate: number,
      count: number
    }
  }