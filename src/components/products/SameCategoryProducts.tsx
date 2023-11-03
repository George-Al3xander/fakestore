import { typeProduct } from "../../types/types"
import {useQuery} from "@tanstack/react-query"
import 'react-multi-carousel/lib/styles.css';
import Spinner from "../Spinner"
import ProductsCarousel from "./ProductsCarousel";


const SameCategoryProducts = ({product} : {product: typeProduct}) => {
    const {id, category}: typeProduct = product
    
    const getSameCategory = async () => {
        const apiLink = `https://fakestoreapi.com/products/category/${category}`
        const data = await fetch(`${apiLink}`)
        const res: typeProduct[] = await data.json()       
        const filtered = res.filter((prod: typeProduct) => prod.id != id)
        return filtered
    }
    const {data, isLoading, isError } = useQuery({queryKey: ["category", category],queryFn: getSameCategory})

    
    if (isLoading) {        
        return <Spinner height="10rem"/>
    }
    
    if(isError) {
        return "Error"
    } 
    return(<div className="py-2 border-t-2 my-10">        
        <h4 className="capitalize font-medium mb-16">From the same category</h4>
        {/* <Products products={data}/> */}
        <ProductsCarousel products={data}/>
        
    </div>)
}

export default SameCategoryProducts