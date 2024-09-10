"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";



export function NavBar() {
  const router = useRouter();

  return (
    <div
      
      className="w-full bg-[#0C0807] px-6 md:px-9 py-6 md:py-8 text-white z-10 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-start w-full md:w-[70%] items-center md:items-center">
        {/* Logo */}
        <Image
          src="/group5.svg"
          alt="logo"
          width={150}
          height={30}
          className="mb-4 md:mb-0"
        />

        {/* Explore Button */}
        <button className="flex text-white border px-3 py-1.5 border-white rounded-lg justify-between items-center gap-1 hover:bg-white hover:text-black transition md:ml-8 md:mr-4">
          <div className="text-sm md:text-lg font-semibold">EXPLORE</div>
          <Image src="/down.svg" alt="down" width={17} height={17} />
        </button>

        {/* Search Bar - Hidden on smaller screens */}
        <div className="hidden md:flex items-center border border-white rounded-full overflow-hidden max-w-3xl w-full md:w-[60%] mx-4 h-12">
          <input
            type="text"
            className="w-full font-bold border-0 focus:outline-none bg-transparent text-white px-6 py-3 text-lg placeholder-gray-400"
            placeholder="What do you want to learn?"
          />
          <button>
            <Image
              className="w-full h-full p-1 mr-2"
              src="/searchlogo.svg"
              alt="Search"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center w-full md:w-[30%] justify-between mt-4 md:mt-0">
        {/* Categories */}
        <div className="flex gap-4 md:gap-8 text-lg md:text-xl">
          <button className="hover:text-gray-400 transition">TECH</button>
          <button className="hover:text-gray-400 transition">DESIGN</button>
        </div>

        {/* Login and Join Buttons */}
        <div className="flex gap-4 text-xl">
          <button
            onClick={() => router.push("/landing")}
            className="hover:text-gray-400 transition"
          >
            LOGIN
          </button>
          <button
            onClick={() => router.push("/landing")}
            className="text-[#FFE4B0] border px-3 h-12 border-[#FFE4B0] rounded-lg hover:bg-[#FFE4B0] hover:text-black transition"
          >
            JOIN FOR FREE
          </button>
        </div>
      </div>
    </div>
  );
}


export function NavBar2() {
  return (
    <div className="w-full bg-[#0C0807] md:px-9 py-6 md:py-8 text-white z-10 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-start w-full md:w-[70%] items-center md:items-center">
        {/* Logo */}
        <Image
          src="/group5.svg"
          alt="logo"
          width={150}
          height={30}
          className="mb-4 md:mb-0"
        />

        {/* Learn With Friend Button */}
        <button className="flex text-white border px-3 py-1.5 border-white rounded-lg justify-between items-center gap-1 hover:bg-white hover:text-black transition md:ml-8 md:mr-4">
          <div className="text-sm md:text-lg font-semibold">Learn With Friend</div>
          <Image src="/down.svg" alt="down" width={17} height={17} />
        </button>

        {/* Search Bar - Hide on mobile */}
        <div className="hidden md:flex items-center border border-white rounded-full overflow-hidden max-w-3xl w-full md:w-[60%] mx-4 h-12">
          <input
            type="text"
            className="w-full font-bold border-0 focus:outline-none bg-transparent text-white px-6 py-3 text-lg placeholder-gray-400"
            placeholder="What do you want to learn?"
          />
          <button>
            <Image
              className="w-full h-full p-1 mr-2"
              src="/searchlogo.svg"
              alt="Search"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center w-full md:w-[30%] justify-between mt-4 md:mt-0">
        {/* Categories */}
        <div className="flex gap-4 md:gap-8 text-lg md:text-xl">
          <button className="hover:text-gray-400 transition">TECH</button>
          <button className="hover:text-gray-400 transition">DESIGN</button>
        </div>

        {/* Cart and Profile */}
        <div className="flex gap-4 text-xl">
          <button className="hover:text-gray-400 transition">
            <Image src="/basket.svg" width={35} height={30} alt="cart" />
          </button>
          <button className="text-black bg-[#FFE4B0] border px-3 h-12 border-[#FFE4B0] rounded-full transition">
            {"M"}
          </button>
        </div>
      </div>
    </div>
  );
}
