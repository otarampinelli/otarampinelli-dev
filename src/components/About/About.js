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
                <p>Me chamo Otavio, sou desenvolvedor de software - e atualmente trabalho como fullstack na <a href="https://taller.net.br">Taller</a>.
                </p>
                <p>Sou ciclista e baterista nas horas vagas, apaixonado por cozinhar, por música e principalmente por não fazer nada quando tenho oportunidade.</p>
                <iframe title="spotify-frame" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/album/2cUpAOlQjV5uSjkWj5bEQY?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>


            
        </section>
    )
}

export default About;