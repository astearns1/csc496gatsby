import * as React from 'react'
import {serve} from './servings.module.css'
import Plate from './svg/plate.js'

const Servings = ({numberOfServings, children}) => {
    
    var imageColor = ""
    if(numberOfServings <= 4){
        imageColor = "#128A03"
    }else if(numberOfServings <= 8){
        imageColor = "#F0E50C"
    }else{
        imageColor = "#CC2500"
    }

    return(
        <div>
            <Plate color={imageColor} />
            <h3 className={serve}>Number of Servings:</h3>
            <p className={serve}>{numberOfServings}</p>
        </div>
    )
}

export default Servings