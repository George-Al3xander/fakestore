import { useEffect, useState } from 'react'
import { useCart } from './cart/useCart'




const useNotification = (ref: React.RefObject<HTMLDivElement>) => {
    const [status, setStatus] = useState(false)
    const cart = useCart();

    const hideNotificaion = () => {         
        ref.current!.classList.add('slide-out-right');        
        setTimeout(() => {            
            setStatus(false)
        },850)         
    }

    useEffect(() => {
        // if(status == true) {    
        //     setStatus(false)       
        //    ref.current!.style.webkitAnimation = 'none';
        //     setTimeout(function() {
        //         ref.current!.style.webkitAnimation = '';
        //     }, 10);
        //     setStatus(true)
        //     setTimeout(() => {
        //         hideNotificaion()
        //     },5000)    
           
        // } 
        if(cart.length > 0)  {
            setStatus(true)
            setTimeout(() => {
                hideNotificaion()
            },5000)           
        }
        
    }, [cart])


    return status
}

export default useNotification