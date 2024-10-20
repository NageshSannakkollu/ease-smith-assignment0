import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "./index.css"
// import PlantsContext from "../../context/PlantsContext";



const AllPlantsSection = props => {
    const {plantDetails} = props 
    const {plantImage,price,plantType,plantName,rating,dealPrice,id} = plantDetails

    return (
        <li className="plant-details-item-list" key={id}>
        <div className="plant-list-item">
        <div className="wish-image-container">
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729308762/Vector_6_njgypj.png" alt="wish" className="wished-image"/>
            </div>
            <img src={plantImage} alt={`Plant ${plantName}`} className="plant-detail-image" />
            <Link to={`/thank-you-page/${id}`}>
            <button type="button" className="view-product-button">View Product</button>
            </Link>
            </div>
            <div className="plant-name-type-price-buttons-container">
                <h3>{plantName}</h3>
                <p>{plantType}</p>
            <div className="ratings-container">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729308652/2d5f9291095d1210262f4a0d5f4c77e7_yjomrv.png" alt="rating" className="rating-image"/>
                <p>{rating}</p>
            </div>
            <div className="price-container">
                <p className="price-title">{`₹${price}`}</p>
                <h4 className="deal-price">{`₹${dealPrice}`}</h4>
            </div>
                <div className="add-to-cart-rent-buttons-container">
                <Popup
                    modal
                    trigger={<button type="button" className="add-to-cart-button">
                        <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309270/-_qieykj.png" alt="dash" className="" />
                            <p className="add-to-cart-title">Add to cart</p>
                                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309347/jk4b6qzsfcvzof5pm28k.png" alt="plus" className=""/>
                </button>}
            >
            {cancel => (
                <div className="order-placed-container">
                    <div className="cancel-button-container">
                        <button className="cancel-button" type="button" onClick={() => cancel()}>
                            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729355800/x_f8tqaa.png" alt="cancel" className="cancel-image"/>
                        </button>
                        </div>
                        <div className="order-wishing-plant-image-button-container">
                        <div className="order-inside-container">
                            <h3 className="your-cart-title">Your Cart</h3>
                            <hr className="your-cart-horizontal-line"/>
                        </div>
                        <div className="greeting-title-image-container">
                        <h2 className="wishing-order-title">Congratulations Order Placed!</h2>
                        <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729356443/14d6293522911d4a2548b9b1cf65a33a_wd1zsl.png" alt="plant" className="order-plant-image"/>
                        </div>
                        <div className="wish-continue-button-container">
                        <p className="thankyou-description">Thank you for choosing Chaperone services.<br/>We will soon get in touch with you!</p>
                        <Link to="/">
                            <button type="button" className="continue-shopping-button" onClick={() => cancel()}>CONTINUE SHOPPING</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            </Popup>
                
                <button type="button" className="buy-on-rent-button">Buy on Rent</button>
                </div>
            </div>
        </li>
    )
} 

export default AllPlantsSection