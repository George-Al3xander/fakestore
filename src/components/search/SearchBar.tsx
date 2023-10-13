import { useState } from "react";
import { BsSearch} from "react-icons/bs";

import useSearch from "../../hooks/useSearch";
import SearchResults from "./SearchResults";


const SearchBar = ({type} : {type:string}) => {

    
    const [searchKey, setSearchKey] = useState("")
    const searchResults = useSearch(searchKey);
    const [focusStatus, setFocusStatus] = useState(false)

    return(<div className={`bg-gray-100 relative rounded-lg gap-4 p-2 ${type == "mobile" ? "flex" : "hidden w-[50%]  md:flex"}`}>
    <BsSearch style={{opacity: "0.3"}}  size={20}/>
    <input onFocus={() => setFocusStatus(true)} onBlur={() => setFocusStatus(false)} onChange={(e) => setSearchKey(e.target.value)} placeholder="Search" className={`bg-gray-100  ${type == "mobile" ? "w-[100%]" : ""}`} type="text" />
    <SearchResults {...searchResults} focusStatus={focusStatus}/>

</div> )
}

export default SearchBar