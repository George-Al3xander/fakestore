import {Route, Routes, useLocation, useNavigate } from "react-router-dom"
import OrderCart from "./OrderCart"
import OrderNav from "./OrderNav"
import OrderMenu from "./OrderMenu"
import OrderCheckout from "./OrderCheckout"
import { OrderProvider} from "../../hooks/useOreder"
import {useEffect} from "react"
import OrderComplete from "./OrderComplete"
import { useCart } from "../../hooks/cart/useCart"

const OrderPage = () => {        
    const cart = useCart()
    const navigate = useNavigate();   
    const location = useLocation();
    const path = location.pathname;
    const step = path.split("/")[2];
    useEffect(() => {
        if(cart.length == 0 && step != "complete") {
            navigate("/")           
        }
    }, [])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return(<div>
        <OrderProvider /*value={[order,setOrder]} */ >
            <OrderNav />
            <div className="flex flex-col md:flex-row gap-10 py-4 w-responsive mx-auto">
                <Routes>
                    <Route element={<OrderCart />} path="/"/>
                    <Route element={<OrderCheckout />} path="/checkout"/>
                    <Route element={<OrderComplete />} path="/complete"/>
                </Routes>
            <OrderMenu  />        
            </div>

        </OrderProvider>
    </div>)
}


export default OrderPage