import { typeFilters, typeProduct } from "../types/types"
import MultiRangeSlider from "../components/rangeSlider/MultiRangeSlider"
import {BsFillStarFill, BsStar} from "react-icons/bs"
import {useState} from "react"


const FilterMenu = ({products, filters, setFilters}: {products: typeProduct[], filters: typeFilters,setFilters: any}) => {
    const [priceFilter, setPriceFilter] = useState({min: 0,max: 0});

    const topPrice = products.sort((a: typeProduct, b: typeProduct) => {
        return b.price - a.price
    })[0].price
    const onChange = ({min, max}: {min: number, max: number}) => {
       setPriceFilter({min, max})
    }

    const defaultSettings = {
        price: {
            min:0,
            max: topPrice
        },
        rating: [],
        category: []
    }
    const ratings = [5,4,3,2,1]

    const categories = Array.from(new Set(products.map((prod) => {
        return prod.category
    })));

    const changePriceFilter = () => {
        setFilters({...filters, price: priceFilter})
    }

    const clearFilters = () => {
        setFilters(defaultSettings)
    }
    
    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked, name} = e.target;
        const rate = +name.split("-")[1]
        let tempArray = {...filters};
        if(checked) {
            tempArray.rating.push(rate)
        } else {
            tempArray.rating = tempArray.rating.filter((rating) => rating != rate)
        }
        setFilters(tempArray)
    }


    return(<div className="basis-[40%] border-r-[1px] md:inline pr-4 hidden">
        <h2 className="text-lg pb-4 border-b-[1px]">Filter</h2>
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
                    return  <label  htmlFor={`rating-${rate}`} className="flex gap-2 hover:cursor-pointer "><input checked={filters.rating.some((el) => el == rate)} onChange={handleRatingChange} id={`rating-${rate}`} name={`rating-${rate}`} key={`rating-${rate}`} type="checkbox" />
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