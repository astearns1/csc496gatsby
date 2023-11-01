import * as React from 'react'
import {diff} from './difficulty.module.css'

const Difficulty = ({difficulty, children}) => {
    
    return(
        <div>
            <h3 className={diff}>Difficulty:</h3>
            <p className={diff}>{difficulty}</p>
        </div>
    )
}

export default Difficulty