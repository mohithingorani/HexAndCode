import { NavBar2 } from "../components/NavBar";

export default function Home() {
  return (
    <div style={{ height: "90vh" }}>
      <NavBar2 />
      <div className="grid grid-cols-6 h-full">
        <div className="col-span-1 h-full bg-[#0C0807] w-full">
            <div className="flex flex-col justify-center items-start text-2xl gap-8 text-[#FFE4B0] p-8">
                <button className="hover:underline">Home</button>
                <button className="hover:underline">Dashboard</button>
                <button className="hover:underline">My Courses</button>
                <button className="hover:underline">Assignments</button>
                <button className="hover:underline">Terminal</button>

            </div>




        </div>
        
        <div className="col-span-5 h-full  w-full">
          <div className="flex justify-end w-full pl-24 pt-8">
            <div className="bg-[#E0E0E0] rounded-l-full w-full ">
              <div className="flex px-8 py-8 w-full gap-16">
                <button className="text-black text-8xl font-semibold  bg-[#FFE4B0] border p-16  border-[#FFE4B0] rounded-full transition">
                  {"M"}
                </button>
                <div className="flex flex-col justify-center items-start">
                  <div className="text-6xl mb-2">Hello {"Mohit"}!</div>
                  <div className="mb-8 text-2xl">Godspeed to you!</div>
                  <div className="flex gap-4 text-blue-700 underline">
                    <button>YOUR LEARNING PERSONALITY</button>
                    <button>YOUR DASHBOARD</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
