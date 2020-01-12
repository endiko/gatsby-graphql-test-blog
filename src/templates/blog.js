import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}) {
            slug
        title
        publishDate(formatString: "D MMMM, YYYY", locale:"ru")
        content {
            json
        }
    }
}
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout location={props.data.contentfulBlogPost.slug} crumbLabel={props.data.contentfulBlogPost.slug}>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
        </Layout>
    )
}

export default Blog