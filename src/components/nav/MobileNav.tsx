import {NavLink} from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import {useQuery} from "@tanstack/react-query"
import {useRef} from "react"
import {AiOutlineClose} from "react-icons/ai"

const MobileNav = ({closeMenu} : {closeMenu: any}) => {

    const getData = async () => {
        const apiLink = `https://fakestoreapi.com/products/categories`
        const data = await fetch(`${apiLink}`)
        const res = await data.json()       
        return res
    }
    const {data: categories, isLoading, isError} = useQuery({queryKey: ["categories","categoriesNav"],queryFn: getData})

    const navRef = useRef<HTMLElement>(null)

    const hideMenu = () => {
        navRef.current?.classList.add("slide-out")
        setTimeout(() => {
            closeMenu();
        },300)
    }

    if(isLoading) {
        return<div 
            className='bg-ts fixed w-[100%] h-[100vh] z-50 '>
                <nav className="flex md:hidden flex-col bg-accent h-[100%] p-4 w-[80%] gap-4 header-nav">
                    <button><AiOutlineClose onClick={closeMenu} size={30}/></button>                    
                    Loading...
                </nav>
            </div>
    }

    if(isError) {
        return<div 
            className='bg-ts fixed w-[100%] h-[100vh] z-50 '>
                <nav className="flex md:hidden flex-col bg-accent h-[100%] p-4 w-[80%] gap-4 header-nav">
                    <button><AiOutlineClose onClick={closeMenu} size={30}/></button>                    
                    Couldn't fetch categories
                </nav>
            </div>
    }
    


    return(<div 
    className='bg-ts fixed w-[100%] md:hidden h-[100vh] z-50'>
        <nav ref={navRef}   className="slide  flex  mobile-nav flex-col bg-accent h-[100%] p-4 w-[80%] gap-4">
            <button><AiOutlineClose onClick={hideMenu} size={30}/></button>
            <NavLink onClick={closeMenu} className={" capitalize opacity-70 hover:opacity-100"} to={"/"}>Home</NavLink>
            <NavLink  onClick={closeMenu}className={" capitalize opacity-70 hover:opacity-100"} to={"/shop"}>Shop all</NavLink>
            {Array.isArray(categories) &&  categories.length > 0 ? categories.map((cat) => {
                return <NavLink onClick={closeMenu} className={" capitalize opacity-70 hover:opacity-100"} to={`/products/category/${cat}`}>{cat}</NavLink>
            }): null}
        </nav>
    </div>)
}

export default MobileNav