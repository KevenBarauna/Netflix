import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './Topo.css'
import imagemLogo from './../../assets/img/logo.png'


function Topo() {
    return (
        <header className='topo-header'>
            <Row>
                <div className='topo-nav'>
                    <div className='topo-div-imagem'>
                        <img className='topo-imagem-logo' src={imagemLogo} alt='logo KevenFlix'></img>
                    </div>
                    <div className='topo-menu-item'>
                        <li><a href="#">Alura</a></li>
                        <li><a href="#">Udemy</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Outros</a></li>
                    </div>
                </div>
            </Row>
        </header>
    );
}

export default Topo;