import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import './index.scss'

const IndexPage = ({ location }) => (
  <Layout location={location} crumbLabel="">
    <SEO title="endiko blog" />
    <h1>Свежие записи</h1>
    <p>Добро пожаловать!</p>
    <p>Скоро здесь будет текст.</p>

    <Link to="/about">Go to page 2</Link>
  </Layout>
)

export default IndexPage
