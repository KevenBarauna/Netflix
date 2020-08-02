import * as React from 'react';
import Topo from './../components/Topo/Topo';
import Footer from './../components/Footer/Footer';
import ComponentDica from './../components/Dicas/Dicas';


class Dica extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <>
                <Topo />

                <ComponentDica />

                <Footer />
            </>
        );
    }
}

export default Dica;
