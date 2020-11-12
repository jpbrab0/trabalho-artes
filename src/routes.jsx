import React from 'react';
import Home from './pages/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ArteModerna from './Posts/ArteModerna';
import Topics from './pages/Topics/Topics';
import Grafite from './Posts/Grafite';
import Fotografia from './Posts/Fotografia';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/posts" component={Topics}/>
                <Route path="/arte-moderna" component={ArteModerna}/>
                <Route path="/grafite" component={Grafite}/>
                <Route path="/fotografia" component={Fotografia}/>
            </Switch>
        </ BrowserRouter>
    )
};