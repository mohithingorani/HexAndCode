"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-[#030303] select-none">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full">
        {/* Left Section: Image */}
        <div className=" md:flex relative w-full  lg:h-full items-center justify-center">
          <Image
            src="/group4.svg"
            alt="Home"
            fill
            objectFit="contain"
            draggable={false}
            className=" w-full h-auto px-6 lg:px-12" // Adjusted size for responsiveness
          />
        </div>

        {/* Right Section: Sign in Form */}
        <div className="h-full flex justify-center items-center px-4 lg:px-0 w-full">
          <div className=" h-fit w-fit flex flex-col justify-center items-center bg-[#121212] px-6 lg:px-24 py-8 lg:py-12 rounded-3xl">
            <div className="text-white text-3xl lg:text-4xl mb-4 lg:mb-6 font-bold">
              Sign in
            </div>
            <div className="text-white text-lg lg:text-xl mb-8 lg:mb-12 flex gap-1 font-semibold">
              New user?{" "}
              <div className="text-[#FFE4B0] cursor-pointer">
                Create an account
              </div>
            </div>

            <form className="w-full">
              <div className="text-white mb-2 w-full">Email address</div>
              <input
                type="email"
                className="border border-[#FFE4B0] px-3 py-2 lg:py-1.5 text-white bg-transparent rounded-md mb-4 w-full focus:outline-none"
                placeholder="Enter your email"
              />

              <div className="flex flex-col lg:flex-row justify-start items-center text-white font-semibold gap-4 mb-6">
                <button
                  type="submit"
                  className="bg-[#FFE4B0] text-black rounded-full px-4 lg:px-3 py-2 lg:py-1.5 hover:shadow-md hover:scale-105 transition-all"
                >
                  Continue
                </button>
                <button
                  type="button"
                  className="border border-white px-4 lg:px-3 py-2 lg:py-1.5 rounded-full hover:shadow-md hover:scale-105 transition-all"
                >
                  Forgot Password?
                </button>
              </div>
            </form>

            <div className="text-gray-400 text-lg py-6">or</div>

            {/* Google Sign in */}
            <button
              onClick={() => {
                router.push("/home");
              }}
              className="bg-white w-full flex justify-center px-4 lg:px-3 py-2 lg:py-1.5 rounded-full font-semibold gap-2 mb-4 hover:shadow-md transition-all"
            >
              <Image
                src="/google.png"
                alt="Google logo"
                width="25"
                height="25"
              />
              <div>Continue with Google</div>
            </button>

            {/* College Email Sign in */}
            <button
              onClick={() => {
                router.push("/home");
              }}
              className="bg-white w-full flex justify-center px-4 lg:px-3 py-2 lg:py-1.5 rounded-full font-semibold gap-2 mb-4 hover:shadow-md transition-all"
            >
              <Image
                src="/Subtract.svg"
                alt="College Email logo"
                width="25"
                height="25"
              />
              <div>Continue with College Email</div>
            </button>

            {/* College Affiliation */}
            <button className="border text-white border-[#FFE4B0] w-full flex justify-center px-4 lg:px-3 py-2 lg:py-1.5 rounded-full font-semibold gap-2 hover:shadow-md   -all">
              <div className="flex items-center gap-1">
                Affiliated with your college?{" "}
                <div className="text-[#FFE4B0] cursor-pointer">Find it</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
