import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import Users from "../components/Users/Users";
import UserDetailsPage from "../pages/UserDetailsPage";
import E2ETest from "../pages/E2ETest";
import UserForTest from "../components/Users/UserForTest";

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/teste2e" element={<E2ETest />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/users" element={<Users />} />
         <Route path="/users-test" element={<UserForTest />} />
         <Route path="/users/:id" element={<UserDetailsPage />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   );
};

export default AppRouter;
