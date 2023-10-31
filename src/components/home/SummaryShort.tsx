import {FaShippingFast,FaStore} from "react-icons/fa"
import {AiFillDollarCircle} from "react-icons/ai"


const SummaryShort = () => {

    return(<ul className="bg-green-50 flex flex-col md:flex-row gap-10 p-4">
        <li className="flex gap-2">
            <span className="p-4 bg-white self-start rounded-[50%]">
                <FaShippingFast className="fill-primary-700 "  size={40}/>
            </span>
            <div>
                <h2 className="font-bold text-lg mb-2">Reliable Shipping</h2>
                <p className="opacity-60 text-sm">Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!</p>
            </div>
        </li>
        <li className="flex gap-2">
            <span className="p-4 bg-white self-start rounded-[50%]">
                <FaStore className="fill-primary-700 "  size={40}/>
            </span>
            <div>
                <h2 className="font-bold text-lg mb-2">You’re Safe With Us</h2>
                <p className="opacity-60 text-sm">Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.</p>
            </div>
        </li>
        <li className="flex gap-2">
            <span className="p-4 bg-white self-start rounded-[50%]">
                <AiFillDollarCircle className="fill-primary-700 " size={40}/>
            </span>
            <div>
                <h2 className="font-bold text-lg mb-2">Best Quality & Pricing</h2>
                <p className="opacity-60 text-sm">Here at Fake Store, we take pride in the quality of our products and service. Our prices are set to ensure you receive your products at a reasonable price and safely</p>
            </div>
        </li>
    </ul>)
}

export default SummaryShort