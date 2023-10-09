import { typeProduct } from "../../types/types"
import Product from "./Product"




const Products =({products} : {products: typeProduct[]}) => {
    return(<ul key={products.length} className="grid grid-cols-2  md:grid-cols-3 gap-x-4 gap-y-10">
        {products.map((product) => {
            return <Product {...product}/>
        })}
    </ul>)
}

export default Products