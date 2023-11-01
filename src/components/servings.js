import * as React from 'react'
import {serve} from './servings.module.css'

const Servings = ({numberOfServings, children}) => {
    
    return(
        <div>
            <h3 className={serve}>Number of Servings:</h3>
            <p className={serve}>{numberOfServings}</p>
        </div>
    )
}

export default Servings