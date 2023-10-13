
import { typeProduct } from "../../types/types"
import {useQuery} from "@tanstack/react-query"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Spinner from "../Spinner"
import Product from "./Product"


const SameCategoryProducts = ({product} : {product: typeProduct}) => {
    const {id, category}: typeProduct = product
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 768 },
          items: 3,
          swipable: false
        },        
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
          swipeable: true
        }
      };
    const getSameCategory = async () => {
        const apiLink = `https://fakestoreapi.com/products/category/${category}`
        const data = await fetch(`${apiLink}`)
        const res: typeProduct[] = await data.json()       
        const filtered = res.filter((prod: typeProduct) => prod.id != +id)
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
        <Carousel
        renderButtonGroupOutside={true}   
        arrows={true}      
        sliderClass={"slider-products"}
         responsive={responsive}>
             {data.map((prod) => {
            return <Product {...prod}/>
        })}
        </Carousel>
        
    </div>)
}

export default SameCategoryProducts