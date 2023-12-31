import { NavLink, useLocation } from "react-router-dom"
import { typeProduct } from "../../types/types"
import { useCart } from "../../hooks/cart/useCart";
import { useOrderInfoValid } from "../../hooks/useOreder";




const OrderMenu = () => {
    const location = useLocation()
    const path = location.pathname
    const step = path.split("/")[2]
    //console.log(step)
    const cart = useCart()
    const total = cart.reduce((prev: number, curr: typeProduct) => { 
        return prev + (curr.count! *  curr.price)
    }, 0);
    const {orderInfoValid} = useOrderInfoValid()
    if(step && step == "complete") {
        return null
    }
   
    return(<div className="border-[1px] w-[100%] md:basis-[40%] rounded-xl p-4 self-start">
        <ul className="w-[100%] flex flex-col gap-4 border-b-[1px] pb-4 mb-4">
            <li className="flex justify-between items-center gap-10"><h2 className="opacity-60">Subtotal: </h2> <h2 className="font-medium">${total}</h2></li>
            <li className="flex justify-between items-center gap-10"><h2 className="opacity-60">Shipping Coasts:</h2> <h2 className="font-medium">${total > 149 ? 0 : 50}</h2></li>
        </ul>
        <NavLink to={step ? "/order/complete" :"/order/checkout"}>
            <button disabled={step ? !orderInfoValid : false}  className="whitespace-nowrap text-accent bg-primary-500 px-5 py-3  rounded-full  w-[100%] disabled:opacity-50 disabled:cursor-not-allowed">{step ? "Place an order" : "Checkout"} | ${total > 149 ? total.toFixed(2) : (total + 50).toFixed()}</button>
        </NavLink>

    </div>)
}

export default OrderMenu