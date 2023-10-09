import { typeProduct } from "../../types/types"
import {BsFillStarFill} from "react-icons/bs"
import { NavLink } from "react-router-dom"


const Product = ({title, id,price, image,category, rating} : typeProduct) => {
    return(<li className="grid grid-cols-1  gap-4 rounded overflow-hidden" key={id}>
        <div>
            <img className="max-w-[10rem] max-h-[10rem] mx-auto" src={image} key={`img-${title}`} alt={title} />
        </div>
        <div className="flex flex-col justify-center text-center gap-4">
            <NavLink to={`/products/category/${category}`}>
                <h4 className="uppercase opacity-60">{category}</h4>
            </NavLink>
            <NavLink to={`/products/${id}`}>
                <h2 className="font-bold ">{title}</h2>
            </NavLink>
            <span className="flex items-center  justify-center font-bold gap-1"><BsFillStarFill style={{fill: "gold"}}/> {rating.rate} / 5</span>
            <h3 className="text-medium text-red-500">${price}</h3>
            <button className="whitespace-nowrap text-accent bg-primary-500 px-5 py-3 mx-auto rounded-full  w-[min-content]">Add to Cart</button>
        </div>
    </li>)
}

export default Product