import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import Navmenu from '../navmenu/navmenu'

const Header = ({ siteTitle, siteNavmenu }) => (
  <header className="header">
    <div className="container header-container">
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <Navmenu navmenu={siteNavmenu} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteNavmenu: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
