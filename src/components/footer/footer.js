import React from 'react'
import './footer.scss'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                © {new Date().getFullYear()}, created by &nbsp;<a href="https://github.com/endiko/">endiko</a>
            </div>

        </footer>
    )
}

export default Footer;