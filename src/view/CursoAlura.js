import * as React from 'react';
import Topo from './../components/Topo/Topo';
import Footer from './../components/Footer/Footer';
import ComponentCursoAlura from './../components/Cursos/Cursos';


class CursoAlura extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <>
                <Topo />

                <ComponentCursoAlura />

                <Footer />
            </>
        );
    }
}

export default CursoAlura;
