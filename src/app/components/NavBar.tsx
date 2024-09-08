import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full bg-[#0C0807] px-9 py-16 text-white z-10 flex flex-row justify-between">
      <div className="flex flex-row gap-8 justify-between w-full">
        <div className="flex items-center justify-start w-[70%] gap-6">
          <Image
            className=""
            src="/group5.svg"
            alt="logo"
            width={150}
            height={30}
          />
          <button className="flex w-36 text-white border px-3 py-1.5 border-white rounded-lg justify-between items-center gap-1 hover:bg-white hover:text-black transition ml-8 mr-4">
            <div className="text-lg font-semibold">EXPLORE</div>
            <Image src="/down.svg" alt="down" width={17} height={17} />
          </button>

          <div className="flex items-center border border-white rounded-full overflow-hidden max-w-3xl w-[60%] mx-4 h-12 justify-self-start">
            <input
              type="text"
              className="w-full font-bold border-0 focus:outline-none bg-transparent text-white px-6 py-3 text-lg placeholder-gray-400"
              placeholder="What do you want to learn?"
            />
            <button>
              <Image
                className="w-full h-full p-1 mr-2 "
                src="/searchlogo.svg"
                alt="Search"
                width={50}
                height={50}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center w-[30%] justify-between">
            <div></div>
          <div className="flex gap-8 text-xl">
            <button className="hover:text-gray-400 transition">TECH</button>
            <button className="hover:text-gray-400 transition">DESIGN</button>
          </div>

          <div className="flex gap-4 text-xl">
            <button className="hover:text-gray-400 transition">LOGIN</button>
            <button className="text-[#FFE4B0] border px-3 h-12 border-[#FFE4B0] rounded-lg hover:bg-[#FFE4B0] hover:text-black transition">
              JOIN FOR FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
