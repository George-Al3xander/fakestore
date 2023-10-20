import { useContext } from "react"
import { CartContext } from "../../context/context"
import CartItem from "../cart/CartItem"
import { typeProduct } from "../../types/types"
import OrderItem from "./OrderItem"
import OrderMenu from "./OrderMenu"


const OrderCart = () => {
    const {cart, setCart} = useContext(CartContext)
   
    const amount = cart.reduce((prev: number, curr: typeProduct) => {            
        return prev + curr.count!
    }, 0) 

    const addCount = (id:string) => {
        const tempArray = cart.map((prod: typeProduct) => {
            if(prod.id == id) {
                return {...prod,count: prod.count! + 1}
            } else {
                return prod
            }
        })
        setCart(tempArray)
            
    }

    const decrementCount = (id:string) => {
        const tempArray = cart.map((prod: typeProduct) => {
            if(prod.id == id) {
                return {...prod,count: prod.count! - 1}
            } else {
                return prod
            }
        })
        setCart(tempArray)
        
    }

    return(
        <div className="basis-[60%]">
            <div className="flex justify-between items-center border-b-2 pb-4">
                    <h2 className="text-lg font-medium">Your cart</h2>
                    <span className="opacity-60 text-sm">({amount})</span>
                </div>
            <ul className="flex flex-col p-4 gap-4">
                    {cart.map((prod: typeProduct) => {
                        return <OrderItem addCount={addCount} decrementCount={decrementCount} product={prod}/>
                    })}
                </ul>
        </div>)
}

export default OrderCart