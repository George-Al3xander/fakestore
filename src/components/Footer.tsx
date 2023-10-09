import {NavLink} from "react-router-dom"
import useFetch from "../hooks/useFetch"


const Footer = () => {
    const categories: string[] = useFetch('https://fakestoreapi.com/products/categories')!
    //grid grid-cols-1  md:grid-cols-3 

    return(<footer className="text-accent py-10">
        <div className="w-responsive m-auto flex flex-col md:flex-row gap-10">
            <div className="basis-[50%]">
                <h1 className="uppercase  text-lg font-bold mb-4">Fake store</h1>
                <p className="opacity-70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos soluta aliquam quo eum autem dolorem tempora consequuntur officia modi alias odit nam repellendus totam, numquam nulla tenetur esse! Vel earum excepturi eum vitae molestias facere quia molestiae qui obcaecati enim incidunt nam provident totam aut eos numquam, assumenda fuga!</p>
            </div>
            <div className="basis-[40%]">
                <h1 className="uppercase  text-lg font-bold mb-4">Quick link</h1>
                <nav className="flex flex-col gap-2">
                    <NavLink className={"capitalize opacity-70 hover:opacity-100 hover:text-primary-500 transition-all duration-300"} to={"/"}>Home</NavLink>
                    <NavLink className={"capitalize opacity-70 hover:opacity-100 hover:text-primary-500 transition-all duration-300"} to={"/shop"}>Shop all</NavLink>
                    {Array.isArray(categories) &&  categories.length > 0 ? categories.map((cat) => {
                        return <NavLink className={"capitalize opacity-70 hover:opacity-100 hover:text-primary-500 transition-all duration-300"} to={`${cat}`}>{cat}</NavLink>
                    }): null}
                </nav>
            </div>
            <div className="basis-[20%]">
                <h1 className="uppercase  text-lg font-bold mb-4">Contact us</h1>
                    <a className={"opacity-70 hover:opacity-100 hover:text-primary-500 transition-all duration-300"} href="mailto:fakestore@mail.com">fakestore@mail.com</a>
            </div>

        </div>
    </footer>)
}


export default Footer