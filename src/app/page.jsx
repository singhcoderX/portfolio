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
            Full Stack Developer | Expert in React | Experience in MERN stack.
          </p>
          <p className="text-sm lg:text-xl mb-2 md:mb-3">
            Hello! I’m Aryan Singh, a dedicated Software Engineer with a strong
            passion for solving real-world problems through technology. My
            primary expertise lies in front-end development with React, but my
            curiosity and drive have led me to explore backend technologies as
            well.
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
