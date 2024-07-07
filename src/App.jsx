import Home from '../home/Home'
import Preloader from "../preloader/Preloader"
import React, { useState, useEffect } from 'react';
import Particles from "../home/Particles"
import "../home/particles.css"

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); // Limpia el temporizador en desmontaje
  }, []);

  return (
    <>
      
      {showPreloader ? (
  <>
    <Particles />
    <Preloader />
  </>
) : (
  <>
    <Home />
    <Particles />
    {/* <Owners /> */}
  </>
)}


    </>
  );
};

export default App;
