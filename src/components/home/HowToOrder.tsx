import { useEffect } from "react"
import {BsFillPersonVcardFill, BsHandbag, BsWallet2, BsFillCheckCircleFill} from "react-icons/bs"
import { NavLink } from "react-router-dom"



const HowToOrder = () => {
    const width = Math.abs((window.innerWidth - 1440) / 2)
    
    


    return(<div className={`px-[10%] py-10 bg-black text-white text-center`}>
        <div  className="mb-20">
            <h2 className="text-4xl font-bold mb-10">HOW TO ORDER FAKE PRODUCTS ONLINE FROM FAKE STORE - MAIL ORDER FAKE PRODUCTS</h2>
            <p className="opacity-60 text-sm">Ordering fake products online from Fake Store is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their fake products online.</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            <li className="flex flex-col gap-10 relative">                
                    <span className="bg-[goldenrod] left-[30%] absolute text-black text-xl text-center py-1 w-10 h-10 aspect-square rounded-[50%]">1</span>
                    <div className="flex flex-col gap-5">
                        <BsFillPersonVcardFill size={100} className="mx-auto"/>
                        <h3 className="uppercase text-lg font-bold">register</h3>
                    </div>                
                <p className="opacity-60 text-sm">Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.</p>
            </li>   
            <li className="flex flex-col gap-10 relative">
                    <span className="bg-[goldenrod] left-[30%] absolute text-black text-xl text-center py-1 w-10 h-10 aspect-square rounded-[50%]">2</span>
                    <div className="flex flex-col gap-5">
                        <BsHandbag size={100} className="mx-auto"/>
                        <h3 className="uppercase text-lg font-bold">shop</h3>                
                </div>
                <p className="opacity-60 text-sm">Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone.</p>
            </li> 
            <li className="flex flex-col gap-10 relative">
                    <span className="bg-[goldenrod] left-[30%] absolute text-black text-xl text-center py-1 w-10 h-10 aspect-square rounded-[50%]">3</span>
                    <div className="flex flex-col gap-5">
                        <BsWallet2 size={100} className="mx-auto"/>
                        <h3 className="uppercase text-lg font-bold">make payment</h3>                
                    </div>
                <p className="opacity-60 text-sm">Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.</p>
            </li> 
            <li className="flex flex-col gap-10 relative">
                    <span className="bg-[goldenrod] left-[30%] absolute text-black text-xl text-center py-1 w-10 h-10 aspect-square rounded-[50%]">4</span>
                    <div className="flex flex-col gap-5">
                        <BsFillCheckCircleFill size={100} className="mx-auto"/>
                        <h3 className="uppercase text-lg font-bold">relax</h3>                
                </div>
                <p className="opacity-60 text-sm">Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.</p>
            </li>          
        </ul>
        <NavLink to={"/shop"} className="text-accent bg-primary-500 px-5  py-3 mx-auto rounded-full">Choose your product</NavLink>

    </div>)
}

export default HowToOrder