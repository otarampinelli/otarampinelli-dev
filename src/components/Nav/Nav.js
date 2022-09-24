import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

import './Nav.css'

const Nav = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark')
    }

    return (
        <nav className='navbar'>
            <div className='navbar-options'>
                <a href="/">otarampinelli</a>
                <button onClick={handleThemeChange}>Trocar</button>
            </div>
        </nav>
    )
}

export default Nav