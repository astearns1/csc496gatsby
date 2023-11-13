import React from "react"
import CookTime from "../components/cookTime"
import './css/recipe.css'
import PrepTime from "../components/prepTime"
import Servings from "../components/servings"
import Difficulty from "../components/difficulty"

const pageTemplate = props => {

    const data = {
        nodeFood: props.pageContext.data
    }

    const ingredientsList = []
    console.log(data)
    console.log("Hello class! I just printed this page!")
    console.log(data.nodeFood?.title)
    data.nodeFood?.ingredients.forEach((data) => {
        ingredientsList.push(<tr><td>{data}</td></tr>)
    })

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
                        <tr>
                            <th>Ingredients</th>
                        </tr>
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

export default pageTemplate