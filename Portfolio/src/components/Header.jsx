import React from "react";
import "../styles/styles.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Hernan from "../assets/Hernan.jpg";

const Header = () => {
  return (
    <div className="fondo">
      <Container className=" container-fluid text-center">
        <Image src={Hernan} className="avatar" roundedCircle />
        <h1 className="text-light mt-3">SÁNCHEZ ORTIZ HERNÁN</h1>
        <p className="lead">Desarrollador Fullstack</p>
      </Container>
    </div>
  );
};

export default Header;
