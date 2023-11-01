import * as React from 'react'
import {prepTime} from './prepTime.module.css'

const PrepTime = ({preparationTime, children}) => {
    
    return(
        <div>
            <h3 className={prepTime}>Preparation Time:</h3>
            <p className={prepTime}>{preparationTime} minutes</p>
        </div>
    )
}

export default PrepTime