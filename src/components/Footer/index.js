import "./index.css"
const Footer = () => (
    <div className="footer-container">
    <div className="footer-inside-container">
    <div className="medium-footer1-container">
        <div className="footer-inside-container1">
            <h3 className="footer-titles">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="description-color">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
            <input type="email" placeholder="Enter Your Email Address" className="email-input"/><br/>
            <button type="button" className="subscribe-button">Subscribe</button>
        </div>
        <div className="about-us-container">
             <h3 className="footer-titles">ABOUT US</h3>
             <ul className="about-us-unordered-list description-color">
                <li>Our Story</li>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Help & Support</li>
             </ul>
        </div>
        <div className="our-services-container">
             <h3 className="footer-titles">OUR SERVICES</h3>
             <ul className="about-us-unordered-list description-color">
                <li>Book Mall</li>
                <li>Plant Day Care</li>
                <li>Rent Plants</li>
                <li>Plants & Pots</li>
                <li>Gardening Tools</li>
             </ul>
        </div>
         </div>
         <div className="medium-footer2-container">
         <div className="user-links-container">
             <h3 className="get-in-touch-title footer-titles">USEFUL LINKS</h3>
             <ul className="about-us-unordered-list description-color">
                <li>My Account</li>
                <li>Orders & Returns</li>
                <li>Track Order</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Return,Refund & Replacement Policy</li>
             </ul>  
        </div>
        <div className="get-in-touch-container">
             <h3 className="get-in-touch-title footer-titles" >GET IN TOUCH</h3>
             <ul className="about-us-unordered-list get-in-touch description-color">
                <li>Address: F-262, First Floor, <br/> Sushant Lok Phase-III, <br/> Sector-57, Gurgaon, <br/>Haryana, India 122003</li>
                <li className="call">Call:<br/> +919958287272</li>
                <li className="call">Email: <br/> <span className="care-of-address">care@chaperoneplants.com</span></li>
                </ul>
        </div>
        </div>
       </div>
        <div className="chaperone-container">
            <h3>CHAPERONE</h3>
            <p className="chaperone-description description-color">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a 
            numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut 
            porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id 
            labore omnis hic iste deleniti et porro aspernatur.</p>
        </div>
        <div>
            <h3>Follow us on</h3>
            <div className="social-media-container">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729327928/7f493eeb470e8de670f38cfd96f7f380_npveyt.png" alt="instagram" className="social-media-images"/>
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729327911/6b93070272b75e9982142098a3f6d248_gcvecz.png" alt="facebook" className="social-media-images"/>
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729327894/661f7cac5be403338d9e51ce045520d1_wdx8sf.png" alt="threads" className="social-media-images"/>
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729327866/df8eacd4bd4685ff2d34159351ac3113_o2c9iu.png" alt="youtube" className="social-media-images"/>
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729327862/8c3b49078085845b75d9d69eb409ff3b_giqpsa.png" alt="linkedin" className="social-media-images"/>
            </div>
        </div>
        <hr className="horizontal-line"/>
        <p className="rights description-color">© 2023, chaperone.com All rights reserved.</p>
    </div>
)

export default Footer