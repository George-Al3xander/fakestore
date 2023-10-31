import SummaryShort from "./SummaryShort"
import { NavLink } from "react-router-dom"



const HomePage = () => {

    return(<div>
        <div className="homepage-sec p-4 py-10 flex flex-col  gap-4 drop-shadow-2xl text-pr backdrop-blur-xl bg-[url('https://plus.unsplash.com/premium_photo-1661295707785-05104cd0e148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&w=1000&q=80')] bg-cover">
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
    </div>)
}


export default HomePage
