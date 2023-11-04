
import {TbShoppingCartUp} from "react-icons/tb"
import ProductsCarousel from "../products/ProductsCarousel"
import { NavLink } from "react-router-dom"
import { typeProduct } from "../../types/types"


const BestSellers = ({products}: {products:typeProduct[]}) => {
    

   

    return(<div className="w-responsive mx-auto flex flex-col md:flex-row justify-center gap-4 my-10 mb-[10rem]">
        <div className="bg-primary-700 text-white p-[3%] grid grid-cols-1  gap-4 rounded-xl text-center md:min-w-[10rem] md:max-w-[25%]">
                <TbShoppingCartUp className="mx-auto" size={100}/>
                <h3 className="text-lg">Shop our Best Sellers</h3>
                <p className="opacity-60 text-sm">Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat. </p>
                <NavLink className="text-primary-500 underline text-sm" to={"/shop"}>View All</NavLink>
        </div>

        <div className="basis-[60%]  overflow-hidden" >
            <ProductsCarousel products={products.sort((a,b) => b.rating.rate - a.rating.rate)}/>
        </div>
    </div>)
}

export default BestSellers