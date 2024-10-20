import ShippingInfo from "../ShippingInfo"
import Footer from "../Footer"
import Header from "../Header"
import "./index.css"

const ThankYouPage = () => (
    <>
        <ShippingInfo/>
        <div className="main-home-container">
            <Header/>
        <div className="thank-you-page-main-container">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729401166/pngtree-thank-you-text-decorated-by-floral-ornaments-png-image_6136789_xji9yy.png" 
                alt="Thank You" className="thankyou-image"
                />
                <h1 className="choosed-plant-title">Thank you for interest in Monsterra</h1>
            </div>
         <Footer/>
         </div>
    </>
    )
   
export default ThankYouPage