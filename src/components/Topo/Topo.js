import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topo.css';
import imagemLogo from './../../assets/img/logo.png';


function Topo() {
    return (
        <header className='topo-header'>
            <Row style={{ padding: '10px' }}>
                <Col className='topo-div-imagem' sm={12} md={4} lg={4}>
                    <Link to='/home'>
                        <img className='topo-imagem-logo' src={imagemLogo} alt='logo KevenFlix' ></img>
                    </Link>
                </Col>
                <Col className='topo-nav' sm={12} md={7} lg={7}>
                    <Row className='topo-item'>
                        <li><Link to='/cursoAlura'>Alura</Link></li>
                        <li><Link to='/404'>Udemy</Link></li>
                        <li><Link to='/404'>Youtube</Link></li>
                        <li><Link to='/404'>Outros</Link></li>
                    </Row>
                </Col>
                <Col className='topo-nav' sm={12} md={1} lg={1}>
                    <Row className='topo-item topo-btn-login'>
                        <Link to='/login'>
                            <Button variant="outline-danger">Login</Button>{' '}
                        </Link>
                    </Row>
                </Col>
            </Row>
        </header>
    );
}

export default Topo;