import { useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import {useState } from 'react'

import Spinner from "../Spinner"
import ProductsMainDisplay from "./ProductsMainDisplay"

import FilterMenu from "../../filter/FilterMenu"
import FilterMenuMobile from "../../filter/FilterMenuMobile"
import useFilter from "../../hooks/useFilter"

const ProductsPage = () => {
    const {id} = useParams()  
    //const [products, setProducts] = useState<typeProduct[]>([])
    const [filterMenu, setFilterMenu] = useState(false);
    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products/category/${id}`
        const data = await fetch(`${apiLink}`)
        const res = await data.json()       
        return res
    }
    const defaultSettings = {
        price: {
            min:0,
            max: 0
        },
        rating: [],
        category: []
    }
    const [filters, setFilters] = useState(defaultSettings); 
    const showFilterMenu = () => {
        setFilterMenu(true)
    }
    
    const closeFilterMenu = () => {
        setFilterMenu(false)
    } 
    const {data: products, isLoading, isError} = useQuery({queryKey: ["category",id],queryFn: getData})
    const filtered = useFilter({products, filters})
    if (isLoading) {   
            return <div className="w-[100%] flex justify-center items-center h-[85vh]">
                     <Spinner height={"85h"}/>
                    </div>      
    }

    if(isError) {
        return <div>Error</div>
    }

    

    return(<div className="w-responsive mx-auto flex gap-4 py-12" id={id} key={id}>           
        <FilterMenu filters={filters} setFilters={setFilters} products={products}/>
        <ProductsMainDisplay showFilterMenu={showFilterMenu}  products={filtered} />
        {filterMenu ? <FilterMenuMobile filters={filters} setFilters={setFilters} closeFilterMenu={closeFilterMenu} products={products}/>: null}
        
    </div>)
}

export default ProductsPage