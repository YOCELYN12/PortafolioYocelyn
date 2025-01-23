import React from 'react'
import '../Styles/DescripcionPages.css'
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

function Descripcion() {
  return (

    <div className="contenedor">

      <div className="mitadnegro">

        <div className='divMenu'>
          <a href="">Sobre mi</a>
          <a href="">Habilidades</a>
          <a href="">Portafolio</a>
          <button className='btnContactame'>Contactame</button>
        </div>

        <img className='FotoYocelyn' src="https://i.imgur.com/TVlDuLx.png" alt="" />

      </div>

      <div className="mitadblanco">

        <div className='divTitulo'>
          <h1 >Soy:</h1>
        </div>

        <div className='divNombre'>
          <p className='nombre'><strong>Yocelyn Rivera</strong></p>
        </div>

        <p className='letrasEspecialidades'> <strong>Full stack Developer / Tecnico en soporte </strong></p>

        <div className='redesSociales'>
          <button><FiAtSign /></button>
          <button><SiGithub /></button>
          <button><FaLinkedin /></button>
        </div>



      </div>
      <div className='contenedorSobreMi'>
        <div className='contenedorPalaabrasSobreMi'>>
          <p className='palabrasSobreMi'>Apasionada por el aprendizaje continuo y el desarrollo profesional en diversas áreas. Poseo habilidades comunicativas sólidas <br />
            y capacidad para adaptarme, mi interés en la ciberseguridad y mi disposición para formarme en temas comerciales me permiten ofrecer un
            enfoque integral para apoyar el crecimiento de la empresa, resolviendo desafíos con rapidez y eficacia. </p>
        </div>
      </div>




    </div>



  )
}

export default Descripcion