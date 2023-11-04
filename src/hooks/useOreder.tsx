import { createContext,useState, useContext} from 'react'
import { typeFormData } from '../types/types'

// type initialOrderStateType = [order: typeFormData, setOrder: React.Dispatch<React.SetStateAction<typeFormData>>
// ]

type useOrderMangerResult = ReturnType<typeof useOrderManager>

const emptyOrder = {name: {
    first: "",
    last: "",
  },
  country: "",
  street: "",
  city: "",
  postcode: "",
  email: ""}

const OrderContext = createContext<useOrderMangerResult>({
    order: emptyOrder,
    setOrder: () => {},
    setOrderInfoValid: () => {},
    orderInfoValid: false
})


export const useOrderManager = (/*initialOrderState: initialOrderStateType*/) => {
    const [orderInfoValid, setOrderInfoValid] = useState(false)
    const [order, setOrder] = /*initialOrderState*/useState<typeFormData>(emptyOrder)

    return {order, setOrder, orderInfoValid, setOrderInfoValid}

}


export const OrderProvider = ({/*value,*/children} : {/*value:initialOrderStateType,*/children: React.ReactNode}) => (
    <OrderContext.Provider value={useOrderManager(/*value*/)}>{children}</OrderContext.Provider>)


export const useOrder = () => {
    const {order, setOrder} = useContext(OrderContext)
    
    return {order, setOrder}
}

export const useOrderInfoValid = () => {
    const {orderInfoValid, setOrderInfoValid} = useContext(OrderContext)

    return {orderInfoValid, setOrderInfoValid}
}