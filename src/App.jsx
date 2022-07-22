import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer';


const App = () => {
    return(
        <>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
        </>
    )
};

export default App;