import React from 'react';

import Nav from './Nav/Nav'
import Container from './Container/Container';

import './App.css'

const App = () => {
    return (
        <section className='app'>
            <Nav />
            <Container />
        </section>
    )
}

export default App