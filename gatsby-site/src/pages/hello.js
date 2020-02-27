import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HelloPage = () => (
  <Layout>
    <SEO title="Hello" />
    <h1>Hello World!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HelloPage
