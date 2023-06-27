import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from "../pages/NotFoundPage";
import Users from '../Users/Users';
import UserDetailsPage from "../pages/UserDetailsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/users" element={<Users/>} />
            <Route path="/users/:id" element={<UserDetailsPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
         </Routes>
    );
};

export default AppRouter;