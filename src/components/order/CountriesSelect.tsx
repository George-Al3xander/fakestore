
import {useQuery} from "@tanstack/react-query"
import { typeCountry } from "../../types/types"



const CountriesSelect = ({handleChange}: {handleChange: any}) => {
    const getData = async () => {
        const apiLink = `https://restcountries.com/v3.1/all`
        const data = await fetch(`${apiLink}`)
        const res: typeCountry[] = await data.json()       
        return res
    }


    const {data, isLoading, isError} = useQuery({queryKey: ["products"], queryFn: getData})

    if(isLoading) {
        return <h3>Loading...</h3>
    }

    if(isError) {
        return <h3>Error</h3>
    }

    return(<select onChange={handleChange} id="countries" name="countries" className="p-2 w-[100%]">
            {data.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country) => {
                return <option className="max-w-[80vw]">{country.name.common}</option>
            }) }
    </select>)
}


export default CountriesSelect