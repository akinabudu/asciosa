import Image from "next/image";
import Link from "next/link";
import Network from "../../public/image1.jpg";
import Logo from "../../public/logo.jpg";
import ScrollingTestimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-full md:min-h-screen  items-center justify-between w-full text-purple-800 ">
      <div className="bg-slate-950 flex flex-col justify-center items-center  w-full md:w-[50%] h-full md:h-screen order-2 md:order-1">
        {/* <Image className="object-center" src={Network} alt="network" /> */}
        <ScrollingTestimonials />
      </div>
      <div className="order-1 md:order-2 p-10 w-full md:w-[50%] h-full  md:h-screen bg-white flex flex-col justify-center items-center brightness-75  text-3xl text-center leading-[2.9rem]  font-semibold  tracking-[.2rem] ">
        <Image
          className="mb-5 w-20 h-20 rounded-md border border-gray-400"
          src={Logo}
          alt="logo"
        />
        <span className="text-purple-800 ">Welcome to</span>
        <span className="mt-5 font-light tracking-[.5rem]">
          All Saints&apos; College, Ibadan <br />
          Old Students Association
        </span>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJsLeW_fUeHH3R_s7PKruTTWOpfWObCGwQ6THUjED8p9hbyg/viewform?usp=sf_link"
          className="text-white hover:border border-white rounded-lg  bg-purple-800 px-20 py-5 text-3xl mt-10"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
