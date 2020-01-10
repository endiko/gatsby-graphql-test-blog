import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                      frontmatter {
                        title
                        date
                      },
                      fields {
                          slug
                      }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <h1>Blog</h1>
            <ul>
                {data.allMarkdownRemark.edges.map((edge, index) => (
                    <li key={index}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>

                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default BlogPage