import Slider from 'react-slick'
import NurseryPlantItem from "../NurseryPlantItem"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./index.css"


const NurserySlider = props => {
    const {nurseryListItems} = props 
    const settings = {
        slidesToShow:6,
        slidesToScroll:1,
        Infinite:false,
        dots:true
    }

    const settings1 = {
        slidesToShow:3,
        slidesToScroll:1,
        Infinite:false,
        dots:true
    }

return (
    <>
        <div className="nursery-slider-container">
        <Slider {...settings}>
            {nurseryListItems.map(eachPlant => (
                <NurseryPlantItem key={eachPlant.imageId} nurseryListDetails={eachPlant} />
            ))}
        </Slider>
    </div>
    <div className="nursery-slider-container1">
        <Slider {...settings1}>
            {nurseryListItems.map(eachPlant => (
                <NurseryPlantItem key={eachPlant.imageId} nurseryListDetails={eachPlant} />
            ))}
        </Slider>
    </div>
    </>
   )
}
export default NurserySlider