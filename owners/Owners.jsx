import React from 'react';
import Staff from './Staff';
import seba from "../owners/Seba.png";
import Delfina from "../owners/Delfina.png";
import Rodolfo from "../owners/Rodolfo.png";
import Daniela from "../owners/Daniela.png";

const Owners = () => {
  const staffMembers = [
    { imagen: Delfina, nombre: "Delfina" },
    { imagen: seba, nombre: "Sebastian" },
    

    // Añade más objetos para cada miembro del personal si es necesario
  ];

  const staffMembers2 = [
    { imagen: Rodolfo, nombre: "Rodolfo" },
    { imagen: Daniela, nombre: "Daniela" },
    // Añade más objetos para cada miembro del personal si es necesario
  ];

  return (
    <div id='owners'>
      <div className="line-body"></div>
      <div className="home-logo about">
        <div className="home-logo-title">
          <p id='b4' className='team'>Our Team</p>
        </div>
        <div className='home-logo-about'>
          <p>
          Our team is the driving force behind our success. 
          With a passion for innovation and a commitment to excellence, 
          we work together to tackle the most challenging healthcare issues. 
          </p> 
        </div>
      </div>
      
      <Staff staffMembers={staffMembers2} />
      <Staff staffMembers={staffMembers} />
    </div>
  );
};

export default Owners;
