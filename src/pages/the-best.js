import React from 'react'
import Layout from '../components/layout/layout'
import SEO from "../components/seo"

const TheBest = ({ location }) => {
    return (
        <Layout location={location} crumbLabel="Лучшее">
            <SEO title="Лучшее" />
            <h1>The Best page</h1>
        </Layout>
    )
}

export default TheBest