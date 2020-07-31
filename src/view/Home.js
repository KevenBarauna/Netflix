import * as React from 'react';
import Topo from './../components/Topo/Topo';
import Footer from './../components/Footer/Footer';
import Destaque from './../components/Destaque/Destaque';

import imagemTv from './../assets/img/tv.png';
import imagemCelular from './../assets/img/mobile.jpg';
import imagemCelularTv from './../assets/img/tvMobile.png';

class Home extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <>
                <Topo />

                <Destaque
                    titulo={'Aproveite na TV.'}
                    subTitulo={'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos.'}
                    imagem={imagemTv}
                    altImagem={'imagem tv'}
                    padrao={true}
                />
                <Destaque
                    titulo={'Baixe séries para assistir offline.'}
                    subTitulo={'Salve seus títulos favoritos e sempre tenha algo para assistir.'}
                    imagem={imagemCelular}
                    altImagem={'imagem mobile'}
                    padrao={false}
                />
                <Destaque
                    titulo={'Assista quando quiser.'}
                    subTitulo={'Assista no celular, tablet, smart TV ou notebook sem pagar a mais por isso.'}
                    imagem={imagemCelularTv}
                    altImagem={'imagem mobile e tv'}
                    padrao={true}
                />
                <Footer />
            </>
        );
    }
}

export default Home;
