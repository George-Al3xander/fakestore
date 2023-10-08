
import {AiOutlineMenu} from "react-icons/ai";
import {BsHandbag, BsSearch} from "react-icons/bs";


const Header = () => {
   

    return(<header className="w-[100%]">
        <div className="flex justify-between py-4 px-[3%]  border-b-2">
            <div className="flex items-center gap-4 ">
                <button className="md:hidden"><AiOutlineMenu size={30}/></button>
                <h1 className="uppercase text-primary-500 text-lg font-bold">Fake store</h1>
            </div>

            <div className="bg-gray-100 hidden w-[50%] p-2 gap-4 rounded-lg md:flex">
                <BsSearch style={{opacity: "0.3"}}  size={20}/>
                <input placeholder="Search" className="bg-gray-100" type="text" />
            </div>

            <button className="relative">
                <BsHandbag size={35}/>
                <h3 className="absolute top-[50%] text-accent font-bold right-[3%] text-xs bg-red-600 p-1 w-[23px] h-[23px] text-center  rounded-[50%]">0</h3>
            </button>
        </div>

        <div className="py-4 px-[3%] border-b-2 md:hidden">
            <div className="bg-gray-100 flex p-2 gap-4 rounded-lg">
                <BsSearch style={{opacity: "0.3"}}  size={20}/>
                <input placeholder="Search" className="bg-gray-100 w-[100%]" type="text" />
            </div>            
        </div>
    </header>)
}

export default Header