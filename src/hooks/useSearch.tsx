
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { typeProduct } from "../types/types";




const useSearch = (searchKey: string) => {
    const blankValid = new RegExp(/\S/);
    const valid = new RegExp(searchKey.toLowerCase());
    const [results, setResults] = useState<typeProduct[]>([])

    const fetchSearchResults = async () => {
        const apiLink = `https://fakestoreapi.com/products`
        const data = await fetch(`${apiLink}`)
        const res: typeProduct[] = await data.json()              
        return res
    }
    
    const {data, refetch, isRefetching} = useQuery({
        queryKey: ["results", searchKey],
        queryFn: fetchSearchResults,
        refetchOnWindowFocus: false,
        enabled: false        
    })
    
    

    useEffect(() => {        
        if(blankValid.test(searchKey) && searchKey.length > 2) {
            refetch();            
        }  
    }, [searchKey]) 

    

    useEffect(() => {
        if(data != undefined) {
            const filtered = data!.filter((prod: typeProduct) => valid.test(prod.title.toLowerCase()) ||  valid.test(prod.description.toLowerCase()))
                     
            setResults(filtered)        
        }
    }, [data, isRefetching]); 
  

    return {results, isRefetching}
}

export default useSearch