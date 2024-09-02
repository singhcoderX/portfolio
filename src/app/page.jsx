import Image from "next/image";
import PageWrapper from "./pageWrapper";

const Homepage = () => {
  return (
    <PageWrapper>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src={"/hero.png"} alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-2 md:gap-8  items-center justify-center relative">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Turning Ideas into Impactful Solutions
          </h1>
          <p className="text-xl lg:text-2xl">
            Full Stack Developer | Expert in React | Experience in MERN stack.
          </p>
          <p className="lg:text-xl">
            Hello! I’m Aryan Singh, a dedicated Software Engineer with a strong
            passion for solving real-world problems through technology. My
            primary expertise lies in front-end development with React, but my
            curiosity and drive have led me to explore backend technologies as
            well.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Homepage;
