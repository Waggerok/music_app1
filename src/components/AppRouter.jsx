import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Tracks from '../pages/Tracks';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='about' element={<About/>}></Route>
            <Route path='tracks'element={<Tracks/>}></Route>
            <Route path='*' element={<About/>}></Route>
        </Routes>
    )
};

export default AppRouter