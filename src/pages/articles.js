import { graphql } from "gatsby"
import React from "react"

const articleTemplate = props => {

    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);
    console.log("Hello class! I just printed this page!");

    return(
        <>
            <h1>{data.nodeFood?.title}</h1>
            <h2>Written By: {data.nodeFood?.author.displayName}</h2>
            <img src={data.nodeFood?.mediaImage.mediaImage.url} alt="Practicing" />
            <div dangerouslySetInnerHTML={{ __html: data.nodeFood?.body.value}} />
        </>        
    )
}

export default articleTemplate