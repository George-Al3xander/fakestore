import { typeProduct } from "../../types/types"
import Product from "./Product"
import {v4 as uuidv4} from 'uuid';



const Products =({products} : {products: typeProduct[]}) => {   
    return(<ul key={uuidv4()} className="grid grid-cols-2  md:grid-cols-3 gap-x-4 gap-y-10">
        {products.map((product) => {
            return <Product {...product}/>
        })}
    </ul>)
}

export default Products