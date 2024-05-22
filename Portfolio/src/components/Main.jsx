import React from "react";
import "../styles/styles.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'

const Main = () => {
  const Alumno = {
    nombre:"Hernán Sánchez Ortiz",
    telefono:"+54 381 3331098",
    email:"hernansanchez395@gmail.com",
    ubicacion:"San Miguel de Tucumán",
    edad:"28 años"
  }

  return (
    <div className="py-1 fondoMain">
      <Container className="my-4 shadow p-3 rounded bg-white">
        <h3 className="text-secondary">Datos personales</h3>
        <hr />
        <p><strong>Email: </strong>{Alumno.email}</p>
        <p><strong>Teléfono: </strong>{Alumno.telefono}</p>
        <p><strong>Ubicación: </strong>{Alumno.ubicacion}</p>
        <p><strong>Edad: </strong>{Alumno.edad}</p>
        <hr />
        <h3 className="text-secondary">Sobre mí:</h3>
        <p>
          Hola! Soy {Alumno.nombre}, Programador Fullstack, soy una persona
          autodidacta, proactiva, con capacidad de trabajar en equipo y aprender
          rápidamente. Me gusta la programación entre otras cosas por sus
          desafíos y también me gusta buscar soluciones a todos los problemas
          que puedan presentarse.
        </p>
      </Container>
      <Container className="shadow mb-5 p-3 bg-white rounded">
      <h3 className="text-secondary">Habilidades</h3>
      <hr />
      <strong><FontAwesomeIcon className="iconos" icon={faHtml5} /> HTML 5</strong>
      
      </Container>
    </div>
  );
};

export default Main;
