import React from 'react'
import Layout from '../components/layout/layout'
import SEO from "../components/seo"

const Newest = ({ location }) => {
    return (
        <Layout location={location} crumbLabel="Новое">
            <SEO title="Новое" />
            <h1>Newest page</h1>
        </Layout>
    )
}

export default Newest