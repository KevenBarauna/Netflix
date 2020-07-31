import React from 'react';
import { Row, Col, Form } from 'react-bootstrap'
import './Footer.css'
// import imagemLogo from './../../assets/img/logo.png'


function Footer() {
    return (
        <footer className='footer-container'>
            <Row className='footer-row'>
                <Col className='footer-col'>
                    <ul>
                        <li><a>Dúvidas? Ligue 0800-761-4631</a></li>
                        <li><a>Perguntas frequentes</a></li>
                        <li><a>Relações com investidores</a></li>
                        <li><a>Formas de assistir</a></li>
                        <li><a>Informações corporativas</a></li>
                        <li><a>Originais Netflix</a></li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li><a>Centro de ajuda</a></li>
                        <li><a>Carreiras</a></li>
                        <li><a>Termos de uso</a></li>
                        <li><a>Entre em contato</a></li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <ul>
                        <li><a>Conta</a></li>
                        <li><a>Resgatar cartão pré-pago</a></li>
                        <li><a>Privacidade</a></li>
                        <li><a>Teste de velocidade</a></li>
                    </ul>
                </Col >
                <Col className='footer-col'>
                    <ul>
                        <li><a>Imprensa</a></li>
                        <li><a>Comprar cartão pré-pago</a></li>
                        <li><a>Preferências de cookies</a></li>
                        <li><a>Avisos legais</a></li >
                    </ul>
                </Col >
                <Col className='footer-col'>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select" defaultValue="Português" className='footer-select-linguagem'>
                            <option>Português</option>
                            <option>English</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row >
        </footer >
    );
}

export default Footer;