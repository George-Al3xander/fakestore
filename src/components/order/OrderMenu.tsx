import { NavLink } from "react-router-dom"
import { typeProduct } from "../../types/types"
import { useCart } from "../../hooks/cart/useCart";
import { useOrderInfoValid } from "../../hooks/useOreder";




const OrderMenu = () => {
    const cart = useCart()
    const total = cart.reduce((prev: number, curr: typeProduct) => { 
        return prev + (curr.count! *  curr.price)
    }, 50);
    const {orderInfoValid} = useOrderInfoValid()

   
    return(<div className="border-[1px] w-[100%] md:basis-[40%] rounded-xl p-4 self-start">
        <ul className="w-[100%] flex flex-col gap-4 border-b-[1px] pb-4 mb-4">
            <li className="flex justify-between items-center gap-10"><h2 className="opacity-60">Subtotal: </h2> <h2 className="font-medium">${total}</h2></li>
            <li className="flex justify-between items-center gap-10"><h2 className="opacity-60">Shipping Coasts:</h2> <h2 className="font-medium">$50</h2></li>
        </ul>
        <NavLink to={"/order/checkout"}>
            <button disabled={!orderInfoValid}  className="whitespace-nowrap text-accent bg-primary-500 px-5 py-3  rounded-full  w-[100%] disabled:opacity-50">Checkout | ${total.toFixed(2)}</button>
        </NavLink>

    </div>)
}

export default OrderMenu