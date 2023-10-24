import { typeAction, typeProduct } from "../types/types";
import { createContext, useCallback, useReducer} from 'react'

type useCartManagerResult = ReturnType<typeof useCartManager>;

const CartContext = createContext<useCartManagerResult>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    incrementProduct: () => {}, 
    decrementProduct: () => {}
});

export const useCartManager = () => {
    const [cart, dispatch] = useReducer(
        (state: typeProduct[], action: typeAction) => {
          switch(action.type) {
            case "ADD":
              if(state.length == 0) {
                  return [{...action.product,count: action.count}]
              } else {
                  const oldItem = state.some((el) => el.id == action.product.id) 
                  if(oldItem) {    
                    const tempArray = state.map((item) => {
                      if(item.id == action.product.id) {
                        return {...item, count: item.count! + action.count}
                      } else {
                        return item
                      }            
                    })
                    return tempArray       
                  } else {    
                    return [...state, {...action.product,count: action.count}]            
                  }
              }        
              case "REMOVE": 
                return state.filter(({id}) => id != action.id)
              
              case "CHANGE": 
                if(action.changeType == "INCREMENT") {
                  return state.map((prod) => action.id == prod.id ? {...prod, count: prod.count! + 1} : prod)
                } else {
                  return state.map((prod) => action.id == prod.id ? {...prod, count: prod.count! - 1} : prod)
                }
              default: throw new Error()
          }
        },[]);

        const addToCart = useCallback((product:typeProduct,count: number) => {
            dispatch({type: "ADD", product,count})
        }, [])

        const removeFromCart = useCallback((id: string) => {
            dispatch({type: "REMOVE", id})
        }, [])

        const incrementProduct = useCallback((id: string) => {
            dispatch({type: "CHANGE", id, changeType: "INCREMENT"})
        },[])

        const decrementProduct = useCallback((id: string) => {
            dispatch({type: "CHANGE", id, changeType: "DECREMENT"})
        },[])
    return {cart, addToCart, removeFromCart, incrementProduct, decrementProduct }
}


export const CartProvider:React.FunctionComponent = (children) => (
    <CartContext.Provider value={useCartManager()}>{children}</CartContext.Provider>
)