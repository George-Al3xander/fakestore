import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {useState} from "react"
import { typeProduct, typeFilters } from '../../types/types';



const PriceFilter = ({products,  filters, setFilters}: {products: typeProduct[],  filters: typeFilters,setFilters: any}) => {
    const [priceFilter, setPriceFilter] = useState({min: filters.price.min,max: filters.price.max});
    const changePriceFilter = () => {
        setFilters({...filters, price: priceFilter})
    }
    const topPrice = products.sort((a: typeProduct, b: typeProduct) => {
        return b.price - a.price
    })[0].price;

    const onChange = (value: number | number[]) => {
        if(Array.isArray(value)) {
            const [min, max] = value
            setPriceFilter({min, max})
        }
    }

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target

        if(name == "max") {
            setPriceFilter({...priceFilter, max: +value})
        } else {
            setPriceFilter({...priceFilter, min: +value})

        }
    }

    
    



    return(<li className="py-4 flex flex-col gap-4">
    <h3 className="opacity-70 uppercase text-sm">Filter by price</h3>
    
    <div>
        <div className='flex justify-between items-center mb-2 text-sm'>
            <span className='bg-gray-300 p-1 rounded-lg flex'>$<input className='bg-gray-300 text-center' type="number" min={0} max={Math.floor(topPrice) + 1} name="min" value={priceFilter.min} onChange={handleNumberChange} defaultValue={priceFilter.min}/></span>
            <span className='bg-gray-300 p-1 rounded-lg flex'>$<input className='bg-gray-300 text-center' type="number" min={0} max={Math.floor(topPrice) + 1} name="max" value={priceFilter.max}  onChange={handleNumberChange} defaultValue={priceFilter.max}/></span>
        </div>
        <Slider style={{}} range defaultValue={[priceFilter.min, priceFilter.max]} value={[priceFilter.min, priceFilter.max]}  min={0} onChange={onChange} max={Math.floor(topPrice) + 1}/>
    </div>
    
    
    <button onClick={changePriceFilter} className="whitespace-nowrap text-sm text-accent bg-primary-500 px-5 py-2  rounded-full  w-[min-content]">Apply</button>

</li>)
}


export default PriceFilter