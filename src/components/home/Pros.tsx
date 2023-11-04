import {MdSupportAgent} from "react-icons/md"
import {BsBookmarkCheck, BsTruck} from "react-icons/bs"
import {SlDiamond} from "react-icons/sl"
import {LiaMedalSolid} from "react-icons/lia"
import {PiHandshakeBold} from "react-icons/pi"
import { IconType } from "react-icons"

type blockType = {
    title: string;
    description: string;
    icon: IconType;
}

const Pros = () => {
    const pros : blockType[] = [
        {title: "CUSTOMER SERVICE",description: "Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you – the customer – the most important person in the transaction.", icon: MdSupportAgent},
        {title: "SECURITY",description: "When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order fake product out, we use only tamper-proof and discrete packaging so then what you’ve purchased is your business only.", icon: BsBookmarkCheck},
        {title: "best value",description: "We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality fake products.", icon: SlDiamond},
        {title: "delivery insurance",description: "If your mail order fake product becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120", icon: BsTruck},
        {title: "highest quality",description: "All of our fake products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality fake product to ensure that we have only the best available.", icon: LiaMedalSolid},
        {title: "trust",description: "With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews.", icon: PiHandshakeBold}
    ]
    return(<div className="w-responsive mx-auto py-[10rem]">
        <div className="flex flex-col gap-4 mb-[5rem] max-w-[90%]">
            <h2 className="text-4xl font-bold">WHAT MAKES US THE <span className="text-[gold]">#1</span> ONLINE FAKE STORE IN THE WORLD?</h2>
            <p className="text-sm opacity-60">When it comes to what makes us the foremost online fake products dispensary in the world, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the six prioritized features that we feel makes us a cut above the rest.</p>
        </div>

        <ul className="grid md:grid-cols-3 gap-10">
            {pros.map((pro) => {
            return <li className="p-4 border-[1px] rounded-xl">
                        <div className="flex flex-col gap-10 mb-4">
                            <pro.icon className="fill-primary-700" size={50}/>
                            <h3 className="uppercase font-bold text-lg">{pro.title}</h3>
                        </div>
                        <p className="text-sm opacity-60">{pro.description}</p>                
                    </li>
            })}            
        </ul>
    </div>)
}

export default Pros