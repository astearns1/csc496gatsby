import * as React from 'react'
import {diff} from './difficulty.module.css'
import Dial from './svg/dial.js'

const Difficulty = ({difficulty, children}) => {
    
    var imageColor = ""
    if(difficulty <= "easy"){
        imageColor = "#128A03"
    }else if(difficulty <= "medium"){
        imageColor = "#F0E50C"
    }else{
        imageColor = "#CC2500"
    }

    return(
        <div>
            <Dial color={imageColor} />
            <h3 className={diff}>Difficulty:</h3>
            <p className={diff}>{difficulty}</p>
        </div>
    )
}

export default Difficulty