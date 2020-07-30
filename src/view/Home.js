import * as React from 'react';
import Topo from './../components/Topo/Topo';
import Destaque from './../components/Destaque/Destaque';

import imagemTv from './../assets/img/tv.png';

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
                />
            </>
        );
    }
}

const mapStateToPros = (state) => ({

});

export default Home;
