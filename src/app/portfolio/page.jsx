"use client";
import React, { useRef } from "react";
import PageWrapper from "../../components/pageWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const xValue = useTransform(scrollYProgress, [0, 1], ["0%", "-66.5%"]);

  const projects = [
    {
      id: "peerChat",
      title: "Peer Chat",
      desc: "PeerChat is a feature-rich, peer-to-peer chat application built using Python3 and Socket Programming. It offers a seamless communication experience for multiple clients, allowing them to chat directly with each other without any intermediary server.",
      link: "https://github.com/singhcoderX/PeerChat",
      color: "from-red-300 to-blue-300",
    },
    {
      id: "newJob",
      title: "New Job - 30 Days, 30 Coding Questions Platform",
      desc: "Building a platform to prepare people for job interviews with daily coding challenges. Developed from scratch using React, Node.js, Webpack, TypeScript, and Babel. Deployment via Google Cloud Functions with GitHub Actions for CI/CD. Providing mentorship to interns as part of the project.",
      link: "https://newjob.dev/",
      color: "from-blue-300 to-green-300",
    },
  ];

  return (
    <PageWrapper>
      <div
        className="relative"
        style={{ height: `${projects.length + 1}00vh` }}
        ref={ref}
      >
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x: xValue }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {projects.map((project, idx) => {
              return (
                <div
                  key={idx}
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
                >
                  <div className="flex flex-col gap-8 text-white">
                    <h1>{project.title}</h1>
                    <p>{project.desc}</p>
                    <Link href={project.link}>
                      <button>Link</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioPage;
