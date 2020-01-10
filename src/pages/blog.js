import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/layout'

const BlogPage = () => {
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
        <Layout>
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