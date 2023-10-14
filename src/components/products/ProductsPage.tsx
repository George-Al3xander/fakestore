import { useParams } from "react-router-dom"
import {useQuery} from "@tanstack/react-query"

import Spinner from "../Spinner"
import ProductsMainDisplay from "./ProductsMainDisplay"
import { typeProduct } from "../../types/types"
import FilterMenu from "../../filter/FilterMenu"
import FilterMenuMobile from "../../filter/FilterMenuMobile"

const ProductsPage = ({filterMenu, showFilterMenu, closeFilterMenu} : {filterMenu :boolean, showFilterMenu: any, closeFilterMenu: any}) => {
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
        return <div>Error</div>
    }
    
    
  
    

    return(<div className="w-responsive mx-auto flex gap-4 py-12" id={id} key={id}>           
        <FilterMenu products={products}/>
        <ProductsMainDisplay showFilterMenu={showFilterMenu}  products={products} />
        {filterMenu ? <FilterMenuMobile closeFilterMenu={closeFilterMenu} products={products}/>: null}
        
    </div>)
}

export default ProductsPage