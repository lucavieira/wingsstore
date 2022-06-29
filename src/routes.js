import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import Quadros from "./pages/Quadros";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quadros" element={<Quadros />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes