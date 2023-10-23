import { useContext, useState } from "react"
import { CartContext } from "../../context/context"
import CountriesSelect from "./CountriesSelect"
import { typeFormData } from "../../types/types"
import {useEffect} from "react"


const OrderCheckout = () => {
    
    const [formData, setFormData] = useState<typeFormData | null>(null)
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        const title = name.split("-");
        //console.log(name)
        if(title.length == 1) {
            const input = title[0]
            setFormData({...formData!, [input]: value})            
        }
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return(<form className="basis-[60%] flex flex-col gap-6">
        <div className="flex justify-between items-center border-b-2 mb-10 pb-4">
                <h2 className="text-lg font-medium">Shipping</h2>                    
        </div>
        <fieldset className="flex gap-4 flex-col md:flex-row">
            <div className="flex flex-col gap-2 basis-[100%]">
                <label className="uppercase opacity-80" htmlFor="first-name">First name*</label>
                <input onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="first-name" name="name-first"/>
            </div>
            <div className="flex flex-col gap-2 basis-[100%]">
                <label className="uppercase opacity-80" htmlFor="last-name">Last name*</label>
                <input onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="last-name" name="name-last"/>
            </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
            <label className="uppercase opacity-80" htmlFor="countries">Country / Region*</label>
            <CountriesSelect handleChange={handleChange}/>
        </fieldset>
        <fieldset className="flex flex-col gap-4">
        <label className="uppercase opacity-80" htmlFor="street">Country / Region*</label>
            <div className="flex flex-col gap-2">
                <input onChange={handleChange} placeholder="House number and street" className="p-2 border-[1px] rounded" type="text" id="street" name="street"/>
                <input onChange={handleChange} placeholder="Apartment, suite, unit, etc.(optional)" className="p-2 border-[1px] rounded" type="text" id="street-additional" name="apartment"/>
            </div>

            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="city">Town / city*</label>
                    <input onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="city" name="city"/>
                </div>
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="postcode">Postcode / zip*</label>
                    <input onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="postcode" name="postcode"/>
                </div>            
            </div>

            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="phone">phone(optional)</label>
                    <input onChange={handleChange} className="p-2 border-[1px] rounded" type="tel" id="phone" name="phone"/>
                </div>            
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="email">email address*</label>
                    <input onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="email" name="email"/>
                </div>
            </div>
        </fieldset>

        <fieldset className="border-t-[2px] pt-2">
            <div className="flex flex-col gap-2">
                <label className="uppercase opacity-80" htmlFor="email">order notes(optional)</label>
                <textarea onChange={handleChange} placeholder="Notes about your order, e.g. special notes for delivery" className="p-2 border-[1px] rounded-xl" name="notes" id="notes" cols={30} rows={5}></textarea>
                
            </div>
        </fieldset>
    </form>)
}

export default OrderCheckout