import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import PublicRoute from "./public-route";

import Login from "../../pages/login";
import Dashboard from "../../pages/dashboard";
import Contact from "../../pages/contact";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute component={Login} /> }/>
            <Route path="/home" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/contact" element={<ProtectedRoute component={Contact} />} />
        </Routes>
    );
};

export default Router;