"use client";
import Image from "next/image";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";

export default function LandingLayout() {
  return (
    <>
      <Background />
      <div className="min-h-screen">
        {/* Section title */}
        <div className="px-4 md:px-12 pt-12">
          <div className="text-black font-semibold text-2xl md:text-4xl">
            Learn AI and Data Science
          </div>
        </div>

        {/* Card container */}
        <div className="mt-4 flex items-center justify-center gap-6 md:gap-12 bg-[#EEEEEE] py-8 overflow-x-auto px-4">
          {/* Card 1 */}
          <Image
            className="border rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-500"
            src="/cardblack.png"
            width={300}
            height={300}
            alt="Card 1"
          />

          {/* Card 2 */}
          <Image
            className="border rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-500"
            src="/cardwhite.png"
            alt="Card 2"
            width={300}
            height={300}
          />

          {/* Card 3 */}
          <Image
            className="border rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-500"
            src="/cardblack.png"
            alt="Card 3"
            width={300}
            height={300}
          />

          {/* Card 4 */}
          <Image
            className="border rounded-lg hover:shadow-md hover:scale-105 transition-transform duration-500"
            src="/cardwhite.png"
            alt="Card 4"
            width={300}
            height={300}
          />
        </div>

        {/* Topics Section */}
        <div className="px-4 md:px-12 pt-12">
          <div className="text-black font-semibold text-2xl md:text-4xl">
            Topics
          </div>
        </div>
        
        <div className="px-4 md:px-12 w-full mt-8">
          <div className="text-xl md:text-2xl lg:text-4xl flex flex-wrap justify-between font-bold md:pr-12 gap-4 md:gap-0">
            <button className="hover:text-blue-500">Machine Learning</button>
            <button className="hover:text-blue-500">Web Development</button>
            <button className="hover:text-blue-500">DevOps</button>
            <button className="hover:text-blue-500">UI/UX Design</button>
            <button className="font-normal hover:text-blue-500">View More...</button>
          </div>
        </div>

        {/* Landing Cards Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start mt-12 gap-12 lg:gap-24 pb-12 px-4 md:px-12">
          <Image
            src="/landingcard1.svg"
            alt="card1"
            className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-500"
            height={600}
            width={400}
          />
          <Image
            src="/landingcard2.svg"
            alt="card2"
            className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-500"
            height={600}
            width={450}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
