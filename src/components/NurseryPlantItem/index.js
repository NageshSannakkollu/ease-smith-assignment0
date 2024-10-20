import "./index.css"

const NurseryPlantItem = props => {
    const {nurseryListDetails} = props
    const {imageUrl,description} = nurseryListDetails
    return(
        <div className="nursery-item">
            <img src= {imageUrl} alt="plant" className="nursery-image"/>
            <p>{description}</p>
        </div>
    )
}

export default NurseryPlantItem