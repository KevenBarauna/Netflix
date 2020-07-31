import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

import Page404 from './../view/Page404';
import Home from './../view/Home';

const MainRoute = () => (
    < BrowserRouter >
        <Switch>
            {console.log(window.location.href)}
            <Route path='/home' component={Home} />
            <Route path='/' component={Page404} exact />
            <Route component={Page404} />
        </Switch>
    </BrowserRouter >
);

export default MainRoute;