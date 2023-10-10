import { useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import Products from "./Products"

import Spinner from "../Spinner"

const ProductsPage = () => {
    const {id} = useParams()  
    //const [products, setProducts] = useState<typeProduct[]>([])
    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products/category/${id}`
        const data = await fetch(`${apiLink}`)
        const res = await data.json()       
        return res
    }
    const {data: products, isLoading, isError} = useQuery({queryKey: ["category",id],queryFn: getData})

    if (isLoading) {   
            return <div className="w-[100%] flex justify-center items-center h-[85vh]">
                     <Spinner height={"85h"}/>
                    </div>      
    }

    if(isError) {
        return "Error"
    }
    

    

    return(<div className="w-responsive mx-auto flex py-10" id={id} key={id}>
        <ul className="w-[30%] bg-red-200">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <Products products={products}/>

    </div>)
}

export default ProductsPage