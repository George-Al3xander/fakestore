import { useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import {BsFillStarFill} from "react-icons/bs"
import {useState} from "react"
import Spinner from "../Spinner"

import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import { typeProduct } from "../../types/types"
import SameCategoryProducts from "./SameCategoryProducts"

const SingleProductPage = () => {
    const {productId} = useParams()

    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products/${productId}`
        const data = await fetch(`${apiLink}`)
        const res = await data.json()       
        return res
    }

    

    const {data: product, isLoading, isError} = useQuery({queryKey: ["product",productId],queryFn: getData})
    const [count, setCount] = useState(1);
    if (isLoading) {        
        return <Spinner  height="85vh"/>
    }
    
    if(isError) {
        return "Error"
    }   
    const addCount = () => {
        setCount(c => c + 1)
    }
    const substractCount = () => {
        setCount(c => c - 1)
    }
    const {title,description, id,price, image,category, rating}: typeProduct = product

    return(<div key={id} className=" w-responsive mx-auto mt-10 py-4">
        <div className="flex flex-col md:flex-row  gap-10">
            <div className="max-w-[50%] md:w-[100%] mx-auto">
                <img className="" src={image} alt={title} />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="uppercase opacity-60">{category}</h3>
                <h1 className="font-bold text-2xl">{title}</h1>
                <div className="flex justify-between items-center mb-10">
                    <h3 className="font-bold text-red-500 text-lg">${price}</h3>
                    <span className="flex items-center  justify-center font-bold gap-1"><BsFillStarFill style={{fill: "gold"}}/> {rating.rate} / 5</span>
                </div>
                <div className="mb-4 border-t-2 py-4">
                    <h3 className="uppercase opacity-60">Description</h3>
                    <p>{description}</p>
                </div>
                <div className="flex justify-between items-center border-t-2 py-4">
                    <div className="flex items-center gap-2"><button className="disabled:opacity-30 disabled:cursor-not-allowed" disabled={count -2 < 0} onClick={substractCount}><AiOutlineMinus /></button> <span className="bg-gray-300 rounded text-lg w-[30px] h-[30px] text-center items-center">{count}</span> <button className="disabled:opacity-30 disabled:cursor-not-allowed" disabled={rating.count < count} onClick={addCount}><AiOutlinePlus /></button></div>
                    <button  className="whitespace-nowrap text-accent bg-primary-500 px-5 py-3  rounded-full  w-[min-content]">Add to Cart | ${count * price}</button>
                </div>
            </div>
        </div>
        <SameCategoryProducts product={product}/>
        

    </div>)
}

export default SingleProductPage