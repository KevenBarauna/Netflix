import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topo.css';
import imagemLogo from './../../assets/img/logo.png';


function Topo() {
    return (
        <header className='topo-header'>
            <Row>
                <div className='topo-nav'>
                    <div className='topo-div-imagem'>
                        <img className='topo-imagem-logo' src={imagemLogo} alt='logo KevenFlix'></img>
                    </div>
                    <div className='topo-menu-item'>
                        <li><Link to='/404'>Alura</Link></li>
                        <li><Link to='/404'>Udemy</Link></li>
                        <li><Link to='/404'>Youtube</Link></li>
                        <li><Link to='/404'>Outros</Link></li>
                    </div>
                </div>
            </Row>
        </header>
    );
}

export default Topo;