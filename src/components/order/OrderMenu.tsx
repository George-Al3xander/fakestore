import { NavLink } from "react-router-dom"
import { typeProduct } from "../../types/types"




const OrderMenu = ({cart} : {cart: typeProduct[]}) => {
    const total = cart.reduce((prev: number, curr: typeProduct) => {            
        return prev + curr.count! *  curr.price
    }, 0) 
    return(<div className="border-[1px] basis-[40%] rounded-xl p-4">
        <ul className="w-[100%] flex flex-col gap-4 border-b-[1px] pb-4 mb-4">
            <li className="flex justify-between items-center gap-10"><h2 className="opacity-60">Subtotal: </h2> <h2 className="font-medium">${total}</h2></li>
            <li className="flex justify-between items-center gap-10"><h2 className="opacity-60">Shipping Coasts:</h2> <h2 className="font-medium">$50</h2></li>
        </ul>
        <NavLink to={"/order/checkout"}>
            <button  className="whitespace-nowrap text-accent bg-primary-500 px-5 py-3  rounded-full  w-[100%]">Checkout | ${total + 50}</button>

        </NavLink>

    </div>)
}

export default OrderMenu