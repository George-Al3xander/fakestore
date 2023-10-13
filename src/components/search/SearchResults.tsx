import { typeProduct } from "../../types/types"
import {useNavigate } from "react-router-dom"



const SearchResults = ({results, isRefetching, focusStatus}: {results: typeProduct[], isRefetching: boolean, focusStatus: boolean}) => {

    const divStyles = "absolute z-[51]  bg-accent w-[100%] top-[100%] left-0 border-2 p-2 max-h-96 overflow-y-scroll"
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

    
    

    return(<ul className={divStyles}>
    {results.map((prod,index) => {
        return <li  className={`flex ${index != 0 ? "border-t-2" : "" } py-2 gap-4 hover:bg-gray-100 hover:cursor-pointer transition-all duration-200`} key={ "div-"+ prod.id} onMouseDown={() => navigate(`/products/${prod.id}`)}>
            <div className="max-w-[6rem] max-h-[6rem]"><img className="object-contain w-[100%] max-h-[100%]" key={"img-"+ prod.id} src={prod.image} alt={prod.title} /></div>
            <div><h2 className="line-clamp-1" key={"header-"+ prod.id}>{prod.title}</h2> 
                <span className="text-primary-500 font-medium">${prod.price}</span>
                </div>
        </li>
    })}
    </ul>)
}


export default SearchResults