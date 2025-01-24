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

        <h1 className='tituloSobreMi'>Descripción:</h1>

        <div className='contenedorPalaabrasSobreMi'>
          <p className='palabrasSobreMi'>Apasionada por el aprendizaje continuo y el desarrollo profesional en diversas áreas. Poseo habilidades comunicativas sólidas
            y capacidad para adaptarme, mi interés en la ciberseguridad y mi disposición para formarme en temas comerciales me permiten ofrecer un
            enfoque integral para apoyar el crecimiento de la empresa, resolviendo desafíos con rapidez y eficacia. </p>
        </div>

      </div>

      <div className='ContenedorHabilidades'>

        <div className='cuadroSobreMi'>

          <h2 className='Letras'>Sobre mi</h2>

          <div className='masPalabrasSobreMi' >

            <p >Me adapto rápidamente a nuevas tecnologías, ofreciendo soluciones innovadoras y escalables que superan los desafíos
              de las empresas en el entorno digital actual.</p>
          </div>

        </div>

        <div className='contenedorLineas>'>

          <hr className='linea1' />

          <p className='Experiencia'>Experiencia</p>

          <hr className='linea2' />

        </div>


        <div className="experience-section">

          
          <div class="experience left">

            <h3>CR Compus | Pasantía <span>Agosto 2022</span></h3>
            <ul>
              <li>Soporte técnico en sistemas tecnológicos.</li>
              <li>Cableado estructurado.</li>
              <li>Atención al cliente.</li>
              <li>Gestión de inventario.</li>
              <li>Publicidad.</li>
              <li>Venta de equipos tecnológicos.</li>
            </ul>
          </div>

          <div className="experience right">
            <h3>SuppCenter | Telepráctica <span>Octubre – Diciembre 2023</span></h3>
            <ul>
              <li>Configuración del correo electrónico de Office 365.</li>
              <li>Creación de máquina virtual usando Microsoft Hyper-V.</li>
              <li>Configuración DNS del dominio.</li>
              <li>Atención al cliente.</li>
            </ul>
          </div>

          
          <div className="experience center">
            <h3>Deinsa Global | Pasantía | Enero 2025 - actual</h3>
            <ul>
              <li>Hosteo de páginas web.</li>
              <li>Aprendizaje de nuevas tecnologías para la preparación y capacitación del equipo.</li>
              <li>Automatizaciones con IA.</li>
              <li>Participación en el proceso de selección de pasantes para el equipo.</li>
              <li>Negociaciones para la venta de los servicios de la empresa.</li>
            </ul>
          </div>

        </div>

      </div>


    </div>

  )
}

export default Descripcion