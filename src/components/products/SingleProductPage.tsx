import { useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"

import Spinner from "../Spinner"



const SingleProductPage = () => {
    const {id} = useParams()

    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products/${id}`
        const data = await fetch(`${apiLink}`)
        const res = await data.json()       
        return res
    }
    const {data: product, isLoading, isError} = useQuery({queryKey: ["product",id],queryFn: getData})

    if (isLoading) {        
        return <Spinner />
    }

    if(isError) {
        return "Error"
    }   
    return(<div>
        <h1>Hello</h1>
        {product.title}

    </div>)
}

export default SingleProductPage