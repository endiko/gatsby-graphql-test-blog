import React from 'react'
import { Link } from 'gatsby'
import './navmenu.css'

const Navmenu = (props) => {
    return (
        <nav className="header-nav">
            <ul className="navmenu__list">
                {props.navmenu.map((item, index) => (
                    <li className="navmenu__item" key={index}>
                        <Link to={`/${item.page}`} className="navmenu__item--link">{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navmenu