import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./protected-route";

import AuthRegistration from "../../pages/auth-registartion/auth-registration";
import Dashboard from "../../pages/dashboard";
import Contact from "../../pages/contact";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<AuthRegistration/>}/>
            <Route path="/" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/contact" element={<ProtectedRoute component={Contact} />} />
        </Routes>
    );
};

export default Router;