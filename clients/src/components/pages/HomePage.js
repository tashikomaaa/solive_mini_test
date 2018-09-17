// IMPORT PACKAGE REFERENCES

import React from 'react';

// IMPORT IMAGES

//import react from '../../images/react-small.png';
/* import logo from '../../images/logo.png';
import reactrouter from '../../images/react-router-small.png';
import redux from '../../images/redux-small.png';
import bootstrap from '../../images/bootstrap4-small.png';
import sass from '../../images/sass-small.png';
import webpack from '../../images/webpack-small.png'; */


// COMPONENT

const HomePage = () => (
    <main>
        <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
            <h1 className="display-6 text-center">Solive Mini</h1>
            <p className="lead text-center"></p>
            <hr className="my-4" />
            <div className="text-center">
                <p>
                    Welcome to SOLIVE MINI !<br/>

                    To see the api documentation go to <a href="http://localhost:4000" rel="noopener noreferrer" target="_blank">http://localhost:4000</a>
                </p>
            </div>
        </div>
    </main>
);

export { HomePage };