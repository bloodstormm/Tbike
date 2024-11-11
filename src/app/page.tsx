'use client'

import Image from "next/image";
import profile from "../../public/images/profile.webp";
import Link from "next/link";
import { useTheme } from 'next-themes';
import bikesData from "../data/bikes.json";
import { useEffect, useState } from "react";

// Definir a interface para os dados das bicicletas
interface Bike {
  nome: string;
  marca: string;
  valorHora: number;
  imagem: string;
}

const Home = () => {    
  const { theme, setTheme } = useTheme();
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    // Carregar os dados das bicicletas do arquivo JSON
    setBikes(bikesData);
  }, []);

  useEffect(() => {
    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      window.location.href = '/login'; // Redireciona para a página de login se não estiver logado
    }
  }, []);

  const Sun03Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000"} fill={"none"} {...props}>
      <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
  const HamburgerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000"} fill={"none"} {...props}>
      <path d="M4 5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const Search01Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000"} fill={"none"} {...props}>
      <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );


  return (
    <div className="font-sans p-4 bg-background text-black">
      <nav className="flex justify-between items-center">
        <Link href="/login">
          <span><HamburgerIcon /></span>
        </Link>
        <div className="flex items-center gap-2">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Sun03Icon />
          </button>
          <Image src={profile} alt="tbike" width={50} height={50} className="rounded-full" />
        </div>
      </nav>
      <main className="flex flex-col gap-4 mt-11">
        <h1 className="text-4xl">Alugar bikes</h1>
        <div className="flex items-center gap-2 p-2 bg-white rounded-xl h-14 outline-none text-black">
          <span><Search01Icon /></span>   
          <input type="text" placeholder="Pesquise uma bike" className="outline-none w-full" />
        </div>

        <h2 className="text-2xl font-bold mt-4">Bicicletas Disponíveis</h2>
        <div className="flex flex-wrap gap-16 mt-10 w-full">
          {bikes.map((bike, index) => (
            <Link href={`/product-detail/${index}`} key={index} className="flex flex-col items-center bg-white p-4 relative text-black rounded-lg justify-center w-full">
              <Image src={bike.imagem} alt={bike.nome} width={120} height={120} className="mb-4 mx-auto absolute -top-10" />
              <h3 className="text-xl font-bold mt-10">{bike.nome}</h3>
              <p>Marca: {bike.marca}</p>
              <p>Valor/Hora: R$ {bike.valorHora}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
