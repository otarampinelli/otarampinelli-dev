import React from 'react'

import './Container.css'

import About from '../About/About'

const Container = () => {
    return (
        <section className='container'>
            <article className='about-article'>
                <About />
            </article>
        </section>
    )
}

export default Container;