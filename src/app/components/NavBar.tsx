import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full bg-[#0C0807] px-9 py-16 text-white z-10">
      <div className="flex items-center justify-between w-full">
        <Image src="/group5.svg" alt="logo" width={100} height={30} />

        <button className="flex text-white border px-3 py-1.5 border-white rounded-lg items-center gap-1 hover:bg-white hover:text-black transition">
          <div className="text-lg font-semibold">Explore</div>
          <Image src="/down.svg" alt="down" width={17} height={17} />
        </button>

        <div className="flex items-center border border-white rounded-full overflow-hidden max-w-3xl w-full mx-4">
          <input
            type="text"
            className="w-full font-bold border-0 focus:outline-none bg-transparent text-white px-6 py-1.5 text-lg placeholder-gray-400"
            placeholder="What do you want to learn?"
          />
          <button className="px-4 py-2">
            <Image src="/search.svg" alt="Search" width={50} height={50} />
          </button>
        </div>

        <div className="flex gap-4 text-xl">
          <button className="hover:text-gray-400 transition">Tech</button>
          <button className="hover:text-gray-400 transition">Design</button>
        </div>

        <div className="flex gap-4 text-xl">
          <button className="hover:text-gray-400 transition">Login</button>
          <button className="text-[#FFE4B0] border px-3 py-1.5 border-[#FFE4B0] rounded-lg hover:bg-[#FFE4B0] hover:text-black transition">
            Join For Free
          </button>
        </div>
      </div>
    </div>
  );
}
