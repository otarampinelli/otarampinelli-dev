import React, { useState } from 'react';
import { ThemeContext } from '../contexts/theme-context';

import Nav from './Nav/Nav'
import Container from './Container/Container';
import Footer from './Footer/Footer'

import './App.css'

const browserDefaultTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches

const App = () => {
    const [theme, setTheme] = useState(browserDefaultTheme() ? 'dark' : 'light')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <section className={`app ${theme}`}>
                <section className='nav-section'><Nav /></section>
                <section className='container-section'><Container /></section>
                <section className='footer-section'><Footer /></section>
            </section>
        </ThemeContext.Provider>
    )
}

export default App
