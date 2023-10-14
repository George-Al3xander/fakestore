import Products from "./Products"
import {useState,} from "react"
import useSortProducts from "../../hooks/useSortProducts"
import { typeProduct } from "../../types/types"



const ProductsMainDisplay = ({products} : {products: typeProduct[]}) => {
    const [sortStatus, setSortStatus] = useState("rating")
    const sorted = useSortProducts(products, sortStatus)
    return(<div>        
        <div className="flex justify-between border-b-[1px] pb-4  mb-10">
            <h1 className="text-xl font-bold">Shop</h1>
            <select onChange={(e) => setSortStatus(e.target.value)} className="p-1"  name="sorted" id="">
            <option value="rating">Top Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-top">Price: High to Low</option>
            </select>
        </div>
        <Products products={sorted}/>

    </div>)
}

export default ProductsMainDisplay