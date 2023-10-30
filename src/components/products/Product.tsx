import { typeProduct } from "../../types/types"
import {BsFillStarFill, BsCartCheckFill} from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { useAddToCart, useCart} from "../../hooks/cart/useCart"
import { useShowCart } from "../../hooks/cart/useCartStatus"


const Product = ({title, id,price, image,category, rating,description} : typeProduct) => {
    
    const showCart = useShowCart()
    
    const addToCart = useAddToCart();
    const cart = useCart();
    const isInCart = cart.some((prod) => prod.id == id)
    return(
    <li className="grid grid-cols-1  gap-4 rounded overflow-hidden" key={"product-div-display" + id}>
        <NavLink key={"1navlink-" + id}  to={`/products/${id}`}>                
            <div key={"img-div-" + id} className="w-[100%] h-[10rem]">
                <img  className="max-w-[100%] max-h-[100%] mx-auto" src={image} key={`img-${title}`} alt={title} />
            </div>
        </NavLink>
        <div  key={"info-" + id} className="flex flex-col justify-center text-center gap-4">
            <NavLink key={"2navlink-" + id} to={`/products/category/${category}`}>
                <h4 className="uppercase opacity-60">{category}</h4>
            </NavLink>           
            <NavLink key={"3navlink-" + id} to={`/products/${id}`}>
                <h2 key={"header-" + id} className="font-bold line-clamp-1">{title}</h2>
            </NavLink>
            <span className="flex items-center  justify-center font-bold gap-1"><BsFillStarFill style={{fill: "gold"}}/> {rating.rate} / 5</span>
            <h3 className="text-medium text-red-500">${price}</h3>
            {isInCart ? 
            <button onClick={showCart}  className="whitespace-nowrap bg-accent border-primary-500 border-[1px] text-primary-500 px-5 flex items-center gap-1 py-3 mx-auto rounded-full  w-[min-content]"><BsCartCheckFill />In cart</button>
            :
            <button onClick={() => addToCart({title, id, price, image,category, rating,description}, 1)} className="whitespace-nowrap text-accent bg-primary-500 px-5 py-3 mx-auto rounded-full  w-[min-content]">Add to Cart</button>
            }
        </div>
    </li>)
}

export default Product