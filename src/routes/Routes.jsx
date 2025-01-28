import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Antares from '../pages/Antares';

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/antares" element={<Antares/>} />
        </ReactRoutes>
    );
}

export default Routes;
