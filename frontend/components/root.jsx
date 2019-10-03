import React from "react";
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import DiceboxApp from "./DiceboxApp";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter> 
            <DiceboxApp/>
        </HashRouter>
    </Provider>
);

export default Root;