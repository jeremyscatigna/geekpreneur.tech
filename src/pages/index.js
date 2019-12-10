import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class HomePage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" />
        <h1>Home</h1>
        <Link to="/blog/">Blog</Link>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
