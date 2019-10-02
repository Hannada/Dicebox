import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import DiceApp from "./DiceboxApp";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter> 
            <DiceApp/>
        </HashRouter>
    </Provider>
);