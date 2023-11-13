import * as React from 'react'
import {prepTime} from './prepTime.module.css'
import Knife from '../components/svg/knife.js'

const PrepTime = ({preparationTime, children}) => {
    var imageColor = ""
    if(preparationTime <= 15){
        imageColor = "#128A03"
    }else if(preparationTime <= 30){
        imageColor = "#F0E50C"
    }else{
        imageColor = "#CC2500"
    }

    return(
        <div>
            <Knife color={imageColor} />
            <h3 className={prepTime}>Preparation Time:</h3>
            <p className={prepTime}>{preparationTime} minutes</p>
        </div>
    )
}

export default PrepTime