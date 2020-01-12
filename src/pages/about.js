import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const About = ({ location }) => (
  <Layout location={location} crumbLabel="Обо мне">
    <SEO title="Обо мне" />
    <h1>Hi from the About page</h1>

    <p>Welcome to About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
