import React from "react";
import {Routes,Route} from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import MyWork from './components/MyWork';
import Contact from "./components/Contact";

const AppRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="mywork" element={<MyWork/>} />
            <Route path="contact" element={<Contact/>} />
        </Routes>
        </>
    )

}

export default AppRoutes;