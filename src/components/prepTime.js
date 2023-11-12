import * as React from 'react'
import {prepTime, Low, Medium, High} from './prepTime.module.css'
import Knife from '../images/svg/knife.inline.svg'

const PrepTime = ({preparationTime, children}) => {
    var classN = ""
    console.log(typeof(preparationTime))
    if(preparationTime < 30){
        classN = {Low}
    }else if(preparationTime < 60){
        classN = {Medium}
    }else{
        classN = {High}
    }
    console.log(classN)

    return(
        <div>
            <Knife className={classN}/>
            <h3 className={prepTime}>Preparation Time:</h3>
            <p className={prepTime}>{preparationTime} minutes</p>
        </div>
    )
}

export default PrepTime