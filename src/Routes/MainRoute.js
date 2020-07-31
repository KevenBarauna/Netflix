import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Page404 from './../view/Page404';
import Home from './../view/Home';

const MainRoute = () => (
    < BrowserRouter >
        <Switch>
            {console.log(window.location.href)}
            <Route path='/home' component={Home} />
            <Route path='/' component={Home} exact />
            <Route path='/404' component={Page404} />
            <Redirect to='/404' />
        </Switch>
    </BrowserRouter >
);

export default MainRoute;