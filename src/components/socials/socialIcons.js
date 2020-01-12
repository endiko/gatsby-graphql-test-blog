import React from 'react'
import './socialIcons.scss'
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialIcons = (props) => {
    return (
        <ul className="social-icon__list">
            <li className="social-icon__item">
                <a href={props.socials[0].href} className="social-icon__item--link" data-tooltip={props.socials[0].name}>
                    <FaInstagram className="social-icon" />
                </a>
            </li>
            <li className="social-icon__item">
                <a href={props.socials[1].href} className="social-icon__item--link" data-tooltip={props.socials[1].name}>
                    <FaYoutube className="social-icon" />
                </a>
            </li>
        </ul>
    )
}

export default SocialIcons;