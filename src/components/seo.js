// Step 1: Import necessary items
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// Step 2: Define component
const Seo = ({ title }) => {
  // Retrieve data using graphql query
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Create element
  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

// Step 3: Export component
export default Seo