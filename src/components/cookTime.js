import * as React from 'react'
import {cookTime} from './cookTime.module.css'
import Egg from './svg/egg.js'

const CookTime = ({cookingTime, children}) => {
    
    var imageColor = ""
    if(cookingTime <= 20){
        imageColor = "#128A03"
    }else if(cookingTime <= 60){
        imageColor = "#F0E50C"
    }else{
        imageColor = "#CC2500"
    }

    return(
        <div>
            <Egg color={imageColor} />
            <h3 className={cookTime}>Cooking Time:</h3>
            <p className={cookTime}>{cookingTime} minutes</p>
        </div>
    )
}

export default CookTime

