import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faSlack,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";
import Expressjs from "../assets/expressjs.svg";
import Mongodb from "../assets/mongodb-icon.svg";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";

const Main = () => {
  const Alumno = {
    nombre: "Hernán Sánchez Ortiz",
    telefono: "+54 381 3331098",
    email: "hernansanchez395@gmail.com",
    ubicacion: "San Miguel de Tucumán - Argentina.",
    edad: "28 años",
  };

  return (
    <div className="py-1 fondoMain">
      <Container className="my-4 shadow p-3 rounded ventanas">
        <Row>
          <Col>
            <h3 className="text-secondary pl-3 text-center">
              Datos personales
            </h3>
            <hr />
            <div className="pl-5">
              <p>
                <strong>Email: </strong>
                {Alumno.email}
              </p>
              <p>
                <strong>Teléfono: </strong>
                {Alumno.telefono}
              </p>
              <p>
                <strong>Ubicación: </strong>
                {Alumno.ubicacion}
              </p>
              <p>
                <strong>Edad: </strong>
                {Alumno.edad}
              </p>
            </div>
          </Col>

          <Col className="text-center">
            <h3 className="text-secondary pl-3">Sobre mí:</h3>
            <hr />
            <p className="px-5">
              Hola! Soy {Alumno.nombre}, estudiante de Programación en la
              Facultad Regional de Tucumán. Soy una persona autodidacta,
              proactiva y con capacidad de trabajar en equipo. Me gusta buscar
              soluciones a todos los desafíos que puedan presentarse.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="shadow mb-5 p-3 rounded ventanas">
        <h2 className="text-secondary text-center">Habilidades</h2>
        <hr />
        <Row>
          <Col>
            <h4 className="text-secondary text-center">Front-End</h4>
            <hr />
            <Row>
              <Col>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faHtml5} /> HTML 5
                </p>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faCss3Alt} /> CSS 3
                </p>
                <p>
                  <FontAwesomeIcon className="iconos mr-1" icon={faBootstrap} />
                  Bootstrap
                </p>
              </Col>
              <Col>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faJs} /> Javascript
                </p>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faReact} /> React
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col>
              <h4 className="text-secondary text-center">Back-End</h4>
              <hr />
              <Row>
                <Col>
                  <p>
                    <FontAwesomeIcon className="iconos" icon={faNode} /> NodeJs
                  </p>
                </Col>
                <Col>
                  <Row>
                    <img src={Expressjs} className="iconos ml-3" />
                    <p className="ml-1">ExpressJs</p>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className="text-secondary text-center">Base de datos</h4>
            <hr />
            <Row>
              <Col>
                <Row>
                  <img src={Mongodb} className="iconos ml-3" />
                  <p className="ml-1">Mongo DB</p>
                </Row>
              </Col>
              <Col>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faDatabase} /> MySQL
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <h4 className="text-secondary text-center">Otros</h4>
            <hr />
            <Row>
              <Col>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faUsers} /> Scrum
                </p>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faSlack} /> Slack
                </p>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faCode} /> Visual
                  Studio Code
                </p>
              </Col>
              <Col>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faGit} /> Git
                </p>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faGithub} /> GitHub
                </p>
                <p>
                  <FontAwesomeIcon className="iconos" icon={faTrello} /> Trello
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
