import { Route, Routes } from "react-router-dom"
import OrderCart from "./OrderCart"
import OrderNav from "./OrderNav"




const OrderPage = () => {

    return(<div>
        <OrderNav />
        <Routes>
            <Route element={<OrderCart />} path="/"/>
            <Route element={<h1>Checkout</h1>} path="/checkout"/>
            <Route element={<h1>Complete</h1>} path="/complete"/>
        </Routes>


    </div>)
}


export default OrderPage