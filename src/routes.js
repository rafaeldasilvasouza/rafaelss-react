import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Cadastro from './pages/Cadastro'; 
import Login from './pages/Login';
import Principal from './pages/Principal';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redireciona para a página de login se a rota for "/" */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rota para a página de Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rota para a página de Login */}
        <Route path="/login" element={<Login />} />

        {/* Rota para a página Principal */}
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
