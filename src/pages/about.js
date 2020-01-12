import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const About = ({ location }) => (
  <Layout>
    <SEO title="Обо мне" />
    <Breadcrumb location={location} crumbLabel="Обо мне" />
    <h1>Hi from the About page</h1>

    <p>Welcome to About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
