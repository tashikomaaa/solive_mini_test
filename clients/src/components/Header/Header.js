// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

// COMPONENT

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light alert-dark">
        <a className="navbar-brand" href="/">
            <img src={logo} style={{ height: '19rem', marginBottom: '-9rem', marginTop: '-3rem', marginLeft: '-6rem'}} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/' activeClassName='menu selected' exact={true}>HOME</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/teams' activeClassName='menu selected'>TEAMS</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/players' activeClassName='menu selected'>PLAYERS</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);