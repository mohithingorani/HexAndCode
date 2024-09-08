import Image from "next/image";

export function Footer() {
  return <div className="bg-[#EEEEEE] w-full">
    <Image src={"/blacklogo.svg"} className="p-8" width={300} height={300} alt="logo"/>
  </div>;
}
