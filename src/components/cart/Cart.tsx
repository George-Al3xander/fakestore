import { typeProduct } from "../../types/types"
import {AiOutlineClose} from "react-icons/ai"
import CartItem from "./CartItem";
import {useRef} from "react"
import { NavLink } from "react-router-dom";
import { useCart} from "../../hooks/cart/useCart";
import { useCartStatus, useHideCart } from "../../hooks/cart/useCartStatus";
import {TbShoppingCartSearch} from "react-icons/tb"

const Cart = () => {
    const cart = useCart();
    const total = cart.reduce((prev: number, curr: typeProduct) => {            
        return prev + curr.count! *  curr.price
    }, 0) 
    const cartRef = useRef<HTMLDivElement>(null)
    const status = useCartStatus()
    
    const closeCart = useHideCart()
    const hideCart = () => {         
        cartRef.current!.classList.add('slide-out-right');
        setTimeout(() => {            
           closeCart()
        },550)         
    }
    
    if(status == false) {
        return null
    }

    

    if(cart.length == 0) {
        return(<div onClick={hideCart}  className='bg-ts fixed w-[100%]  h-[100vh] z-[150]'>
        <div onClick={(e) => e.stopPropagation} ref={cartRef} className="slide-in right-0  bg-accent h-[100%] fixed p-4  w-[100%] md:w-[50%]">
            <div className="flex justify-between items-center border-b-2 pb-4">
                <h2 className="text-lg font-medium">Your cart</h2>
                <button onClick={hideCart}><AiOutlineClose size={20}/></button>
            </div>
            <div className="w-[100%]  h-[100%] flex justify-center items-center flex-col gap-4">
                <TbShoppingCartSearch className={"fill-primary-700"} size={70}/>
                <h3 className="text-lg font-bold">Your cart is currently empty :(</h3>
            </div>
        </div>
    </div>)
    }



    return(<div onClick={() => hideCart()}  className='bg-ts fixed w-[100%]  h-[100vh] z-[150]'>
        <div onClick={(e) => e.stopPropagation()} ref={cartRef} className="slide-in right-0  bg-accent h-[100%] fixed  w-[100%] md:max-w-[30rem] md:w-[50%]">
            <div className="flex justify-between items-center border-b-2 p-4">
                <h2 className="text-lg font-medium">Your cart</h2>
                <button onClick={hideCart}><AiOutlineClose size={20}/></button>
            </div>
            <ul className="flex flex-col p-4 gap-4 max-h-[50%] overflow-y-scroll">
                {cart.map((prod) => {
                    return <CartItem product={prod}/>
                })}
            </ul>
            <div className="p-4 flex justify-between border-b-2">
                <h2 className="uppercase ml-[5rem]">total</h2>
                <span className="text-xl text-red-600 font-bold">${total}</span>
            </div>
            <div className="p-4">
                <NavLink to={"/order"}>
                    <button onClick={hideCart} className="whitespace-nowrap text-accent bg-primary-500 px-8 py-4 mx-auto rounded-full  w-[min-content]">Checkout</button>

                </NavLink>
            </div>
        </div>
    </div>)
}


export default Cart