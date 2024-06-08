import React from 'react'
import Navbar from './layouts/Navbar';
import { Outlet } from 'react-router-dom';
import Home from './pages/home/Home';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home/>
        </div>
    )
}

export default App;
