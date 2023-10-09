import { typeProduct } from "../../types/types"
import Product from "./Product"




const Products =({products} : {products: typeProduct[]}) => {



    return(<ul className="grid grid-cols-2  md:grid-cols-3 gap-x-4 gap-y-10 w-responsive mx-auto py-4">
        {products.map((product) => {
            return <Product {...product}/>
        })}
    </ul>)
}

export default Products