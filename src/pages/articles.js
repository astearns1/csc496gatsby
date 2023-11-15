// Step 1: Import necessary items
import { graphql } from "gatsby"
import React from "react"

// Step 2: Define the component
const articleTemplate = props => {
    // Retrieve data from grahpql query in gastby-node
    const data = {
        nodeFood: props.pageContext.data
    }
    // Log data in console to ensure results
    console.log(data);
    console.log("Hello class! I just printed this page!");

    // Layout the various elements of the React component 
    // (Title, Author, Image, and Body text)
    return(
        <>
            <h1>{data.nodeFood?.title}</h1>
            <h3>Written By: {data.nodeFood?.author.displayName}</h3>
            <div style={{height: "300px", objectFit: "contain"}}>
                <img src={data.nodeFood?.mediaImage.mediaImage.url} alt="Practicing" />
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: data.nodeFood?.body.processed}} />
        </>        
    )
}

// Step 3: Export the component
export default articleTemplate