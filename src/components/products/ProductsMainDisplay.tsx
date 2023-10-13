import Products from "./Products"
import {useState,} from "react"
import useSortProducts from "../../hooks/useSortProducts"
import { typeProduct } from "../../types/types"



const ProductsMainDisplay = ({products} : {products: typeProduct[]}) => {
    const [sortStatus, setSortStatus] = useState("rating")
    const sorted = useSortProducts(products, sortStatus)
    return(<div>
        <div className="flex justify-end"><select onChange={(e) => setSortStatus(e.target.value)} className="p-1 mb-10"  name="sorted" id="">
            <option value="rating">Top Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-top">Price: High to Low</option>
            </select></div>
        <Products products={sorted}/>

    </div>)
}

export default ProductsMainDisplay