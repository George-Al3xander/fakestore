import { typeProduct } from "../../types/types"
import OrderItem from "./OrderItem"
import { useCart } from "../../hooks/cart/useCart"


const OrderCart = () => {
    const cart = useCart();
   
    const amount = cart.reduce((prev: number, curr: typeProduct) => {            
        return prev + curr.count!
    }, 0) 

    

    return(
        <div className="basis-[60%]">
            <div className="flex justify-between items-center border-b-2 pb-4">
                    <h2 className="text-lg font-medium">Your cart</h2>
                    <span className="opacity-60 text-sm">({amount})</span>
            </div>
            <ul className="flex flex-col p-4 gap-4">
                    {cart.map((prod: typeProduct) => {
                        return <OrderItem  product={prod}/>
                    })}
            </ul>
        </div>)
}

export default OrderCart