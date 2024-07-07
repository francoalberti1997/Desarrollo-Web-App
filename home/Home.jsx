import React from 'react';
import Dna from "../home/Dna.jsx"
import { useState, useEffect } from 'react';
import logo from "../preloader/logoa.png"
import Owners from '../owners/Owners.jsx'
import daniela from "../owners/Daniela.png"
import rodolfo from "../owners/Rodolfo.png"
import seba from "../owners/Seba.png"
import delfina from "../owners/Delfina.png"
import Carousel from './Carousel.jsx';
import fondo_neurona from '../home/neurona2.jpg'

const Home = () => {
    useEffect(() => {
        // Añade la clase 'show' después de un pequeño retraso para activar la transición
        const timer = setTimeout(() => {
            document.querySelector('.home').classList.add('show');
        }, 100); // 100ms para permitir que el componente se monte antes de la transición

        return () => clearTimeout(timer); // Limpia el temporizador en desmontaje
    }, []);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleArrowClick = () => {
      setScrollPosition(scrollPosition + 400);
      window.scrollTo({
        top: scrollPosition + 400,
        behavior: 'smooth'
      });
    };

    return (
        <div className="home">
                <>
                    <img src={fondo_neurona} id="fondo_neurona_css" alt="" />
                    <div className="owner-image">
                        <img src={daniela} alt="" className='daniela'/>
                        <img src={rodolfo} alt="" className='rodolfo'/>
                    </div>

                    <div className="ds">
                        <img src={delfina} alt="" className='delfina'/>
                        <img src={seba} alt="" className='seba'/>
                    </div>

                    <Carousel/>
               
                    {/* <div className='arrow-dw' onClick={handleArrowClick}>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div> */}
                    <div id="dna">
                        <Dna />
                    </div>
                    {/* <div className="logo-b4t">
                        <img src={logo} alt="" />
                    </div> */}
                    <div className="contacto">
                        <i className="fa-solid fa-headset"></i>
                    </div>
                    <div className="home-logo">
                        <div className="home-logo-title">
                            <p id='b4'>B4</p><p id='Tomorrow'>Tomorrow</p>
                        </div>
                        <div className="home-logo-footer">
                            <div className="home-logo-soon">
                                <p>
                                    Coming Soon
                                </p>
                            </div>
                            <div className="home-logo-medias">
                                <div><i className="fa-brands fa-instagram"></i></div>
                                <div><i className="fa-brands fa-linkedin-in"></i></div>
                                <div><i className="fa-brands fa-instagram"></i></div>
                                <div><i className="fa-brands fa-linkedin-in"></i></div>
                            </div>
                        </div>
                    </div>
                </>            
        </div>
    );
}

export default Home;
