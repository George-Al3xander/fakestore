import { useRemoveFromCart } from "../../hooks/cart/useCart"
import { typeProduct } from "../../types/types"
import {AiOutlineClose} from "react-icons/ai"





const CartItem = ({product}: {product: typeProduct}) => {

    const total = product.price *  product.count!
    const removeFromCart = useRemoveFromCart()
    return <li className="flex justify-between border-b-2 py-2 gap-4">
        <div className="flex gap-4">
            <div className="w-[5rem] h-[5rem] overflow-hidden">
                <img className="w-[100%] h-[100%] object-contain" src={product.image} alt={`cart-${product.id}`} />
            </div>
            <div className="flex flex-col justify-between">
                <h2 className="text-primary-700 font-medium">{product.title}</h2>
                <div className="opacity-70 flex gap-2">
                    <span>{product.count}x</span>
                    <h4 className="text-medium">${product.price}</h4>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-between">
            <button style={{marginLeft: "auto"}} onClick={() => removeFromCart(product.id)}><AiOutlineClose /></button>
            <h3 className="font-bold">${total}</h3>
        </div>
    </li>
}


export default CartItem