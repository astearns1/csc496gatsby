// Step 1: Import necessary items
import React from "react"
import CookTime from "../components/cookTime"
import './css/recipe.css'
import PrepTime from "../components/prepTime"
import Servings from "../components/servings"
import Difficulty from "../components/difficulty"

// Step 2: Define the component
const pageTemplate = props => {
    // Retrieve the data from graphql query in gatsby-node.js
    const data = {
        nodeFood: props.pageContext.data
    }

    // Create array to hold the list of the ingredients
    const ingredientsList = []
    console.log(data)
    console.log("Hello class! I just printed this page!")
    console.log(data.nodeFood?.title)
    // Iterate through each value of the ingredients from the query
    // and create as a row in a table for later
    data.nodeFood?.ingredients.forEach((data) => {
        ingredientsList.push(<tr><td>{data}</td></tr>)
    })
    
    // Create page, utilizes grid structure in CSS to layout the various elements
    return(
        <>
            <h2>{data.nodeFood?.title}</h2>
            <h4 dangerouslySetInnerHTML={{ __html: data.nodeFood?.summary.processed}} />
            <div className="grid-container">
                <div className="imageDiv">
                    <img src={data.nodeFood?.mediaImage.mediaImage.url} alt="Practice" />
                </div>                  
                <div className="preparationTime">
                    <PrepTime preparationTime={data.nodeFood?.preparationTime}></PrepTime>
                </div>                
                <div className="cookingTime">
                    <CookTime cookingTime = {data.nodeFood?.cookingTime}></CookTime>
                </div>
                <div className="servings">
                    <Servings numberOfServings = {data.nodeFood?.numberOfServings}></Servings>
                </div>
                <div className="difficulty">
                    <Difficulty difficulty={data.nodeFood?.difficulty}></Difficulty>
                </div>
                <div className="ingredients">
                    <table>
                        <tr><th>Ingredients</th></tr>
                        {ingredientsList}
                    </table>
                </div>
                <div className="instructions">
                    <p>Instructions:</p>
                    <div dangerouslySetInnerHTML={{ __html: data.nodeFood?.recipeInstruction.processed}} />
                </div>
            </div>
        </>        
    )
}

// Step 3: Export component
export default pageTemplate