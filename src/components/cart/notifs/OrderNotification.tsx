import { useLocation } from "react-router-dom"
import { useCart } from "../../../hooks/cart/useCart"
import useNotification from "../../../hooks/useNotification"
import {useRef} from "react"
import { useShowCart } from "../../../hooks/cart/useCartStatus"
import {useState, useEffect} from "react"
import { typeProduct } from "../../../types/types"

const OrderNotification = ({product}: {product: typeProduct}) => {
    const showCart = useShowCart()
    const location = useLocation()
    const path = location.pathname.split("/")[1]    
    const notificationRef = useRef<HTMLDivElement>(null)    
    const [status, setStatus] = useState(true)
    
    const hideNotificaion = () => {         
        notificationRef.current!.classList.add('slide-out-right');        
        setTimeout(() => {            
            setStatus(false)
        },850)         
    }
    
    useEffect(() => {        
        setTimeout(() => {
            hideNotificaion()
        },5000) 
    },[])
    
    if(status == false || path == "order" ||  product == undefined) {
        return null
    }
  

    return(<div ref={notificationRef} className="slide-in z-20 bottom-5 mx-[auto]  left-[15%] mr-[10%] md:bottom-[unset] md:mx-[unset] md:left-[unset]  md:right-10 md:top-[20%] bg-black text-accent fixed  md:mr-10  rounded p-1  flex items-center ">
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