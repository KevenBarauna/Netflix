import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Destaque.css';

const Destaque = (props) => {
    const {
        titulo,
        subTitulo,
        imagem,
        altImagem,
    } = props;

    return (
        <div className='destaque-background'>
            <Row className='destaque-container'>
                <Col>
                    <p className='destaque-titulo'>{props.titulo}</p>
                    <p className='destaque-sub-titulo'>{props.subTitulo}</p>
                </Col >
            </Row>
            <Row className='destaque-container'>
                <Col >
                    <img style={{ height: '300px' }} src={props.imagem} alt={props.altImagem}></img>
                </Col>
            </Row>
        </div>
    );
}

export default Destaque;