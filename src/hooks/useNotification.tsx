import { useEffect, useState } from 'react'
import { useCart } from './cart/useCart'
import { typeProduct } from '../types/types';




const useNotification = () => {    
    const cart = useCart();
    const [notifs, setNotifs] = useState<typeProduct[]>([])
   

    useEffect(() => { 
        if(cart.length > 0)  {            
            const product = cart[cart.length-1];
            setNotifs(prev => [...prev,  product])
        }   
    }, [cart])


    return notifs
}

export default useNotification