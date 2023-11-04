import { typeProduct } from "../../types/types"
import {useQuery} from "@tanstack/react-query"
import Spinner from "../Spinner"
import {useEffect, useState} from "react"
import Products from "../products/Products"
import { NavLink } from "react-router-dom"

const ChooseYourProducts = ({products}: {products:typeProduct[]}) => {
    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products/categories`
        const data = await fetch(`${apiLink}`)
        const res: string[] = await data.json()       
        return res
    }
    const [currentCatgory, setCurrentCategory] = useState("")

    const {data: categories, isLoading, isError} = useQuery({queryKey: ["categories","categoriesBody"],queryFn: getData})
    useEffect(() => {
        if(categories) {
            setCurrentCategory(categories[0])
        }
    },[categories])
    if (isLoading) {   
        return <div className="w-[100%] flex justify-center items-center">
                 <Spinner height={"5vh"}/>
            </div>      
    }

    if(isError) {
        return <div>Error</div>
    }
    
    return(<div className="w-responsive mx-auto my-[10rem] flex flex-col gap-4">
            <h1 className="text-3xl font-bold  uppercase">Choose your product </h1>
            <div className="flex flex-wrap gap-4 ">
                <h3 className="text-lg">Filter By Category</h3>
                <ul className="flex gap-2 overflow-x-auto  max-w-[100%]">
                    {categories.map((cat) => {
                        return <li key={"choose-category-" + cat} onClick={() => setCurrentCategory(cat)} className={`bg-white capitalize whitespace-nowrap text-sm p-2  transition-all duration-200 ${cat == currentCatgory ? "text-primary-700 border-[1px] border-primary-700 rounded-2xl" : ""}`}><button className="capitalize" >{cat}</button></li>
                    })}
                    <li onClick={() => setCurrentCategory("shop")} className={`capitalize whitespace-nowrap text-sm p-2  transition-all duration-200 ${currentCatgory == "shop" ? "text-primary-700 border-[1px]  border-primary-700 rounded-2xl" : ""}`}><button className="capitalize" >Shop all products</button></li> 
                </ul>                
            </div>
           <Products products={products.filter((prod) => currentCatgory == 'shop' ? true :  prod.category == currentCatgory).slice(0, 3)}/>                
            <NavLink className="text-primary-700 underline mx-auto mt-10" to={currentCatgory == "shop" ? "/shop" : `/products/category/${currentCatgory}`}>View all {currentCatgory == "shop" ? "products": currentCatgory}</NavLink>
        </div>)
}

export default ChooseYourProducts