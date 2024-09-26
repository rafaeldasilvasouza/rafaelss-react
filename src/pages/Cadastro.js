import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagens de erro
  const navigate = useNavigate();

  const handleCadastro = async () => {
    // Validação da senha
    if (senha.length < 6) {
      setErrorMessage('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    try {
      // Cria um usuário com Email e Senha no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Armazena os dados adicionais no Firestore, incluindo o UID do usuário
      await setDoc(doc(db, 'usuarios', user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        email: user.email,
        uid: user.uid,
      });

      alert('Usuário cadastrado com sucesso!');
      navigate('/principal');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setErrorMessage('Erro ao cadastrar usuário: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
        required
      />
      
      {/* Campo de data de nascimento */}
      <label>Data de Nascimento:</label>
      <input
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
        required
      />
      
      {/* Exibe a mensagem de erro caso exista */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
};

export default Cadastro;
