import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/principal" element={<Principal />} />
    </Routes>
  </Router>
);

export default AppRoutes;
