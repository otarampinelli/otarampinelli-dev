import React from 'react';

import './About.css'

const About = () => {
    return (
        <section className='about'>
            <div className='about-title'>
                <h2 className='title'>Sobre mim</h2>
            </div>
            <div className='about-post'>
                <h2>Prazer! &#128579;</h2>
                <p>Me chamo Otavio, sou desenvolvedor de software - e atualmente trabalho como fullstack na <a href="https://taller.net.br">Taller</a>, uma empresa focada em negócios digitais.
                </p>
            </div>
        </section>
    )
}

export default About;