import { Route, Routes } from "react-router-dom"
import OrderCart from "./OrderCart"
import OrderNav from "./OrderNav"
import {useContext} from "react"
import OrderMenu from "./OrderMenu"
import { CartContext } from "../../context/context"


const OrderPage = () => {
    const {cart} = useContext(CartContext)
    return(<div>
        <OrderNav />
        <div className="flex flex-col md:flex-row gap-10 py-4 w-responsive mx-auto">
            <Routes>
                <Route element={<OrderCart />} path="/"/>
                <Route element={<h1>Checkout</h1>} path="/checkout"/>
                <Route element={<h1>Complete</h1>} path="/complete"/>
            </Routes>
        <OrderMenu  cart={cart}/>

        </div>


    </div>)
}


export default OrderPage