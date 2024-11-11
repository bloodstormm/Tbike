'use client'

import { useParams } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import bikesData from '../../../data/bikes.json';
import profile from "../../../../public/images/profile.webp";

const ProductDetail = () => {
  const params = useParams();
  const id = typeof params.id === 'string' ? parseInt(params.id) : null;
  const bike = id !== null ? bikesData[id] : null;

  if (!bike) {
    return <div>Bicicleta não encontrada</div>;
  }

  const ArrowLeft01Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000"} fill={"none"} {...props}>
      <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="p-4 text-black font-sans container mx-auto">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <span>
            <ArrowLeft01Icon />
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Image src={profile} alt="tbike" width={50} height={50} className="rounded-full" />
        </div>
      </nav>

      <Image src={bike.imagem} alt={bike.nome} width={400} height={400} className="mx-auto w-full mt-12 md:w-1/2 lg:w-1/3" />

      <div className="flex flex-col justify-between mt-8 w-full items-center">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{bike.nome}</h1>
          <p className="font-bold text-3xl text-[#346A90]">R$ {bike.valorHora}/h</p>
          <p className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>

        <div className="flex flex-row md:w-2/3 gap-6 w-full">
          <div className="flex grow md:grow-0 flex-col border-r-2 border-gray-500 md:border-none pr-2 mb-4 md:mb-0">
            <h1 className="text-xl font-bold">{bike.distanciaMaxima}</h1>
            <p className="text-sm text-gray-500">Distância <br /> máxima</p>
          </div>
          <div className="flex grow md:grow-0 flex-col border-r-2 border-gray-500 md:border-none pr-2 pl-4 mb-4 md:mb-0">
            <h1 className="text-xl font-bold">{bike.velocidadeMaxima}</h1>
            <p className="text-sm text-gray-500">Velocidade <br /> máxima</p>
          </div>
          <div className="flex grow md:grow-0 flex-col pr-2 pl-4">
            <h1 className="text-xl font-bold">{bike.pesoMaximo}</h1>
            <p className="text-sm text-gray-500">Peso <br /> máximo</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/payment">
          <button className="bg-[#346A90] w-full h-16 text-white px-4 py-2 rounded-full">
            Alugar bicicleta
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
