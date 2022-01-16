import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "./route/routeur";
import store from "../redux/store/store";
import {Provider} from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
