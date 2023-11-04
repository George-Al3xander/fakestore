import {useShowCart } from "../../hooks/cart/useCartStatus"
import { typeProduct } from "../../types/types"

const OrderNotification = ({product}: {product: typeProduct}) => {
    const showCart = useShowCart()     

    return(<div key={`notif-${product.id}`} className=" text-accent  rounded flex gap-4 font-medium items-center">
       <div className="w-[4rem] h-[3rem] overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover" src={product.image} alt="Notificaion" />
       </div>
       <div className="flex gap-4 justify-between w-[100%]">
            <span>Product added to cart</span>
            <button onClick={() => showCart()} className="text-primary-500">Cart</button>
       </div>
    </div>)
}


export default OrderNotification