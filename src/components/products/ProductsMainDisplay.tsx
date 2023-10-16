import Products from "./Products"
import {useState,} from "react"
import useSortProducts from "../../hooks/useSortProducts"
import { typeProduct } from "../../types/types"
import {AiOutlineDown} from "react-icons/ai"


const ProductsMainDisplay = ({products, showFilterMenu} : {products: typeProduct[], showFilterMenu: any}) => {
    const [sortStatus, setSortStatus] = useState("rating")
    const sorted = useSortProducts(products, sortStatus)

    

    return(<div>        
        <div className="flex justify-between border-b-[1px] pb-4 gap-4  mb-10 flex-wrap">
            <h1 className="text-xl font-bold">Shop</h1>
            <div className="flex gap-4">
                <button onClick={showFilterMenu} className="md:hidden border-[1px] px-4 rounded-xl bg-gray-100 flex items-center gap-1"><span>Filter</span><AiOutlineDown size={14}/></button>
                <select onChange={(e) => setSortStatus(e.target.value)} className="p-1"  name="sorted" id="">
                    <option value="rating">Top Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-top">Price: High to Low</option>
                </select>
            </div>
        </div>
        {products.length > 0 ? <Products products={sorted}/> : <h1>No matching :(</h1>}

    </div>)
}

export default ProductsMainDisplay