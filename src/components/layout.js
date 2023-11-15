// Step 1: Import necessary items
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

// Step 2: Define component
const Layout = ({ pageTitle, children }) => {
  // Create graphql query to pull data from data source
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
  `)

  // Build component and use data from query to fill
  // Additionally, use module.css to style elements of the component
  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
	          <Link to="/about" className={navLinkText}>
	            About
	          </Link>
          </li>
          <li className={navLinkItem}>
	          <Link to="/blog" className={navLinkText}>
	            Blog
	          </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

// Step 3: Export component
export default Layout