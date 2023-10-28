import { Navigate, Route, Routes } from "react-router-dom"
import OrderCart from "./OrderCart"
import OrderNav from "./OrderNav"
import OrderMenu from "./OrderMenu"
import OrderCheckout from "./OrderCheckout"
import { OrderProvider, useOrder } from "../../hooks/useOreder"
import {useState} from "react"
import { typeFormData } from "../../types/types"

const OrderPage = () => {    
    // const emptyOrder = {name: {
    //     first: "",
    //     last: "",
    //   },
    //   country: "",
    //   street: "",
    //   city: "",
    //   postcode: "",
    //   email: ""}
    
    //   const [order,setOrder] = useState<typeFormData>(emptyOrder)
    
    return(<div>
        <OrderProvider /*value={[order,setOrder]} */ >
            <OrderNav />
            <div className="flex flex-col md:flex-row gap-10 py-4 w-responsive mx-auto">
                <Routes>
                    <Route element={<OrderCart />} path="/"/>
                    <Route element={<OrderCheckout />} path="/checkout"/>
                    <Route element={<h1>Complete</h1>} path="/complete"/>
                </Routes>
            <OrderMenu  />        
            </div>

        </OrderProvider>
    </div>)
}


export default OrderPage