import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import LogoTryAll from '../images/logotryall.png';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

function Inicio() {
    return (
        <>
            <header>
                <Navbar className='navBare' expand="lg">
                    <div className="container-fluid">
                        <Navbar.Brand>
                            <a href="/" target="_blank">
                                <img className='iniciologo' src={LogoTryAll} alt="Logo" />
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="contenedor me-auto mb-2 mb-lg-0">
                                <NavLink href="/"><font color="white">Persona</font></NavLink>
                                <h1><font color="white">|</font></h1>
                                <NavLink href="/"><font color="white">Empresa</font></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                        
                    </div>
                </Navbar>
            </header>

        </>
    );
}

export default Inicio;