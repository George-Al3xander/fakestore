
import {AiOutlineMenu} from "react-icons/ai";
import {BsHandbag, BsSearch} from "react-icons/bs";
import SearchBar from "./search/SearchBar";


const Header = ({showMenu} : {showMenu: any}) => {
   

    return(<header className="w-[100%] bg-accent z-30 sticky top-0 md:static">
        <div className="flex justify-between py-4 px-[3%]  border-b-2">
            <div className="flex items-center gap-4 ">
                <button onClick={showMenu} className="md:hidden"><AiOutlineMenu size={30}/></button>
                <h1 className="uppercase text-primary-500 text-lg font-bold">Fake store</h1>
            </div>

            <SearchBar type="desktop"/>            


            <button className="relative">
                <BsHandbag size={35}/>
                <h3 className="absolute top-[50%] text-accent font-bold right-[3%] text-xs bg-red-600 p-1 w-[23px] h-[23px] text-center  rounded-[50%]">0</h3>
            </button>
        </div>

        <div className="py-4 px-[3%] border-b-2 md:hidden">
            <SearchBar type="mobile"/>            
        </div>
    </header>)
}

export default Header