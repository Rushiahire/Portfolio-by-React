import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import './App.css';
import AppRoutes from './AppRoutes';

const App = () => {
    return(
        <>
        <Navbar/>
        <AppRoutes/>
        </>
    )
};

export default App;