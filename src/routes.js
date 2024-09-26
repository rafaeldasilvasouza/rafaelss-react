import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redireciona para login */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;


