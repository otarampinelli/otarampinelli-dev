import React from 'react';

import Nav from './Nav/Nav'
import Container from './Container/Container';
import Footer from './Footer/Footer'

import './App.css'

const App = () => {
    return (
        <section className='app'>
            <section className='nav-section'><Nav /></section>
            <section className='container-section'><Container /></section>
            <section className='footer-section'><Footer /></section>
        </section>
    )
}

export default App
