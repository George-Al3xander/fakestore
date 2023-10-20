import { useContext } from "react"
import { CartContext } from "../../context/context"
import CartItem from "../cart/CartItem"
import { typeProduct } from "../../types/types"
import OrderItem from "./OrderItem"


const OrderCart = () => {
    const {cart} = useContext(CartContext)
    const total = cart.reduce((prev: number, curr: typeProduct) => {            
        return prev + curr.count! *  curr.price
    }, 0) 
    const amount = cart.reduce((prev: number, curr: typeProduct) => {            
        return prev + curr.count!
    }, 0) 

    return(<div>
        <div>
        <div className="flex justify-between items-center border-b-2 pb-4">
                <h2 className="text-lg font-medium">Your cart</h2>
                <span className="opacity-60 text-sm">({amount})</span>
            </div>
        <ul className="flex flex-col p-4 gap-4 max-h-[50%] overflow-y-scroll">
                {cart.map((prod: typeProduct) => {
                    return <OrderItem product={prod}/>
                })}
            </ul>
        </div>
    </div>)
}

export default OrderCart