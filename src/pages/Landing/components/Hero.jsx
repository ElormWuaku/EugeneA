import { gros } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#F8D7B6] place-content-center">
        <div className="mx-auto w-fit flex flex-col items-start gap-y-4">
          <div className="text-5xl flex flex-col">
            <span className="font-bold">Welcome to Guadzefie</span>
          </div>
          <p>
            Your Home Of Healthy Organic Vegetables<br />
            Fresh From Farm To Your Table
          </p>
          <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg uppercase text-[#C2B931] text-sm">
            Shop
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={gros} alt="hero" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
