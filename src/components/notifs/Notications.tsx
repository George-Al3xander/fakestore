import { useLocation } from "react-router-dom"
import useNotification from "../../hooks/useNotification"
import OrderNotification from "./OrderNotification"
import { useCartStatus } from "../../hooks/cart/useCartStatus"




const Notications = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[1]
    const notifs = useNotification()
    const cartStatus = useCartStatus()
    if(path == "order" || notifs.length == 0 || cartStatus) {
        return null
    }
    return(<>
        {notifs.map((product) => {
            return <OrderNotification  product={product}/>
        })}
    </>)
}

export default Notications