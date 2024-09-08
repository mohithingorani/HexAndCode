import Image from "next/image";
import { Background } from "../components/Background";

export default function LandingLayout() {
  return (
    <>
      <Background />
      <div className="h-screen">
        {/* Section title */}
        <div className="pl-12 pt-12">
          <div className="text-black font-semibold text-4xl">
            Learn AI and Data Science
          </div>
        </div>

        {/* Card container */}
        <div className="mt-4 flex items-center justify-center gap-12 bg-[#EEEEEE] py-8 overflow-x-auto ">
          {/* Card 1 */}
          <Image
            className="border rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-500"
            src="/cardblack.png"
            width={400}
            height={400}
            alt="Card 1"
          />

          {/* Card 2 */}
          <Image
            className="border rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-500"
            src="/cardwhite.png"
            alt="Card 2"
            width={400}
            height={400}
          />

          {/* Card 3 */}
          <Image
            className="border rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-500"
            src="/cardblack.png"
            alt="Card 3"
            width={400}
            height={400}
          />

          {/* Card 4 */}
          <Image
            className="border rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-500"
            src="/cardwhite.png"
            alt="Card 4"
            width={400}
            height={400}
          />
        </div>
        <div className="pl-12 pt-12">
          <div className="text-black  text-4xl">Topics</div>
        </div>
        <div className="px-12 w-full mt-8">
          <div className=" text-4xl flex justify-between font-bold pr-12  ">
            <button className=" hover:text-blue-500">Machine Learning</button>
            <button className=" hover:text-blue-500">Web Development</button>
            <button className=" hover:text-blue-500">DevOps</button>
            <button className=" hover:text-blue-500">UI/UX Design</button>
            <button className="font-normal hover:text-blue-500">
              View More...
            </button>
          </div>
        </div>
        <div className="flex justify-center items-start mt-12 gap-24 hover:shadow-md pb-12 w-full">
            <Image src={"/landingcard1.svg"} alt="card1" className="h-full hover:shadow-xl hover:scale-[1.02] transition-transform duration-500" height={700} width={445} />
            <Image src={"/landingcard2.svg"} alt="card1" className="h-full hover:shadow-xl hover:scale-[1.02] transition-transform duration-500" height={700} width={550} />
        </div>
      </div>
    </>
  );
}
