import Link from "next/link";
import Image from "next/image";
import profile from "../../../public/images/profile.webp";

const Payment = () => {
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
  const CreditCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#287515"}
      fill={"none"}
      {...props}
    >
      <path
        d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 16H11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 16L18 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
  const ArrowRight01Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000"} fill={"none"} {...props}>
      <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const Money03Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#287515"} fill={"none"} {...props}>
      <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M19 11.1415C18.6749 11.0944 18.341 11.0586 18 11.0347M6 12.9653C5.65897 12.9415 5.32511 12.9056 5 12.8585" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19.5C10.6675 20.1224 8.91707 20.5 7 20.5C5.93408 20.5 4.91969 20.3833 4 20.1726C2.49957 19.8289 2 18.9264 2 17.386V6.61397C2 5.62914 3.04003 4.95273 4 5.1726C4.91969 5.38325 5.93408 5.5 7 5.5C8.91707 5.5 10.6675 5.12236 12 4.5C13.3325 3.87764 15.0829 3.5 17 3.5C18.0659 3.5 19.0803 3.61675 20 3.8274C21.5817 4.18968 22 5.12036 22 6.61397V17.386C22 18.3709 20.96 19.0473 20 18.8274C19.0803 18.6167 18.0659 18.5 17 18.5C15.0829 18.5 13.3325 18.8776 12 19.5Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
  
  return (
    <div className="p-4 text-black font-sans">
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
      <h1 className="text-2xl font-bold mt-7 text-black">Forma de pagamento</h1>
      <Link href="/sucess" className="flex flex-col gap-4 mt-4">
        <div className="flex bg-white py-8 px-4 justify-between rounded-2xl">
        <div className="flex items-center gap-2">
            <Money03Icon />
            <p className="text-xl text-black font-medium">PIX</p>
        </div>
          <ArrowRight01Icon />
        </div>
      </Link>
      <Link href="/sucess" className="flex flex-col gap-4 mt-4">
        <div className="flex bg-white py-8 px-4 justify-between rounded-2xl">
        <div className="flex items-center gap-2">
            <CreditCardIcon />
            <p className="text-xl text-black font-medium">Cartão de débito</p>
        </div>
          <ArrowRight01Icon />
        </div>
      </Link>
    </div>
  );
};

export default Payment;
