import { typeProduct } from "../types/types"

import {useRef, useEffect} from "react"


const OrderNotification = ({product,  setNotification, setCartStatus}: {product: typeProduct,  setNotification: any, setCartStatus: any}) => {

    const notificationRef = useRef<HTMLDivElement>(null)

    const hideNotificaion = () => {         
        notificationRef.current!.classList.add('slide-out-right');
        setTimeout(() => {            
            setNotification(false)
        },850)         
    }

    useEffect(() => {
        setTimeout(() => {
            hideNotificaion()
        },5000)
    },[])

    

    return(<div ref={notificationRef} className="slide-in bg-black text-accent fixed right-10 mr-10 top-[20%] rounded p-1 z-[20] flex items-center">
       <div className="w-[3rem] h-[3rem] overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover" src={product.image} alt="Notificaion" />
       </div>
       <div className="p-2 flex gap-4">
            <span onClick={hideNotificaion}>Product added to cart</span>
            <button onClick={() => setCartStatus(true)} className="text-primary-500">Cart</button>
       </div>
    </div>)
}


export default OrderNotification