import Image from "next/image";
import Link from "next/link";
import Network from "../../public/image1.jpg";
import Logo from "../../public/logo.jpg";


export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-full md:min-h-screen  items-center justify-between w-full text-white md:overflow-hidden">
      <div className="hidden md:flex w-full md:w-[50%] max-h-screen bg-white">
        <Image className="object-center" src={Network} alt="network" />
      </div>
      <div className="w-full md:w-[50%] h-fullmd:h-screen bg-[url('/cpurple-bg.png')] flex flex-col justify-center items-center brightness-75  text-3xl text-center leading-[2.9rem]  font-semibold  tracking-[.2rem] ">
            <Image className="mb-5 w-20 h-20 rounded-md border border-gray-400" src={Logo} alt="logo" />
          <span className="text-white ">Welcome to</span>
          <span className="mt-5 font-light tracking-[.5rem]">
            All Saints&apos; College, Ibadan <br />
            Old Students Association
          </span>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJsLeW_fUeHH3R_s7PKruTTWOpfWObCGwQ6THUjED8p9hbyg/viewform?usp=sf_link"
          className=" hover:border border-white rounded-lg  bg-purple-800 px-20 py-5 text-3xl mt-10"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
