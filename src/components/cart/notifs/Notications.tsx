import { useLocation } from "react-router-dom"
import useNotification from "../../../hooks/useNotification"
import OrderNotification from "./OrderNotification"




const Notications = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[1]
    const notifs = useNotification()

    if(path == "order" || notifs.length == 0) {
        return null
    }
    return(<>
        {notifs.map((product) => {
            return <OrderNotification  product={product}/>
        })}
    </>)
}

export default Notications