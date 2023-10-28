export type typeProduct = {
    title: string,
    id:  string,
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


export type typeCartContext = {
  cart: typeProduct[], 
  //setCart: any,
  addToCart: Function,
  removeFromCart: Function
}

export type typeCountry = {
  name: {
    common: string,
    official: string
  }
}


export type typeFormData = {
  name: {
    first: string,
    last: string,
  },
  country:  string,
  street: string,
  city: string,
  postcode: string,
  email: string,
  phone?:string,
  apartment?: string,
  notes?: string 
}


export type typeAction = 
 | {type: "ADD", product: typeProduct, count: number } 
 |{type: "REMOVE",id: string } 
 |{type: "CHANGE",id: string, changeType: string} 