// Step 1: Import necessary items
import * as React from 'react'
import {prepTime} from './prepTime.module.css'
import Knife from '../components/svg/knife.js'

// Step 2: Define component
const PrepTime = ({preparationTime, children}) => {
    // Conditional formatting based on value
    // of preparation time passed to the component
    var imageColor = ""
    if(preparationTime <= 15){
        imageColor = "#128A03" // Green
    }else if(preparationTime <= 30){
        imageColor = "#F0E50C" // Yellow
    }else{
        imageColor = "#CC2500" // Red
    }

    // Create the layout of the component
    return(
        <div data-testid="prepTimeTest">
            <Knife color={imageColor} />
            <h3 className={prepTime}>Preparation Time:</h3>
            <p className={prepTime}>{preparationTime} minutes</p>
        </div>
    )
}

// Step 3: Export component
export default PrepTime