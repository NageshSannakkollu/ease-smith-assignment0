import ShippingInfo from "../ShippingInfo"
import Header from "../Header"
import Footer from "../Footer"
import "./index.css"



const Home = () => (
    <div>
        <ShippingInfo/>
        <div className="main-home-container">
        <Header/>
        <div>
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729403692/Easesmith-logo_vzbqdv.jpg" alt="ease smith" className="company-logo-image"/>
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729403790/Banner-7-1-1_kz5xrh.png" alt="company banner" className="banner-image"/>
        </div>
        <Footer/>
        </div>
    </div>
)

export default Home