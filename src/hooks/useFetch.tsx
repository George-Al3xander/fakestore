import {useState, useEffect} from "react"
import { typeProduct } from "../types/types";



const useFetch = (apiLink: string) => {


    const [data, setData] = useState<any>();

    const getData = () => {
        fetch(`${apiLink}`)
        .then(res=>res.json())
        .then(json=>setData(json))
    }

    useEffect(() => {
      getData();
    }, [])
    


    return data
}


export default useFetch