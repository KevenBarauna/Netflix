import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import './Cursos.css';

import imagemJogo01 from './../../assets/img/jogo_the_whither_3 (1).jpg';
import imagemJogo02 from './../../assets/img/jogo_the_whither_3 (1).png';
import imagemJogo03 from './../../assets/img/jogo_the_whither_3 (2).jpg';

const Cursos = (props) => {

    return (
        <Carousel>
            <Carousel.Item>
                <img className='cursos-iamgem' src={imagemJogo01} alt={'imagem game'}></img>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='cursos-iamgem' src={imagemJogo02} alt={'imagem game'}></img>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='cursos-iamgem' src={imagemJogo03} alt={'imagem game'}></img>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Cursos;