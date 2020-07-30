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

    function getClassName(nomeClasse) {
        if (nomeClasse === 'destaque-titulo') {
            if (props.padrao === false) { return 'destaque-titulo-false' } else { return 'destaque-titulo-true'; }
        }
        else if (nomeClasse === 'destaque-sub-titulo') {
            if (props.padrao === false) { return 'destaque-sub-titulo-false' } else { return 'destaque-sub-titulo-true'; }
        }
        return 'destaque-titulo-true';
    }

    return (
        <div className='destaque-background'>
            <Row className='destaque-container'>
                <Col>
                    {padrao === true ? (
                        <>
                            <p className={getClassName('destaque-titulo')}>{props.titulo}</p>
                            <p className={getClassName('destaque-sub-titulo')}>{props.subTitulo}</p>
                        </>
                    ) : (
                            <img style={{ height: '300px', marginLeft: '41%' }} src={props.imagem} alt={props.altImagem}></img>
                        )}
                </Col >
            </Row>
            <Row className='destaque-container'>
                <Col >
                    {padrao === true ? (
                        <img style={{ height: '300px' }} src={props.imagem} alt={props.altImagem}></img>
                    ) : (
                            <>
                                <p className={getClassName('destaque-titulo')}>{props.titulo}</p>
                                <p className={getClassName('destaque-sub-titulo')}>{props.subTitulo}</p>
                            </>
                        )}
                </Col>
            </Row>
        </div>
    );
}

export default Destaque;