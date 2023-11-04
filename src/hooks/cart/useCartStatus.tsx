import { createContext, useState, useContext} from 'react'


type useCartStatusManagerResult = ReturnType<typeof useCartStatusManager>

const CartStatusContext = createContext<useCartStatusManagerResult>({
    cartStatus: false,
    showCart: () => {},
    hideCart: () => {}
})


// type typeAction = 
//     | {type: "SHOW"}
//     | {type: "HIDE"}



// const StatusReducer = (state: boolean, action: typeAction) => {
//     const {type} = action
//     switch(type) {
//         case "SHOW":
//             return true
//         case "HIDE":
//             return false
//         default: return state
//     }
// }



export const useCartStatusManager = () => {
    //const [cartStatus, dispatch] = useReducer(StatusReducer, false);
    const [cartStatus, setCartStatus] = useState(false);



    // const showCart = useCallback(() => {      
    //     dispatch({type: "SHOW"})
    // },[])

    // const hideCart = useCallback(() => {       
    //     dispatch({type: "HIDE"})
    // },[])

    const showCart = () => {       
        setCartStatus(true)
    }
    const hideCart = () => {
        setCartStatus(false)
    }

    return {cartStatus, showCart, hideCart}
}


export const CartStatusProvider = ({children} : {children: React.ReactNode}) => (
    <CartStatusContext.Provider value={useCartStatusManager()} >{children}</CartStatusContext.Provider>
)


export const useCartStatus = () => {
    const {cartStatus} = useContext(CartStatusContext)
    
    return cartStatus
}

export const useShowCart =() => {
    const {showCart} = useContext(CartStatusContext)
    return showCart
}

export const useHideCart =() => {
    const {hideCart} = useContext(CartStatusContext)
    return hideCart
}

