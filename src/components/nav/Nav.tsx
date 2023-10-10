import {NavLink} from "react-router-dom"
import useFetch from "../../hooks/useFetch"



const Nav = () => {

    const categories: string[] = useFetch('https://fakestoreapi.com/products/categories')!
    
    return(<div 
    className='py-4 px-[3%] border-b-2 sticky z-50 top-0 bg-gray-900 text-accent hidden md:block'>
        <nav className="flex gap-4 header-nav">
            <NavLink className={"hover-underline-animation capitalize opacity-70 hover:opacity-100"} to={"/"}>Home</NavLink>
            <NavLink className={"hover-underline-animation capitalize opacity-70 hover:opacity-100"} to={"/shop"}>Shop all</NavLink>
            {Array.isArray(categories) &&  categories.length > 0 ? categories.map((cat) => {
                return <NavLink className={"hover-underline-animation capitalize opacity-70 hover:opacity-100"} to={`/products/category/${cat}`}>{cat}</NavLink>
            }): null}
        </nav>
    </div>)
}

export default Nav