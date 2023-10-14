import { typeProduct } from "../types/types"
import MultiRangeSlider from "./rangeSlider/MultiRangeSlider"




const FilterMenu = ({products}: {products: typeProduct[]}) => {

    const topPrice = products.sort((a: typeProduct, b: typeProduct) => {
        return b.price - a.price
    })[0].price
    const onChange = ({min, max}: {min: number, max: number}) => {
        console.log(min, max)
    }
    return(<div className="basis-[80%] border-r-[1px] pr-4">
        <h2 className="text-lg pb-4 border-b-[1px]">Filter</h2>
        <ul>
            <li className="py-4">
                <h3 className="opacity-70 uppercase text-sm">Filter by price</h3>
                <MultiRangeSlider min={0} max={topPrice} onChange={onChange}/>
                <input onChange={(e) => console.log(e.target.value)} type="range" min={0} step={1} max={topPrice} />
                
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>)
}


export default FilterMenu