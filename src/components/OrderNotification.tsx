import { useLocation } from "react-router-dom"
import { useCart } from "../hooks/cart/useCart"
import useNotification from "../hooks/useNotification"


import {useRef} from "react"
import { useShowCart } from "../hooks/cart/useCartStatus"


const OrderNotification = () => {
    const showCart = useShowCart()
    const location = useLocation()
    const path = location.pathname.split("/")[1]
    
    const notificationRef = useRef<HTMLDivElement>(null)
    const status = useNotification(notificationRef);
    const cart = useCart()
    const product = cart[cart.length-1]
    
    if(path == "order" || status == false) {
        return null
    }

    
    

    return(<div ref={notificationRef} className="slide-in bg-black text-accent fixed right-10 mr-10 top-[20%] rounded p-1 z-[20] flex items-center">
       <div className="w-[3rem] h-[3rem] overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover" src={product.image} alt="Notificaion" />
       </div>
       <div className="p-2 flex gap-4">
            <span>Product added to cart</span>
            <button onClick={() => showCart()} className="text-primary-500">Cart</button>
       </div>
    </div>)
}


export default OrderNotification