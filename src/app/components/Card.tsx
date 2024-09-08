import Image from "next/image";

export function Card() {
  return (
    <div className="flex shadow-sm  flex-col bg-white items-start justify-center max-w-sm  p-3 rounded-2xl gap-4 border pb-6 transition-transform duration-400 delay-50 hover:scale-105 hover:shadow-xl">
      <Image
        className="rounded-xl"
        src="/course.jpeg"
        width={500}
        height={200}
        alt="image"
      />
      <div className="flex items-center gap-1 text-gray-600">
        <div>
          <Image src="/google.png" alt="image" width="25" height="25" />
        </div>
        <div>Google</div>
      </div>
      <div className="font-semibold">Google AI Essentials</div>
      <div className="text-gray-600">Beginner · Course</div>
    </div>
  );
}
