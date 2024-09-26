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
  const navigate = useNavigate();

  const handleCadastro = async () => {
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
      alert('Erro ao cadastrar usuário.');
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
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <input
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
};

export default Cadastro;
