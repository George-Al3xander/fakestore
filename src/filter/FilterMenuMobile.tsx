import { typeProduct, typeFilters } from "../types/types"
import MultiRangeSlider from "../components/rangeSlider/MultiRangeSlider"
import {BsFillStarFill, BsStar} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
import {useRef, useState} from "react"



const FilterMenuMobile = ({products, closeFilterMenu, filters, setFilters}: {products: typeProduct[], closeFilterMenu: any, filters: typeFilters,setFilters: any}) => {
    const topPrice = products.sort((a: typeProduct, b: typeProduct) => {
        return b.price - a.price
    })[0].price

    const defaultSettings = {
        price: {
            min:0,
            max: topPrice
        },
        rating: [],
        category: []
    }


    const [priceFilter, setPriceFilter] = useState({min: 0,max: 0});
    const onChange = ({min, max}: {min: number, max: number}) => {
       setPriceFilter({min,max})
    }
    const ratings = [5,4,3,2,1]

    const categories = Array.from(new Set(products.map((prod) => {
        return prod.category
    })));
    const menuRef = useRef<HTMLDivElement>(null)

    const hideMenu = () => {
        menuRef.current?.classList.add("slide-out")
        setTimeout(() => {
            closeFilterMenu();
        },300)
        
    }

    const changePriceFilter = () => {
        setFilters({...filters, price: priceFilter})
    }

    const clearFilters = () => {
        setFilters(defaultSettings)
    }


    return(<div className='bg-ts fixed w-[100%] top-0 left-0 md:hidden h-[100vh] z-50'>
        <div ref={menuRef} className="slide w-[60%] h-[100%] border-r-[1px] p-4 bg-accent ">
            <div className="pb-4 border-b-[1px] flex justify-between items-center">
                <h2 className="text-lg">Filter</h2>
                <button><AiOutlineClose onClick={hideMenu} size={25}/></button>
            </div>
            <ul className="flex flex-col gap-4">
                <li className="py-4">
                    <h3 className="opacity-70 uppercase mb-4 text-sm">Product by category</h3>
        
                    {categories.map((cat) => {
                        return <label  className="flex gap-2 hover:cursor-pointer " htmlFor={"radio-"+ cat}><input name="category" key={"radio-"+ cat} id={"radio-"+ cat} type="radio"/> <h3 className="capitalize">{cat}</h3></label>
                    })}
                </li>
                <li className="py-4">
                    <h3 className="opacity-70 uppercase text-sm">Filter by price</h3>
                    <MultiRangeSlider min={0} max={topPrice} onChange={onChange}/>
                    <button onClick={changePriceFilter} className="whitespace-nowrap mt-8 text-sm text-accent bg-primary-500 px-5 py-2 mx-auto rounded-full  w-[min-content]">Apply</button>
        
                </li>
                <li className="py-4">
                    <h3 className="opacity-70 uppercase text-sm mb-4">Filter by reviews</h3>
                    <ul className="flex flex-col gap-4">
                       {ratings.map((rate) => {
                        return  <label  htmlFor={`rating-${rate}`} className="flex gap-2 hover:cursor-pointer "><input onChange={() =>console.log(11)} id={`rating-${rate}`} name={`rating-${rate}`} key={`rating-${rate}`} type="checkbox" />
                            {ratings.map((rate2) => {
                                if(ratings.indexOf(rate2) < rate) {
                                    return <BsFillStarFill size={20} style={{fill: "gold", }}/>
                                } else {
                                    return <BsStar style={{opacity: "0.5"}} size={20} />
                                }
                            })}
                        </label>
                       })}
        
                    </ul>
        
                </li>
                <li className="border-t-[1px]">
                    <button onClick={clearFilters} className="whitespace-nowrap mt-4  text-primary-500 bg-gray-100 hover:text-gray-100 transition-all duration-500 hover:bg-primary-500 px-5 py-2 mx-auto rounded-full  w-[min-content]">Clear filters</button>
                </li>
            </ul>
        </div>
    </div>)
}


export default FilterMenuMobile