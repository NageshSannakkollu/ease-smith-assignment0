import { useState } from "react"
import { v4 as uuidv4} from "uuid";
import NurserySlider from "../NurserySlider"
import AllPlantsSection from "../AllPlantsSection"
import PlantsContext from "../../context/PlantsContext";
import ShippingInfo from "../ShippingInfo"
import Header from "../Header";
import Footer from "../Footer";
import "./index.css"

const activeButtons = [
{
    buttonId:"plants",
    buttonText:"Plants"
},
{
    buttonId:"pots",
    buttonText:"Pots"
}
]

const nurseryList = [
    {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729335580/362237370ea139219155cf9fca2448d3_krndbo.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729335616/8375cef653c6b9ae388a7f2dda4ba454_qyjagd.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729263801/935a62fb31df9354ded9299559307ae6_ene5s0.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729263833/7eca96d5008198d2181b991de6f19034_lc1fqp.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729307996/ed50532940537d9d39d2626bb7a95167_arqqef.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729308001/7f83ab9fd1481e530fd7e03257a1bb07_gmlzq7.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729308052/1218900e6bd6cc6f3d5a104c0dbb8212_txurgv.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729308085/6b210bc07ae9706bbb2921a7a22ae2d8_exhlmr.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729308121/4fa5aaae113083a0db504c05b0632860_sfk2hp.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
     {
        imageId:uuidv4(),
        imageUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1729308126/bbfa90988173614195fa81d43aa2bb63_wn2d5q.png",
        description:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    }
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]


const PlantsAndPots = () => {
    const [activeSortOptionId,setActiveSortOptionId] = useState(sortbyOptions[0].optionId)
    
    return (
        <PlantsContext.Consumer>
        {value => {
            const {plantsList,finalPlantsList,prevButtonClicked,nextButtonClicked} = value
            const lengthOfPlants = plantsList.length;
        const prevButton = () => {
            prevButtonClicked()
        }

        const nextButton = () => {
           nextButtonClicked()
        }
        return(
            <>
            <ShippingInfo/>
                <div className="main-home-container">
                    <Header/>
            
        <div className="main-container">
        <div className="search-plant-horz-line-container">
        <div className="search-plant-container">
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309287/image_1_vnifah.png" alt="search" className="search-icon"/>
            <input type="search" placeholder="Search Plant" className="search-plant-input"/>
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729308764/image_91_zjgk2o.png" alt="plant" className="plant-image"/>
        </div>
        <hr className="horz-line"/>
      </div>
        <button type="button" className="plants-button">Plants</button>
        <button type="button" className="pots-button">Pots</button>
       <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos 
            accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae 
            voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto 
            nihil id labore omnis hic iste deleniti et porro aspernatur.
        </p>
       <div>
            <h2>Nursery</h2>
            <NurserySlider nurseryListItems={nurseryList} />
        </div>
        <div className="filter-plant-section-container">
            <div className="filter-section-container">
                <div className="filter-section">
                    <p>Filter</p>
                    <p>CLEAR ALL</p>
                </div>
                <hr className="filter-horizontal-line"/>
                <div className="filter-section">
                    <p>Type of Plants</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Price</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Nursery</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Ideal Plants Location</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Indoor/ Outdoor</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Maintenance</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Plant Size</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Water Schedule</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Color</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Seasonal</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
                <div className="filter-section">
                    <p>Light Efficient</p>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1729309289/mqcooirfps0hqxmasi6o.png" alt="plus" className="plus-image"/>
                </div>
                <hr/>
            </div>
            <div className="plants-sort-by-main-container">
                <div className="products-length-sort-by-container">
                    <p>{`${lengthOfPlants} Products`}</p>
                    <select className="sort-by-container" value={activeSortOptionId}>
                        <option className="sort-by-title">SORT BY</option>
                    </select>
                </div>
                <ul className="un-ordered-plants-container">
                    {finalPlantsList.map(eachPlant => (
                        <AllPlantsSection plantDetails={eachPlant} key={eachPlant.id} />
                    ))}
                </ul>
                <div className="prev-next-buttons-container">
                    <button type="button" className="prev-next-button" onClick={prevButton}>Prev</button>
                    <button type="button" className="prev-next-button" onClick={nextButton}>Next</button>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
        </>
        )
       }}
    </PlantsContext.Consumer>
    )
    
}

export default PlantsAndPots