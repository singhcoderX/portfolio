"use client";
import React, { useRef, useMemo } from "react";
import Image from "next/image";
import PageWrapper from "../../components/pageWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import projectsData from "../../data/projects.json";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  // Filter out inactive projects (where active is false)
  const projects = useMemo(() => {
    return projectsData.filter((project) => project.active !== false);
  }, []);

  // Calculate xValue dynamically based on number of projects
  // Formula: -75 - 5*(n-3) where n is the number of projects
  // For 3 projects: -75%, for 4 projects: -80%, etc.
  const xValuePercentage = useMemo(() => {
    const numProjects = projects.length;
    const percentage = -75 - 5 * (numProjects - 3);
    return `${percentage}%`;
  }, [projects.length]);

  const xValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", xValuePercentage]
  );
  const footerHeight = "6rem";

  const getGradientColor = (idx) => {
    const rainbowGradients = [
      "from-purple-400 to-red-400",
      "from-red-400 to-blue-400", // red to orange
      "from-blue-400 to-gray-300", // orange to gray (was yellow)
      "from-gray-300 to-green-400", // gray to green (was yellow to green)
      "from-green-400 to-blue-400", // green to blue
      "from-blue-400 to-indigo-400", // blue to indigo
      "from-indigo-400 to-purple-400", // indigo to purple
      "from-purple-400 to-pink-400", // purple to pink
    ];
    // Loop if idx >= rainbowGradients.length
    const gradient = rainbowGradients[idx % rainbowGradients.length];
    return gradient;
  };

  return (
    <PageWrapper>
      <div
        className="relative"
        style={{ height: `${projects.length + 1}00vh` }}
        ref={ref}
      >
        <div
          className={`w-screen h-[calc(100vh-${footerHeight})] flex items-center justify-center text-6xl sm:text-8xl text-center`}
        >
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x: xValue }} className="flex">
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${getGradientColor(
                0
              )}`}
            />
            {projects.map((project, idx) => {
              return (
                <div
                  key={idx}
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${getGradientColor(
                    idx + 1
                  )}`}
                >
                  <div className="flex flex-col gap-8 text-white">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">
                      {project.title}
                    </h1>
                    <div className="relative w-80 h-48 md:w-96 md:h-56 lg:w-[500px] lg:h-[280px] xl:w-[600px] xl:h-[400px]">
                      {project.img ? (
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      ) : (
                        <iframe
                          src={project.link}
                          width={"100%"}
                          height={"100%"}
                          // className="w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]"
                          style={{
                            pointerEvents: "none",
                            border: "none",
                            borderRadius: "10px",
                          }}
                        />
                      )}
                    </div>
                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {project.desc}
                    </p>
                    <Link href={project.link} className="flex justify-end">
                      <button className="p-2 md:text-md lg:p-4 lg:text-lg  text-sm bg-white text-gray-500 font-semibold m-4 rounded">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl sm:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-stack Developer & Expert in React
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioPage;
