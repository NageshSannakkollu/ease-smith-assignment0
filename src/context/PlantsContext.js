import React from "react"

const PlantsContext = React.createContext({
    clickOnCartItem:() => {},
    prevButtonClicked:() => {},
    nextButtonClicked:() => {}
})

export default PlantsContext