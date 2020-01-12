/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Main from "../main/main"
import Footer from '../footer/footer'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import "./layout.scss"

const Layout = ({ children, location, crumbLabel }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          menuItems {
            name
            page
          }
          socialIcons {
            name
            href
          }
        }
      }
    }
  `)

  return (
    <div className="layout__wrapper">
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteNavmenu={data.site.siteMetadata.menuItems}
        socials={data.site.siteMetadata.socialIcons}
      />

      <Main>
        <Breadcrumb location={location} crumbLabel={crumbLabel} className="breadcrumb__list" />
        {children}
      </Main>
      <Footer />
    </div>
  )
}


export default Layout
