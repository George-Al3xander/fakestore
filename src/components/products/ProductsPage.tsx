import { useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import Products from "./Products"
import {useState} from "react"
import Spinner from "../Spinner"
import { typeProduct } from "../../types/types"

const ProductsPage = () => {
    const {id} = useParams()  
    //const [products, setProducts] = useState<typeProduct[]>([])
    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products/category/${id}`
        const data = await fetch(`${apiLink}`)
        const res = await data.json()       
        return res
    }
    const {data: products, isLoading, isError} = useQuery({queryKey: ["category",id],queryFn: getData})
    const [sortStatus, setSortStatus] = useState("rating")

    if (isLoading) {   
            return <div className="w-[100%] flex justify-center items-center h-[85vh]">
                     <Spinner height={"85h"}/>
                    </div>      
    }

    if(isError) {
        return "Error"
    }
    

    const sortProducts = () : typeProduct[]  =>  {
        if(sortStatus == 'rating') {
            return products.sort((a: typeProduct, b: typeProduct) => {
                return b.rating.rate - a.rating.rate
            })
        } else if(sortStatus == 'price-top'){
            return products.sort((a: typeProduct, b: typeProduct) => {
                return b.price - a.price
            })
        } else if(sortStatus == 'price-low'){
            return products.sort((a: typeProduct, b: typeProduct) => {
                return a.price - b.price
            })
        }

        return products
    }


    

    return(<div className="w-responsive mx-auto flex py-10" id={id} key={id}>        
        <ul className="w-[30%] bg-red-200">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <div>
            <div className="flex justify-end"><select onChange={(e) => setSortStatus(e.target.value)} className="p-1 mb-10" defaultValue={"rating"} name="sorted" id="">
                <option value="rating">Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-top">Price: High to Low</option>
                </select></div>
            <Products products={sortProducts()}/>

        </div>

    </div>)
}

export default ProductsPage