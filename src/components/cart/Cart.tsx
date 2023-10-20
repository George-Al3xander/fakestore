import { typeProduct } from "../../types/types"
import {AiOutlineClose} from "react-icons/ai"
import {BsHandbag} from "react-icons/bs";
import CartItem from "./CartItem";
import {useRef} from "react"
import { NavLink } from "react-router-dom";


const Cart = ({cart, setCart, setCartStatus} : {cart: typeProduct[], setCart: any, setCartStatus: any}) => {

    const total = cart.reduce((prev: number, curr: typeProduct) => {            
        return prev + curr.count! *  curr.price
    }, 0) 

    const cartRef = useRef<HTMLDivElement>(null)

    const hideCart = () => {         
        cartRef.current!.classList.add('slide-out-right');
        setTimeout(() => {            
            setCartStatus(false)
        },550)         
    }

    if(cart.length == 0) {
        return(<div  className='bg-ts fixed w-[100%]  h-[100vh] z-[150]'>
        <div ref={cartRef} className="slide-in right-0  bg-accent h-[100%] fixed p-4  w-[100%] md:w-[50%]">
            <div className="flex justify-between items-center border-b-2 pb-4">
                <h2 className="text-lg font-medium">Your cart</h2>
                <button onClick={hideCart}><AiOutlineClose size={20}/></button>
            </div>
            <div>
              <p>Your cart is empty</p>
            </div>
        </div>
    </div>)
    }



    return(<div  className='bg-ts fixed w-[100%]  h-[100vh] z-[150]'>
        <div ref={cartRef} className="slide-in right-0  bg-accent h-[100%] fixed  w-[100%] md:w-[50%]">
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
                    <button onClick={() => setCartStatus(false)} className="whitespace-nowrap text-accent bg-primary-500 px-8 py-4 mx-auto rounded-full  w-[min-content]">Checkout</button>

                </NavLink>
            </div>
        </div>
    </div>)
}


export default Cart