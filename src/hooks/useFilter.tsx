import {useState, useEffect} from "react"
import { typeFilters, typeProduct } from "../types/types"




const useFilter = ({products, filters}: {products: typeProduct[], filters: typeFilters}) => {
    const defaultSettings = {
        price: {
            min:0,
            max: 0
        },
        rating: [],
        category: []
    }

    const [filtered, setFiltered] = useState<typeProduct[]>([])


    useEffect(() => {
        if(products != undefined) {
            if(JSON.stringify(filters) == JSON.stringify(defaultSettings)) {
                setFiltered(products);
            } else {
                let finalRes = products;
                if(filters.price.max > 0) {
                    finalRes = finalRes.filter((prod) => prod.price >= filters.price.min && prod.price <= filters.price.max)
                }
                if(filters.rating.length > 0) {
                    finalRes = finalRes.filter((prod) => filters.rating.some((rate) => Math.floor(prod.rating.rate) == rate))
                }
                setFiltered(finalRes)
            }
        } else {
            setFiltered([])
        }

    }, [filters, products])

    return filtered
}

export default useFilter