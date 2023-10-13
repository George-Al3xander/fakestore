import { typeProduct } from "../../types/types"
import {useNavigate } from "react-router-dom"



const SearchResults = ({results, isRefetching, focusStatus}: {results: typeProduct[], isRefetching: boolean, focusStatus: boolean}) => {

    const divStyles = "absolute bg-accent w-[100%] top-[200%] h-96 overflow-y-scroll"
    const navigate = useNavigate()

    if(focusStatus == false) {
        return null
    }

    if(isRefetching) {
        return <div className={divStyles}>Searching...</div>
    }

    if(results.length == 0 ) {
        return <div className={divStyles}>No results</div>
    }

    
    

    return(<div className={divStyles}>
    {results.map((prod) => {
        return <button key={ "div-"+ prod.id} onMouseDown={() => navigate(`/products/${prod.id}`)}><h1 key={prod.id}>{prod.title}</h1><br /></button>
    })}
    </div>)
}


export default SearchResults