import { createContext, useCallback,useState, useContext, useReducer} from 'react'


type useCartStatusManagerResult = ReturnType<typeof useCartStatusManager>

const CartStatusContext = createContext<useCartStatusManagerResult>({
    cartStatus: false,
    setCartStatus: () => {}
})



export const useCartStatusManager = () => {
    const [cartStatus, setCartStatus] = useState(false)
    
    return {cartStatus, setCartStatus}
}


export const CartStatusProvider = ({children} : {children: React.ReactNode}) => (
    <CartStatusContext.Provider value={useCartStatusManager()} >{children}</CartStatusContext.Provider>
)


export const useCartStatus =() => {
    const {cartStatus} = useContext(CartStatusContext)
    return cartStatus
}

export const useChangeCartStatus = () => {
    const {setCartStatus} = useContext(CartStatusContext)
    return setCartStatus
}