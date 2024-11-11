"use client";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../public/images/profile.webp";
import Success from "../../../public/bags.svg";
import { useEffect } from "react";
import party from "party-js";

const Sucess = () => {
  const ArrowLeft01Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const Home05Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M12 17H12.009"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M22 10.5L17.6569 6.33548C14.9902 3.77849 13.6569 2.5 12 2.5C10.3431 2.5 9.00981 3.77849 6.34315 6.33548L2 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      party.confetti(document.body, {
        count: party.variation.range(50, 70),
        spread: 90,
        speed: party.variation.range(400, 600),
        size: party.variation.range(0.8, 1),
        shapes: ["square", "circle"],
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-black p-4">
      <nav className="flex justify-between items-center ">
        <Link href="/login">
          <span>
            <ArrowLeft01Icon />
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src={profile}
            alt="tbike"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <Image src={Success} alt="success"  width={400} height={400} className="mx-auto w-full mt-12 md:w-1/2 lg:w-1/3"  />
      </div>
      <h1 className="text-3xl text-center font-sans mt-12">
        Pagamento Concluído
      </h1>
      <p className="text-center mt-4">
        Parabéns! Você acabou de alugar sua bike. Encontre pontos de devolução
        vendo clicando no botão abaixo
      </p>
      <Link href="/" className="text-center mx-auto mt-8 bg-white text-black px-4 py-2 rounded-md flex flex-col justify-center items-center w-32 h-32 gap-2">
        <Home05Icon />
        Voltar ao início
      </Link>
    </div>
  );
};

export default Sucess;
