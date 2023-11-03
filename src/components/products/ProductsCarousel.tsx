import { typeProduct } from "../../types/types"
import Product from "./Product"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const ProductsCarousel = ({products}: {products: typeProduct[]}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 768 },
          items: 3,
          swipable: false
        },        
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
          swipeable: true
        }
      };

    return( <Carousel
        renderButtonGroupOutside={true}   
        arrows={true}      
        sliderClass={"slider-products"}
         responsive={responsive}>
             {products.map((prod) => {
            return <Product {...prod}/>
        })}
        </Carousel>)
}


export default ProductsCarousel