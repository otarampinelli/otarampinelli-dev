import React from 'react'
import { SocialIcon } from 'react-social-icons';

import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='twitter-icon'>
                <a href="https://twitter.com/otarampinelli"><SocialIcon network="twitter" bgColor="#fff" /></a>
            </div>
            <div className='github-icon'>
                <a href="https://github.com/otarampinelli"><SocialIcon network="github" bgColor="#fff" /></a>
            </div>
        </section>
    )
}

export default Footer