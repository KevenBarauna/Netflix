import * as React from 'react';
import Topo from './../components/Topo/Topo';
import Footer from './../components/Footer/Footer';
import ComponentLogin from './../components/Login/Login';

class Longin extends React.Component {
    componentDidMount() { }

    render() {
        return (
            <>
                <Topo />
                <ComponentLogin />
                <Footer />
            </>
        );
    }
}

export default Longin;
