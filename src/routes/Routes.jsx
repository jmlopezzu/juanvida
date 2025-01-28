import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Antares from '../pages/Antares';

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={<Antares />} />
            <Route path="/antares" element={<Antares/>} />
        </ReactRoutes>
    );
}

export default Routes;
