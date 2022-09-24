import React, { useContext } from 'react'
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from '../../contexts/theme-context';

import './Footer.css'

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className='footer'>
            { console.log(theme) }
            <div className='twitter-icon'>
                <a href="https://twitter.com/otarampinelli"><SocialIcon network="twitter" bgColor={theme === 'light' ? '#beb6bf' : '#fff'} /></a>
            </div>
            <div className='github-icon'>
                <a href="https://github.com/otarampinelli"><SocialIcon network="github" bgColor={theme === 'light' ? '#beb6bf' : '#fff'} /></a>
            </div>
        </section>
    )
}

export default Footer