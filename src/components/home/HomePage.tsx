import BestSellers from "./BestSellers"
import ChooseYourProducts from "./ChooseYourProduct"
import SummaryShort from "./SummaryShort"
import { NavLink } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import { typeProduct } from "../../types/types"

import Spinner from "../Spinner"
import HowToOrder from "./HowToOrder"


const HomePage = () => {
    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products`
        const data = await fetch(`${apiLink}`)
        const res: typeProduct[] = await data.json()       
        return res 
    }
    const {data: products, isLoading, isError} = useQuery({queryKey: ["bestsellers"],queryFn: getData})
    
    if (isLoading) {   
        return <div className="w-[100%] flex justify-center items-center">
                 <Spinner height={"85vh"}/>
            </div>      
    }

    if(isError) {
        return <div>Error</div>
    }
    return(<div>
        <div className="homepage-sec p-4 py-10 flex flex-col text-white   gap-4 drop-shadow-2xl text-pr backdrop-blur-xl bg-black bg-cover">
            <h4 className="text-orange-600">BEST SELLER</h4>
            <h1 className="text-3xl font-bold max-w-[50%]">BEST FAKE STORE TO BUY FAKE PRODUCTS ONLINE </h1>
            {/* <h3>Vitamins & Supplements</h3> */}
            <span className="flex gap-4">
                <h3>Get 25% off</h3>
                |
                <h3>Free Shipping</h3>
            </span>
            <NavLink to={"/shop"} className="whitespace-nowrap text-accent bg-primary-500 px-7 py-4  rounded-full  w-[min-content]">Shop All</NavLink>            
        </div>
        <SummaryShort />
        <h1 className="text-3xl font-bold text-center my-10">BEST FAKE STORE TO BUY FAKE PRODUCTS ONLINE </h1>
        <BestSellers products={products}/>
        <ChooseYourProducts products={products}/>
        <HowToOrder />
    </div>)
}


export default HomePage
