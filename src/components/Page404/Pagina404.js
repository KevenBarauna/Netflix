import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Pagina404.css'

import imagemModelo01 from './../../assets/img/404-modelo-01.png';
import imagemModelo02 from './../../assets/img/404-modelo-02.png';
import imagemModelo03 from './../../assets/img/404-modelo-03.png';
import imagemModelo04 from './../../assets/img/404-modelo-04.png';
import imagemModelo05 from './../../assets/img/404-modelo-05.png';


const Pagina404 = (props) => {

    const link = window.location.href;

    function sortearImagem() {
        switch (Math.floor(Math.random() * 5)) {
            case 1: return imagemModelo01;
            case 2: return imagemModelo02;
            case 3: return imagemModelo03;
            case 4: return imagemModelo04;
            case 5: return imagemModelo05;
            default: return imagemModelo01;
        }
    }
    sortearImagem();

    return (
        <>
            <div className='pagina-404-container'>
                <Col className='pagina-404-col' style={{ marginLeft: '35%', width: '600px' }}>
                    <img style={{ height: '450px' }} src={sortearImagem()} alt={'Imagem 404 imagemModelo01'}></img>

                </Col>
                <Col className='pagina-404-col' style={{ width: '900px' }}>
                    <p className='pagina-404-titulo'>Awww.. não.</p>
                    <p className='pagina-404-subtitulo'>Isso é um Erro 404!</p>
                    <p className='pagina-404-link'>{link}</p>
                    <p className='pagina-404-aviso'>Esse link não existe ou foi apagado, tente novamente ou</p>
                    <p className='pagina-404-link'> <Link to="/Home">Volte para a Home</Link></p>
                </Col>
            </div>
        </>
    );
}

export default Pagina404;