import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Destaque.css';

const Destaque = (props) => {
    const {
        titulo, //TITULO DO TEXTO  [STRING]
        subTitulo, //SUBTITULO DO TEXTO [STRING]
        imagem, //IMAGEM [IMAGEM]
        altImagem, //ALT QUE APARECE NA IMAGEM [STRING]
        padrao, //TRUE = IMAGEM ESQUERDA | FALSE = IMAGEM DIREITA [BOOL]
    } = props;


    return (
        <div className='destaque-background'>
            <Row className='destaque-container'>
                <Col>
                    {padrao === true ? (
                        <>
                            <p className='destaque-titulo' style={{ marginLeft: '50%' }}>{titulo}</p>
                            <p className='destaque-sub-titulo' style={{ marginLeft: '50%' }}>{subTitulo}</p>
                        </>
                    ) : (
                            <img style={{ height: '300px', marginLeft: '41%' }} src={imagem} alt={altImagem}></img>
                        )}
                </Col >
            </Row>
            <Row className='destaque-container'>
                <Col >
                    {padrao === true ? (
                        <img style={{ height: '300px' }} src={imagem} alt={altImagem}></img>
                    ) : (
                            <>
                                <p className='destaque-titulo' style={{ marginRight: '50%' }}>{titulo}</p>
                                <p className='destaque-sub-titulo' style={{ marginRight: '50%' }}>{subTitulo}</p>
                            </>
                        )}
                </Col>
            </Row>
        </div>
    );
}

export default Destaque;