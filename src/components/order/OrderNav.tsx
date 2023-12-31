import { NavLink, useLocation } from "react-router-dom"
import {BsHandbag, BsCashStack, BsFillBagCheckFill, BsCheckLg} from "react-icons/bs";
import { useOrderInfoValid } from "../../hooks/useOreder";

const Line = () => {
    return(<div className="flex items-center basis-[10%]">                
    <span className="line rounded-sm"></span>
</div>)
}


const OrderNav = () => {
    const location = useLocation()
    const path = location.pathname
    const step = path.split("/")[2]

    const divStyles = "flex items-center gap-2"
    const spanStyles = "bg-accent p-2 rounded-[50%] overflow-hidden"
    const svgStyles = "transition-all duration-400 fill-primary-700"
    const {orderInfoValid} = useOrderInfoValid()
   
    //console.log(step)
    if(step && step == "complete") {
       return <div className="order-nav bg-gray-200 ">
        <nav className="flex justify-between p-4">
            
            <button disabled className={"opacity-60"} ><div className={divStyles}>
                <span className={`${spanStyles} bg-green-300`}>
                    <BsCheckLg className={svgStyles} size={20}/>
                    
                </span>                
                <h2>Shopping Cart</h2></div>
            </button>
                <Line />
            <button disabled className={"opacity-60"} ><div className={divStyles}>
                <span className={`${spanStyles} bg-green-300`}>
                     <BsCheckLg className={svgStyles} size={20}/> 
                </span>
                <h2>Checkout</h2></div>
            </button>
                <Line />
                <NavLink className={"opacity-60"} to={"/order/complete"}><div className={divStyles}><span className={spanStyles}><BsFillBagCheckFill className={svgStyles}  size={20}/></span><h2>Order Complete</h2></div></NavLink>
                
        </nav>
        
    </div>
    }


    return(<div className="order-nav bg-gray-200 ">
        <nav className="flex justify-between p-4">
            
            <NavLink className={"opacity-60"} end to={"/order"}><div className={divStyles}>
                <span className={`${spanStyles} ${step ? "bg-green-300" : ""}`}>
                    {step ? <BsCheckLg className={svgStyles} size={20}/> : <BsHandbag className={svgStyles}  size={20}/>}
                    
                </span>                
                <h2>Shopping Cart</h2></div>
            </NavLink>
                <Line />
            <NavLink className={"opacity-60"} to={"/order/checkout"}><div className={divStyles}>
                <span className={`${spanStyles} ${step == "complete" ? "bg-green-300" : ""}`}>
                    {step == "complete" ? <BsCheckLg className={svgStyles} size={20}/> : <BsCashStack className={svgStyles}  size={20}/>} 
                </span>
                <h2>Checkout</h2></div>
            </NavLink>
                <Line />

                {orderInfoValid ? 
                <NavLink className={"opacity-60"} to={"/order/complete"}><div className={divStyles}><span className={spanStyles}><BsFillBagCheckFill className={svgStyles}  size={20}/></span><h2>Order Complete</h2></div></NavLink>
                :
                <button disabled className={divStyles + " opacity-60 cursor-not-allowed"}><span className={spanStyles}><BsFillBagCheckFill className={svgStyles}  size={20}/></span><h2>Order Complete</h2></button>
                }
        </nav>
        
    </div>)
}

export default OrderNav