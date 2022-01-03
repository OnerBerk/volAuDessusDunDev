import React from 'react';
import { BrowserRouter} from "react-router-dom";
import Router from "./route/routeur";

function App() {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    );
}

export default App;
