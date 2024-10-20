import { Link } from "react-router-dom"
import "./index.css"

const Header = () => (
    <div className="navigation-container">
        <div className="logo-title-container">
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729316004/eefc66cd70960daab6449206c3540858_wzhlny.png" alt="logo" className="logo-image"/>
            <h4 className="company-title">Chaperone</h4>
            </div>
            <ul className="un-ordered-titles-container">
                <Link to="/"><li>Home</li></Link>
                <Link to="/plants-and-pots" className="link-class"><li>Plants & Pots</li></Link>
                <li className="tools">Tools</li>
                <li className="tools">Our Services</li>
                <li className="tools">Blog</li>
                <li className="tools">Our story</li>
                <li className="tools">FAQs</li>
            </ul>
            <div className="profile-cart-container">
                <div className="profile-container">
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712485559/profile_eakmb7.png" alt="profile" className="profile-image"/>
                    <p className="my-profile-title">My Profile</p>
                </div>
                <div  className="cart-container">
                <div className="car-image-length-container">
                    <p className="cart-length">3</p>    
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729317267/shopping-cart-icon-isolated-on-white-background_zqasgs.jpg" alt="cart" className="cart-image"/>
                    </div>
                    <p>Cart</p>
                </div>
            </div>
        </div>
 
)

export default Header