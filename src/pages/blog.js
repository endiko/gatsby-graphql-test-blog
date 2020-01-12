import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout/layout'

const BlogPage = ({ location }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                edges {
                  node {
                    slug
                    title
                    publishDate(formatString: "D MMMM, YYYY", locale: "ru")
                  }
                }
            }
        }
    `)
    return (
        <Layout location={location} crumbLabel="Блог">
            <SEO title="Посты" />
            <h1>Blog</h1>
            <ul>
                {data.allContentfulBlogPost.edges.map((edge, index) => (
                    <li key={index}>
                        <Link to={`/blog/${edge.node.slug}`}>
                            <h3>{edge.node.title}</h3>
                            <p>{edge.node.publishDate}</p>
                        </Link>

                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default BlogPage