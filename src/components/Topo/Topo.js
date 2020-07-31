import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topo.css';
import imagemLogo from './../../assets/img/logo.png';


function Topo() {
    return (
        <header className='topo-header'>
            <Row style={{ padding: '10px' }}>
                <Col className='topo-div-imagem'>
                    <Link to='/home'>
                        <img className='topo-imagem-logo' src={imagemLogo} alt='logo KevenFlix' ></img>
                    </Link>
                </Col>
                <Col className='topo-nav'>
                    <div>
                        <li><Link to='/404'>Alura</Link></li>
                        <li><Link to='/404'>Udemy</Link></li>
                        <li><Link to='/404'>Youtube</Link></li>
                        <li><Link to='/404'>Outros</Link></li>
                    </div>
                </Col>
            </Row>
        </header>
    );
}

export default Topo;