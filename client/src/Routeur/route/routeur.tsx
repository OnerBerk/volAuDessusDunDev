import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";
import PublicRoute from "./public-route";

import Login from "../../pages/login/login";
import Dashboard from "../../pages/dashboard";
import Contact from "../../pages/contact";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/contact" element={<ProtectedRoute component={Contact} />} />
        </Routes>
    );
};

export default Router;