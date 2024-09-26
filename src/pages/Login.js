import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Tenta autenticar o usuário com o Firebase Authentication
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/principal');
    } catch (error) {
      setError('Usuário não encontrado ou senha incorreta.');
    }
  };

  const handleGoToPrincipal = () => {
    navigate('/principal'); // Redireciona diretamente para a página principal
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleGoToPrincipal}>Acessar página principal</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
