
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {BsHandbag, BsSearch} from "react-icons/bs";
import { typeProduct } from "../../types/types";


const SearchBar = ({type} : {type:string}) => {


    //hidden w-[50%]  md:flex - desktop
    //flex  - mobile
    //both - bg-gray-100  rounded-lg gap-4 p-2  
    const [searchKey, setSearchKey] = useState("")
  
    const getSearchResults = async () => {
        const valid = new RegExp(searchKey.toLowerCase());
        const apiLink = `https://fakestoreapi.com/products`
        const data = await fetch(`${apiLink}`)
        const res: typeProduct[] = await data.json()       
        const filtered = res.filter((prod: typeProduct) => valid.test(prod.title.toLowerCase()))
        return filtered
    }
    const {data, isLoading, isError} = useQuery({queryKey: ["results", searchKey],queryFn: getSearchResults})

    return(<div className={`bg-gray-100  rounded-lg gap-4 p-2 ${type == "mobile" ? "flex" : "hidden w-[50%]  md:flex"}`}>
    <BsSearch style={{opacity: "0.3"}}  size={20}/>
    <input onClick={(e) => setSearchKey(e.target.value)} placeholder="Search" className={`bg-gray-100  ${type == "mobile" ? "w-[100%]" : ""}`} type="text" />
</div> )
}

export default SearchBar