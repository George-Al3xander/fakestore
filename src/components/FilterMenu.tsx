import { typeProduct } from "../types/types"
import MultiRangeSlider from "./rangeSlider/MultiRangeSlider"
import {BsFillStarFill, BsStar} from "react-icons/bs"



const FilterMenu = ({products}: {products: typeProduct[]}) => {

    const topPrice = products.sort((a: typeProduct, b: typeProduct) => {
        return b.price - a.price
    })[0].price
    const onChange = ({min, max}: {min: number, max: number}) => {
        console.log(min, max)
    }
    const ratings = [5,4,3,2,1]
    return(<div className="basis-[80%] border-r-[1px] pr-4">
        <h2 className="text-lg pb-4 border-b-[1px]">Filter</h2>
        <ul>
            <li className="py-4">
                <h3 className="opacity-70 uppercase text-sm">Filter by price</h3>
                <MultiRangeSlider min={0} max={topPrice} onChange={onChange}/>               
                <button className="whitespace-nowrap mt-8 text-sm text-accent bg-primary-500 px-5 py-2 mx-auto rounded-full  w-[min-content]">Apply</button>
                
            </li>
            <li className="py-4">
                <h3 className="opacity-70 uppercase text-sm mb-4">Filter by reviews</h3>
                <ul className="flex flex-col gap-4">
                   {ratings.map((rate) => {
                    return  <li className="flex gap-2"><input type="radio" />
                        {ratings.map((rate2) => {
                            if(rate2 < rate) {
                                return <BsFillStarFill size={20} style={{fill: "gold", }}/>
                            } else {
                                return <BsStar size={20} />
                            }
                        })}
                    </li>
                   })}
                    
                </ul>
                
            </li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>)
}


export default FilterMenu