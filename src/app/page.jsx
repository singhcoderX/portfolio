"use client";
import Image from "next/image";
import PageWrapper from "../components/pageWrapper";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  return (
    <PageWrapper>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative overflow-hidden">
          <Image src={"man.png"} alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center relative">
          <h1 className="text-xl md:text-4xl lg:text-6xl font-bold mb-1 md:mb-3">
            Turning Ideas into Impactful Solutions
          </h1>
          <p className="text-base md:text-xl lg:text-2xl mb-1 md:mb-3">
            Engineer II @ Amex | Full Stack Developer | React & MERN Stack
            Specialist
          </p>
          <p className="text-sm lg:text-xl mb-2 md:mb-3">
            Hello! I’m Aryan Singh, a Software Engineer at American Express. I
            specialize in front-end development with React and build scalable
            backend systems using Node.js and Java (Spring Boot). I'm
            comfortable working with both NoSQL and SQL databases, and I enjoy
            crafting high-performance, maintainable full-stack applications to
            solve real-world problems.
          </p>
          {/* BUTTONS */}
          <div className="flex w-full mb-2">
            <button
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white mr-2"
              onClick={() => {
                router.push("/portfolio");
              }}
            >
              View My Work
            </button>
            <button
              className="p-4 rounded-lg ring-1 ring-black"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Homepage;
