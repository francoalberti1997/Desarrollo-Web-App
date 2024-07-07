import React, { useEffect, useState } from 'react';
import Owners from '../owners/Owners.jsx'
import daniela from "../owners/Daniela.png"
import rodolfo from "../owners/Rodolfo.png"
import seba from "../owners/Seba.png"
import delfina from "../owners/Delfina.png"

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 5000); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className={`owner-cs owner-carousel ${activeIndex === 0 ? 'active' : ''}`}>
                <img src={daniela} alt="Daniela" className='daniela'/>
                <img src={rodolfo} alt="Rodolfo" className='rodolfo'/>
            </div>
            <div className={`owner-carousel ${activeIndex === 1 ? 'active' : ''}`}>
                <img src={delfina} alt="Delfina" className='delfina'/>
                <img src={seba} alt="Seba" className='seba'/>
            </div>
        </div>
    );
};

export default Carousel;
