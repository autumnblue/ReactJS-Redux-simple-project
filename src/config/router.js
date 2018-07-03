import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';
import HomePage from '../containers/HomePage';
import Layouts from "./layouts";

const router = (
    <BrowserRouter>
        <Layouts>
            <Switch>
                <Route path="" component={HomePage} />
            </Switch>
        </Layouts>
    </BrowserRouter>
);

export default router;
