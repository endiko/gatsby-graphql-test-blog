import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'
import Navmenu from '../navmenu/navmenu'
import Socials from '../socials/socialIcons'

const Header = ({ siteTitle, siteNavmenu, socials }) => (
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
      <Socials socials={socials} />
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
