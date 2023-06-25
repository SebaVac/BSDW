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
                        <Nav>
                            
                        </Nav>
                        
                    </div>
                </Navbar>
            </header>

        </>
    );
}

export default Inicio;