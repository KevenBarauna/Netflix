import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import './Dicas.css';

import imagemJogo01 from './../../assets/img/WallpaperRdr2 (1).jpg';
import imagemJogo02 from './../../assets/img/WallpaperRdr2 (2).jpg';
import imagemJogo03 from './../../assets/img/WallpaperRdr2 (3).jpg';

const Cursos = (props) => {

    return (
        <Carousel>
            <Carousel.Item>
                <img className='dica-imagem' src={imagemJogo01} alt={'imagem game'}></img>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='dica-imagem' src={imagemJogo02} alt={'imagem game'}></img>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='dica-imagem' src={imagemJogo03} alt={'imagem game'}></img>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Cursos;