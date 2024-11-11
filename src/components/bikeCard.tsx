import Image from "next/image";
import bike from "../../public/images/bike.png";

const BikeCard = () => {
    return (
          <div className="bg-white p-4 overflow-visible rounded-3xl relative shrink-0 flex flex-col items-center">
            <Image src={bike} alt="Hacker Sport 29" width={120} height={120} className="flex absolute -top-10" />
            <div className="flex gap-2">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-black mt-16 w-3/4">Hacker Sport 29</h3>
                <p className="font-medium text-gray-500">Oggi</p>
                <p className="font-bold text-[#346A90]">R$ 7,00/h</p>
              </div>
              <div className="flex flex-col items-end justify-end gap-4">
                <span className="rounded-full bg-[#000] text-white p-2"></span>
                <span className="rounded-full bg-[#9F9F9F] text-white p-2"></span>
                <span className="rounded-full bg-[#FBB889] text-white p-2"></span>
              </div>
            </div>
          </div>
    )
}

export default BikeCard;