import Image from "next/image";
import Link from "next/link";
import Network from "../../public/image1.jpg";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen  items-center justify-between w-full text-white overflow-hidden">
      <div className="w-[50%] max-h-screen bg-white">
        <Image className="object-center" src={Network} alt="network" />
      </div>
      <div className="w-[50%] h-screen bg-[url('/cpurple-bg.png')] flex flex-col justify-center items-center brightness-75  text-3xl text-center leading-[2.9rem]  font-semibold  tracking-[.2rem] ">
          <span className="text-white ">Welcome to</span>
          <span className="mt-5 font-light tracking-[.5rem]">
            All Saints&apos; College, Ibadan <br />
            Old Students Association
          </span>
        <Link
          href="/register"
          className=" hover:border border-white rounded-lg  bg-purple-800 px-20 py-5 text-3xl mt-10"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
