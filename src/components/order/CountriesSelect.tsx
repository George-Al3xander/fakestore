
import {useQuery} from "@tanstack/react-query"
import { typeCountry } from "../../types/types"
import { useOrder } from "../../hooks/useOreder"



const CountriesSelect = ({handleChange}: {handleChange: any}) => {
    const getData = async () => {
        const apiLink = `https://restcountries.com/v3.1/all`
        const data = await fetch(`${apiLink}`)
        const res: typeCountry[] = await data.json()       
        return res
    }
    const {order} = useOrder()


    const {data, isLoading, isError} = useQuery({queryKey: ["products"], queryFn: getData})

    if(isLoading) {
        return <h3>Loading...</h3>
    }

    if(isError) {
        return <h3>Error</h3>
    }
    

    return(<select onChange={handleChange} id="countries" name="country" className={`p-2 w-[100%] ${order.country.length > 0 ? "" : " border-2 border-red-600"}`}>
        <option  selected={order.country.length == 0} disabled>Select country or region</option>
            {data.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country) => {
                return <option selected={country.name.common == order.country} className="max-w-[80vw]">{country.name.common}</option>
            }) }
    </select>)
}


export default CountriesSelect