import React from 'react'
import logo from "../preloader/Logo.png"
import { useState, useEffect } from 'react';
import fondo_neurona from '../home/neurona.jpg'

const Preloader = () => {

    // const [showLoaders, setShowLoaders] = useState(false);

    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setShowLoaders(true);
    //   }, 2500); // 5 segundos
  
    //   return () => clearTimeout(timer); // Limpia el temporizador en desmontaje
    // }, []);
  
    return (
      <>
        {/* {showLoaders ? (
          <div className='preloader logo-pre'>
            <div className="loader"></div> 
          </div>
        ) : (
            <div className='preloader '>
                <img src={logo} alt="Logo" />
            </div>
        )}
        
        <img src={fondo_neurona} id="fondo_neurona_css" alt="" /> */}

          <div className='preloader logo-pre'>
            <div className="loader"></div> 
          </div>

          
      </>
    );
  }
  
  export default Preloader;
  