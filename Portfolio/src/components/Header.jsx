import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Hernan from "../assets/Hernan.jpg";

const Header = () => {
  return (
    <div className="fondoHeader py-3">
      <Container className=" container-fluid text-center">
        <Image src={Hernan} className="avatar" roundedCircle />
        <h1 className=" mt-3">SÁNCHEZ ORTIZ HERNÁN</h1>
        <small className="lead">Desarrollador</small>
        <hr />
      </Container>
    </div>
  );
};

export default Header;
