'use client'

import { useState } from 'react';
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica as credenciais
    if (email === 'unitau@unitau.com' && password === 'unitau123') {
      // Armazena o estado de login no Local Storage
      localStorage.setItem('isLoggedIn', 'true');
      // Redireciona para a página inicial
      window.location.href = '/';
    } else {
      setError('Email ou senha incorretos');
    }
  };

  return (
    <div className="font-sans">
      <Image src="/images/home.jpg" alt="home" layout='fill' className="w-full h-screen absolute top-0 left-0 object-cover" />
      <div className="relative z-10 flex flex-col pt-24 p-4 h-screen">
        <h1 className="text-4xl font-bold text-white">Log in</h1>
        <form onSubmit={handleLogin} className="flex mt-4 rounded-2xl flex-col gap-4 px-4 py-6 pb-24 bg-gray-900/50 backdrop-blur-lg">
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded-xl h-14 bg-white/80 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded-xl h-14 bg-white/80 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-[#445867] h-14 text-white p-2 block rounded-xl w-full">Log in</button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <p className="text-white text-center">Ou</p>
          <p className="text-white">Não tem uma conta? <a href="#" className="text-[#8bb5d2]">Cadastre-se</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
