// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import PlayersPage from '../pages/PlayersPage';
import TeamsPage from '../pages/TeamsPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/teams' component={TeamsPage} />
                <Route path='/players' component={PlayersPage} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);