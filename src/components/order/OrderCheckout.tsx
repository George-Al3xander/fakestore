import CountriesSelect from "./CountriesSelect"
import useFormValidate from "../../hooks/useFormValidate"
import { useOrder } from "../../hooks/useOreder"


const OrderCheckout = () => {
    
    const {order,setOrder} = useOrder()
    const {nameValid, streetValid, cityValid, postcodeValid, emailValid, phoneValid, apartmentValid} = useFormValidate(order);
    
    const {name,  notes,apartment,phone, street,city,postcode,email} = order

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name,value} = e.target;
        const title = name.split("-");          
            if(title.length == 1) {
                const input = title[0]
                if((input == "phone" || input == "apartment") && value.length == 0) {
                    let tempArray = order
                    delete tempArray[input]                    
                    setOrder(tempArray)
                    
                } else {
                    setOrder({...order!, [input]: value}) 
                }
            } else {
                const nameType = title[1]            
                setOrder({...order, name: {...order.name, [nameType]: value}})               
            }
      
    }
       

    return(<form className="basis-[60%] flex flex-col gap-6">
        <div className="flex justify-between items-center border-b-2 mb-10 pb-4">
                <h2 className="text-lg font-medium">Shipping</h2>                    
        </div>
        <fieldset >
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="first-name">First name*</label>
                    <input defaultValue={name.first} onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="first-name" name="name-first"/>
                </div>
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="last-name">Last name*</label>
                    <input defaultValue={name.last} onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="last-name" name="name-last"/>
                </div>
            </div>
           <span className={`text-red-600 italic transition-all duration-200 ${nameValid ? "opacity-0" : "opacity-100"}`}>Enter a valid name</span>
        </fieldset>
        <fieldset className="flex flex-col gap-2">
            <label className="uppercase opacity-80" htmlFor="countries">Country / Region*</label>
            <CountriesSelect handleChange={handleChange}/>
        </fieldset>
        <fieldset className="flex flex-col gap-4">
        <label className="uppercase opacity-80" htmlFor="street">Country / Region*</label>
            <div className="flex flex-col gap-2">
                <input defaultValue={street} required onChange={handleChange} placeholder="House number and street" className="p-2 border-[1px] rounded" type="text" id="street" name="street"/>
                <span className={`text-red-600 italic transition-all duration-200 ${streetValid ? "opacity-0" : "opacity-100"}`}>Enter a valid street name and number</span>                
                <input defaultValue={apartment ? apartment : ""} onChange={handleChange} placeholder="Apartment, suite, unit, etc.(optional)" className="p-2 border-[1px] rounded" type="text" id="street-additional" name="apartment"/>
           <span className={`text-red-600 italic transition-all duration-200 ${apartmentValid ? "opacity-0" : "opacity-100"}`}>Enter a valid name</span>
            
            </div>

            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="city">Town / city*</label>
                    <input defaultValue={city} required onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="city" name="city"/>
                    <span className={`text-red-600 italic transition-all duration-200 ${cityValid ? "opacity-0" : "opacity-100"}`}>Enter a valid city name</span>
                
                </div>
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="postcode">Postcode / zip*</label>
                    <input defaultValue={postcode} onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="postcode" name="postcode"/>
                    <span className={`text-red-600 italic transition-all duration-200 ${postcodeValid ? "opacity-0" : "opacity-100"}`}>Enter a valid postcode</span>                
                </div>            
            </div>

            <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="phone">phone(optional)</label>
                    <input defaultValue={phone ? phone : ""} onChange={handleChange} className="p-2 border-[1px] rounded" type="tel" id="phone" name="phone"/>
                    <span className={`text-red-600 italic transition-all duration-200 ${phoneValid ? "opacity-0" : "opacity-100"}`}>Enter a valid phone</span>
                </div>            
                <div className="flex flex-col gap-2 basis-[100%]">
                    <label className="uppercase opacity-80" htmlFor="email">email address*</label>
                    <input defaultValue={email} required onChange={handleChange} className="p-2 border-[1px] rounded" type="text" id="email" name="email"/>
                    <span className={`text-red-600 italic transition-all duration-200 ${emailValid ? "opacity-0" : "opacity-100"}`}>Enter a valid email</span>                
                </div>
            </div>
        </fieldset>

        <fieldset className="border-t-[2px] pt-2">
            <div className="flex flex-col gap-2">
                <label className="uppercase opacity-80" htmlFor="email">order notes(optional)</label>
                <textarea defaultValue={notes ? notes :  ""} onChange={handleChange} placeholder="Notes about your order, e.g. special notes for delivery" className="p-2 border-[1px] rounded-xl" name="notes" id="notes" cols={30} rows={5}></textarea>
                
            </div>
        </fieldset>       
    </form>)
}

export default OrderCheckout