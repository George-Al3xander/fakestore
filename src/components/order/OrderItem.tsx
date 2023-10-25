
import { useDecrementProduct, useIncrementProduct } from "../../hooks/cart/useCart"
import { typeProduct } from "../../types/types"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"




const OrderItem = ({product}: {product: typeProduct}) => {

    const total = product.price *  product.count!
    const {count, rating,price, title, id} = product
    const incrementProduct = useIncrementProduct()
    const decrementProduct = useDecrementProduct()
    
    return <li className="flex justify-between border-b-2 items-center py-4 gap-10 md:gap-4 flex-wrap ">
        <div className="flex gap-4">
            <div className="w-[2rem] h-[2rem] overflow-hidden">
                <img className="w-[100%] h-[100%] object-contain" src={product.image} alt={`cart-${product.id}`} />
            </div>
            <h2 title={title} className="opacity-60 font-medium max-w-[200px]  whitespace-nowrap float-left text-ellipsis overflow-hidden">{product.title}</h2>           
        </div>

        <div className="flex items-center gap-2">
            <div className="flex items-center gap-2"><button className="disabled:opacity-30 disabled:cursor-not-allowed" disabled={count! -2 < 0} onClick={() => decrementProduct(id)} ><AiOutlineMinus /></button> <span className="bg-gray-300 rounded text-lg w-[30px] h-[30px] text-center items-center">{count}</span> <button className="disabled:opacity-30 disabled:cursor-not-allowed" onClick={() => incrementProduct(id)} disabled={rating.count < count!}><AiOutlinePlus /></button></div>
            <span className="font-medium">${price}</span>
        </div>        
        <span className="font-medium">${total}</span>


        
    </li>
}


export default OrderItem