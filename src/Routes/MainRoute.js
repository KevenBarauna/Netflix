import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

import Home from './../view/Home';

const MainRoute = () => (
    // {window.location.href}
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/home' component={Home} />
        </Switch>
    </BrowserRouter>
);

export default MainRoute;