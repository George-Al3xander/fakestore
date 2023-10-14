import {useEffect, useState} from "react"
import { typeProduct } from "../types/types"



const useSortProducts = (products: typeProduct[], filter: string) => {

    const [sorted,setSorted] = useState<typeProduct[]>([])  
    useEffect(() => {        
            if(filter == 'rating') {
                setSorted([...products].sort((a: typeProduct, b: typeProduct) => {
                    return b.rating.rate - a.rating.rate
                }))
            } else if(filter == 'price-top'){
                 setSorted([...products].sort((a: typeProduct, b: typeProduct) => {
                    return b.price - a.price
                }))
            } else if(filter == 'price-low'){
                 setSorted([...products].sort((a: typeProduct, b: typeProduct) => {
                    return a.price - b.price
                }))
            }        
    }, [filter, products])


    return sorted
}


export default useSortProducts