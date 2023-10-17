import { useLocation, useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import {useState , useEffect} from 'react'

import Spinner from "../Spinner"
import ProductsMainDisplay from "./ProductsMainDisplay"

import FilterMenu from "../filter/FilterMenu"
import useFilter from "../../hooks/useFilter"
import { typeFilters } from "../../types/types"

const ProductsPage = () => {
    const location = useLocation()    
    const {id} = useParams()   
    const [filterMenu, setFilterMenu] = useState(false);
    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products${location.pathname == "/shop" ?  "" : `/category/${id}`}`
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
    
    const showFilterMenu = () => {
        setFilterMenu(true)
    }
    
    const closeFilterMenu = () => {
        setFilterMenu(false)
    } 
    const [filters, setFilters] = useState<typeFilters>(defaultSettings); 
    const {data: products, isLoading, isError} = useQuery({queryKey: ["category",id],queryFn: getData})
    const filtered = useFilter({products, filters});

   
    const path = location.pathname
    useEffect(() => {       
        setFilters(defaultSettings)
    },[path])

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
        {filterMenu ? <FilterMenu mobile filters={filters} setFilters={setFilters} closeFilterMenu={closeFilterMenu} products={products}/>: null}
        
    </div>)
}

export default ProductsPage