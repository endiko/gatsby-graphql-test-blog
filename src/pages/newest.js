import React from 'react'
import Layout from '../components/layout/layout'
import SEO from "../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const Newest = ({ location }) => {
    return (
        <Layout>
            <SEO title="Новое" />
            <Breadcrumb location={location} crumbLabel="Новое" />
            <h1>Newest page</h1>
        </Layout>
    )
}

export default Newest