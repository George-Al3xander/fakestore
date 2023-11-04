import { typeFilters, typeProduct } from "../../types/types"
import {BsFillStarFill, BsStar} from "react-icons/bs"
import 'rc-slider/assets/index.css';
import PriceFilter from "./PriceFilter";
import {useRef} from "react"
import {AiOutlineClose} from "react-icons/ai"
const FilterMenu = ({products, filters, setFilters, mobile, closeFilterMenu}: {products: typeProduct[], filters: typeFilters,setFilters: any, mobile?: boolean, closeFilterMenu?: any}) => {
    
   

    const defaultSettings = {
        price: {
            min:0,
            max: 0
        },
        rating: [],
        category: []
    }
    const ratings = [5,4,3,2,1]

    const categories = Array.from(new Set(products.map((prod) => {
        return prod.category
    })));

    
    const clearFilters = () => {
        setFilters(defaultSettings)
    }
    
    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked, name} = e.target;
        let tempArray = {...filters};
        const value = name.split("-")[1]
        if(name.split("-")[0] == "category") {
            if(checked) {
                tempArray.category.push(value)
            } else {
                tempArray.category = tempArray.category.filter((cat) => cat != value)
            }
        } else {
            if(checked) {
                tempArray.rating.push(+value)
            } else {
                tempArray.rating = tempArray.rating.filter((rating) => rating != +value)
            }
        }
        setFilters(tempArray)
    }

    

    const menuRef = useRef<HTMLDivElement>(null)
    const hideMenu = () => {
        menuRef.current?.classList.add("slide-out")
        setTimeout(() => {
            closeFilterMenu();
        },300)        
    }

    


    if(mobile) {
        return(<div onClick={hideMenu} className='bg-ts fixed w-[100%] top-0 left-0 md:hidden h-[100vh] z-50'>
            <div onClick={(e) => e.stopPropagation()} ref={menuRef} className="slide w-[80%] h-[100%] border-r-[1px] p-4 bg-accent ">
                <div className="pb-4 border-b-[1px] flex justify-between items-center">
                    <h2 className="text-lg">Filter</h2>
                    <button><AiOutlineClose onClick={hideMenu} size={25}/></button>
                </div>
                <ul className="flex flex-col gap-4">
                    <li className="py-4">
                        <h3 className="opacity-70 uppercase mb-4 text-sm">Product by category</h3>
                        {categories.map((cat) => {
                            return <label  className="flex gap-2 hover:cursor-pointer " htmlFor={"check-"+ cat}><input checked={filters.category.some((el) => el == cat)} onChange={handleCheckbox} name={"category-"+ cat} key={"radio-"+ cat}  id={"check-"+ cat} type="checkbox"/> <h3 className="capitalize">{cat}</h3></label>
                        })}
                    </li>
                    <PriceFilter filters={filters} setFilters={setFilters} products={products}/>
                    <li className="py-4">
                        <h3 className="opacity-70 uppercase text-sm mb-4">Filter by reviews</h3>
                        <ul className="flex flex-col gap-4">
                        {ratings.map((rate) => {
                            return  <label  htmlFor={`rating-${rate}`} className="flex gap-2 hover:cursor-pointer "><input checked={filters.rating.some((el) => el == rate)} onChange={handleCheckbox} id={`rating-${rate}`} name={`rating-${rate}`} key={`rating-${rate}`} type="checkbox" />
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
                        <button onClick={clearFilters} className="whitespace-nowrap my-2 text-primary-500 bg-gray-100 hover:text-gray-100 transition-all duration-500 hover:bg-primary-500 px-5 py-2 mx-auto rounded-full  w-[min-content]">Clear filters</button>
                    </li>
                </ul>
            </div>
        </div>)
    }
    

    return(<div className="min-w-[20%] border-r-[1px] md:inline pr-4 hidden">
        <h2 className="text-lg pb-4 border-b-[1px]">Filter</h2>
        <ul className="flex flex-col gap-4">
            <li className="py-4">
                <h3 className="opacity-70 uppercase mb-4 text-sm">Product by category</h3>
                {categories.map((cat) => {
                    return <label  className="flex gap-2 hover:cursor-pointer " htmlFor={"radio-"+ cat}><input checked={filters.category.some((el) => el == cat)} onChange={handleCheckbox} name={"category-"+ cat} key={"radio-"+ cat}  id={"radio-"+ cat} type="checkbox"/> <h3 className="capitalize">{cat}</h3></label>
                })}
            </li>
            <PriceFilter filters={filters} setFilters={setFilters} products={products}/>
            <li className="py-4">
                <h3 className="opacity-70 uppercase text-sm mb-4">Filter by reviews</h3>
                <ul className="flex flex-col gap-4">
                   {ratings.map((rate) => {
                    return  <label  htmlFor={`rating-${rate}`} className="flex gap-2 hover:cursor-pointer "><input checked={filters.rating.some((el) => el == rate)} onChange={handleCheckbox} id={`rating-${rate}`} name={`rating-${rate}`} key={`rating-${rate}`} type="checkbox" />
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
                <button onClick={clearFilters} className="whitespace-nowrap mt-8  text-primary-500 bg-gray-100 hover:text-gray-100 transition-all duration-500 hover:bg-primary-500 px-5 py-2 mx-auto rounded-full  w-[min-content]">Clear filters</button>

            </li>

        </ul>
    </div>)
}


export default FilterMenu