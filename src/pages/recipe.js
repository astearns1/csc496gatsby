import { graphql } from "gatsby"
import React from "react"

const pageTemplate = props => {

    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);
    console.log("Hello class! I just printed this page!");

    return(
        <>
            <h4>{data.nodeFood?.title}</h4>
            <p>Number of Servings: {data.nodeFood?.numberOfServings}</p>
            <p>Prep Time: {data.nodeFood?.preparationTime}</p>
            <p>Cook Time: {data.nodeFood?.cookingTime}</p>
        </>        
    )
}

export default pageTemplate