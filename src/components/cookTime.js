import * as React from 'react'
import {cookTime} from './cookTime.module.css'

const CookTime = ({cookingTime, children}) => {
    
    return(
        <div>
            <h3 className={cookTime}>Cooking Time:</h3>
            <p className={cookTime}>{cookingTime} minutes</p>
        </div>
    )
}

export default CookTime

