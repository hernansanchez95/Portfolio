import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="fondoFooter py-3">
      <Container className="text-center">
        <a href="https://www.linkedin.com/in/hernan-sanchez-ortiz" target='blank' className='mx-2'>
        <FontAwesomeIcon className="iconosRedes fab fa-2x" icon={faLinkedin} />
        </a>
        <a href="https://github.com/hernansanchez95" target='blank' className='mx-2'>
        <FontAwesomeIcon className="iconosRedes fab fa-2x" icon={faGithub} />
        </a>
        <hr />
        <p className='lead mt-2'>Sánchez Ortiz Hernán</p>
        <p><small>&copy; Todos los derechos reservados.</small></p>
      </Container>
    </div>
  )
}

export default Footer
