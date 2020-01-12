import React from 'react'
import Layout from '../components/layout/layout'
import SEO from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const TheBest = ({ location }) => {
    return (
        <Layout>
            <SEO title="Лучшее" />
            <Breadcrumb location={location} crumbLabel="Лучшее" />
            <h1>The Best page</h1>
        </Layout>
    )
}

export default TheBest