// Step 1: Import necessary items
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define the component
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        // Create blog posts for each of the MDX blog files
        data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
        ))
      }
    </Layout>
  )
}

// Create query to retrieve data
export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
              }
              id
              excerpt
            }
          }
    }
`

export const Head = () => <Seo title="My Blog Posts" />
// Step 3: Export component
export default BlogPage