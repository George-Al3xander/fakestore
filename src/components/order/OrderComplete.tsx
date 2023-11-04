import { useCart, useResetCart } from "../../hooks/cart/useCart"
import { useOrder } from "../../hooks/useOreder";
import { NavLink } from "react-router-dom";
import OrderItem from "./OrderItem"
import {useEffect, useState} from "react"

const OrderComplete = () => {
    const cart = useCart();
    const [tempCart, _setTempCart] = useState(cart)
    const resetCart = useResetCart()
    const {order} = useOrder()
    const total = tempCart.reduce((prev, curr) => { 
        return prev + (curr.count! *  curr.price)
    }, 0);

    const shipping = total > 149 ? 0 : 50
    const discount = 0
    useEffect(() => {
        resetCart();
    }, [])

    return(<div className="w-[100%]">
        <div className="flex justify-between items-center border-b-2 mb-10 pb-4">
                <h2 className="text-lg font-medium">Your order</h2>                    
        </div>
        <ul className="flex flex-col p-4 gap-4 w-[100%]">
            {tempCart.map((prod) => {
                return <OrderItem complete product={prod}/>
            })}
        </ul>
        <div className="flex justify-between items-center border-b-2 my-4 pb-4">
            <h2 className="uppercase">Total</h2>           
            <span className="text-red-600 font-medium text-xl">${total}</span>         
        </div>
        <div className="flex gap-10 flex-col md:flex-row">
            <ul className="flex flex-col gap-4 basis-[100%] border-b-2 pb-10 md:pb-0 md:border-b-0">
                <li className="flex items-center justify-between">
                    <h4 className="opacity-60">Shipping</h4>
                    <h3>{order.city + ", " + order.country}</h3>
                </li>
                <li className="flex items-center justify-between">
                    <h4 className="opacity-60">Shipping options</h4>
                    <h3>None</h3>
                </li>
            </ul>

            <ul className="flex flex-col gap-4 basis-[100%]">
                <li className="flex items-center justify-between">
                    <h4 className="opacity-60">Subtotal</h4>
                    <h3>${total}</h3>
                </li>

                <li className="flex items-center justify-between">
                    <h4 className="opacity-60">Discount</h4>
                    <h3>${discount}</h3>
                </li>

                <li className="flex items-center justify-between">
                    <h4 className="opacity-60">Shipping costs</h4>
                    <h3>${shipping}</h3>
                </li>
                
                <li className="flex justify-between items-center border-b-2 my-4 pb-4">
                     <h2 className="uppercase">Total</h2>           
                    <span className="text-red-600 font-medium text-xl">${(total + discount + shipping).toFixed(2)}</span>         
                </li>
            </ul>
        </div>
        <div className="flex flex-col gap-4 justify-center my-10">
            <p className="capitalize opacity-60 text-center">new order, click button below</p>
            <NavLink to={"/"} className="whitespace-nowrap text-accent bg-primary-500 px-5 py-3 mx-[auto]  rounded-full w-[min-content] disabled:opacity-50 disabled:cursor-not-allowed">Shop Now</NavLink>
        </div>
    </div>)
}

export default OrderComplete