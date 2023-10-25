import { Route, Routes } from "react-router-dom"
import OrderCart from "./OrderCart"
import OrderNav from "./OrderNav"
import OrderMenu from "./OrderMenu"
import OrderCheckout from "./OrderCheckout"
import { useCart } from "../../hooks/cart/useCart"


const OrderPage = () => {
    


    const cart = useCart()
    return(<div>
        <OrderNav />
        <div className="flex flex-col md:flex-row gap-10 py-4 w-responsive mx-auto">
            <Routes>
                <Route element={<OrderCart />} path="/"/>
                <Route element={<OrderCheckout />} path="/checkout"/>
                <Route element={<h1>Complete</h1>} path="/complete"/>
            </Routes>
        <OrderMenu  cart={cart}/>        
        </div>


    </div>)
}


export default OrderPage