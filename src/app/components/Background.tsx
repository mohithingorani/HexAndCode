import NavBar from "./NavBar";

export function Background() {
return (
    <div
        className="relative flex flex-col items-start pl-32  justify-center w-full h-screen bg-cover bg-center "
        style={{ backgroundImage: 'url("/background2.png")' }}
    >
        {/* Content on top of the background */}
        <div className="absolute top-0 left-0 w-full z-10">
            <NavBar />
        </div>

        {/* Main content */}
        <div className="text-white text-6xl font-semibold z-10">
            <div>Learn to</div>
            <div className="flex gap-2">
                <div className="italic text-[#FFE4B0]">
                    {"<"}code{">"}
                </div>
                <div>today</div>
            </div>

            <div className="flex gap-2 items-end mt-10">
                <div className="text-6xl font-bold">1000+</div>{" "}
                {/* Updated to text-6xl */}
                <div className="text-2xl font-light flex flex-col items-end h-full justify-end">
                    <div className="h-fit">courses on cutting-edge Tech and Design tailored for you</div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
);
}
