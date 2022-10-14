import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import About from "./About";
import Contact from "./Contact";

import Service from "./Service";
import Header from "./Header";
import First from "./First";
const Main = () => {
    return (
        <>
        <BrowserRouter>
        <Header />
            <Routes> 
                <Route path="/" element={<First />}/>
                <Route path="/service" element={<Service />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>  
        </BrowserRouter> 
        </>
    )
}
export default Main;