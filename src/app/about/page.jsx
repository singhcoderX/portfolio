"use client";
import React, { useRef } from "react";
import PageWrapper from "../../components/pageWrapper";
import Brain from "../../components/brain";
import { useInView, useScroll, motion } from "framer-motion";

const AboutPage = () => {
  const containerRef = useRef({});
  const { scrollYProgress } = useScroll({ container: containerRef });
  const bioRef = useRef();
  const isBioRefInView = useInView(bioRef);
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const expRef = useRef();
  const isExpRefInView = useInView(expRef);

  // console.log(scrollYProgress);
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "Vue.js",
    "Struts",
    "JSP",
    "Java",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "SQL",
    "GraphQL",
    "gRPC",
    "Webpack",
    "Babel",
    "Git",
    "GitHub Actions",
    "Jenkins",
    "Firebase",
    "Google Cloud",
    "Azure",
    "Jest",
    "Figma",
    "Framer Motion",
    "Jira",
    "Rally",
    "Artifactory",
    "Blender",
    "Docker",
    "Kubernetes",
  ];

  const jobs = [
    {
      title: "Web Internship",
      desc: `Led the integration of digital business card exchange features into NEXTa Meishi,
              enhancing online networking capabilities using PHP (Laravel), Vue.js, and Vuetify.`,
      date: "May 2020 - Jun 2020",
      company: "Tonichi",
    },
    {
      title: "Senior Software Engineer",
      desc: `Built 25+ custom React widgets with Highcharts and drag-and-drop support. Created a design system with Storybook, improved API handling, and maintained 95% test coverage. Mentored new developers and transitioned to TCS to ensure project continuity.`,
      date: "Jun 2021 - Feb 2025",
      company: "Envestnet Yodlee",
    },
    {
      title: "Engineer II",
      desc: "Working on improving observability by migrating from Splunk to ELF, and reducing logging costs. Led secure Maven dependency upgrades across multi-module projects. Maintaining and enhancing legacy platforms built with Struts, JSP, and Servlets.",
      date: "Mar 2025 - present",
      company: "American Express",
    },
  ];

  const renderJobDetail = (job) => {
    return (
      <>
        {/* Job Title  */}
        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
          {job.title}
        </div>
        {/* Job Desc  */}
        <div className="p-3 text-sm italic">{job.desc}</div>
        {/* Job Date  */}
        <div className="p-3 text-red-400 text-sm font-semibold">{job.date}</div>
        {/* Job Company  */}
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
          {job.company}
        </div>
      </>
    );
  };
  return (
    <PageWrapper>
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex pb-4" ref={containerRef}>
        {/* Text Container  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0">
          {/* Biography Container  */}
          <div className="flex flex-col gap-12 justify-center" ref={bioRef}>
            {/* Biography Title  */}
            <motion.h1
              initial={{ x: -300 }}
              animate={isBioRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="font-bold text-2xl"
            >
              Biography
            </motion.h1>
            {/* Biography Desc  */}
            <motion.div
              initial={{ x: -300 }}
              animate={isBioRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg">
                Aryan Singh hails from the vibrant city of Kashipur in
                Uttarakhand, India. With a strong academic foundation in
                science, he embarked on his journey to IIT at a young age,
                beginning preparations in Kota from Class 9. His hard work paid
                off when he successfully cracked the IIT entrance exam, leading
                him to pursue a B.Tech in Computer Science at IIT Jodhpur, from
                which he graduated in 2021. Aryan is a skilled full-stack
                developer with 4 years of experience, specializing in React and
                the MERN stack, along with proficiency in Java, Spring Boot, and
                SQL. His passion for coding is matched by a love for
                football—both as a player and a spectator. Beyond the digital
                realm, he finds joy in traveling and sketching—hobbies that
                allow him to explore his creativity and the world around him.
                Driven by a desire to live a healthy and fulfilling life, he is
                committed to making a positive impact on his country and its
                people, striving to give back in meaningful ways.
              </p>
              {/* Biography Quote  */}
              <br />
              <span className="italic hidden sm:block">
                Hardwork works where talent fails.
              </span>
              {/* Biography Sign  */}
            </motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={isBioRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="hidden sm:block overflow-hidden h-32 w-32 self-end"
            >
              <img
                src={"/sign.svg"}
                alt="sign"
                style={{ transform: "scale(4) translateY(3px)" }}
              />
            </motion.div>
          </div>
          {/* Skills Container  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skills Title  */}
            <motion.h1
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            {/* Skills list  */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {skills.map((skill, idx) => {
                return (
                  <div
                    className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    key={idx}
                  >
                    {skill}
                  </div>
                );
              })}
            </motion.div>
          </div>
          {/* Experience Container  */}
          <div
            className="m-b-4 flex flex-col gap-12 justify-center"
            ref={expRef}
          >
            {/* Experience Title  */}
            <motion.h1
              initial={{ x: -300 }}
              animate={isExpRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/* Experience List  */}
            <motion.div
              initial={{ x: -300 }}
              animate={isExpRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              {jobs.map((job, idx) => {
                return (
                  <div key={idx}>
                    <div className="hidden sm:flex  justify-between  max-h-80">
                      {/* LEFT  */}
                      <div className="w-1/3">
                        {idx % 2 == 0 && <>{renderJobDetail(job)}</>}
                      </div>
                      {/* CENTER  */}
                      <div className="w-1/6">
                        {/* LINE  */}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/* CIRCLE  */}
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                      </div>
                      {/* RIGHT  */}
                      <div className="w-1/3">
                        {idx % 2 != 0 && <>{renderJobDetail(job)}</>}
                      </div>
                    </div>
                    <div className="flex sm:hidden  justify-between h-auto m-1">
                      <div className="w-2/3">{renderJobDetail(job)}</div>
                      {/* CENTER  */}
                      <div className="w-1/6">
                        {/* LINE  */}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/* CIRCLE  */}
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        {/* SVG Container  */}
        <div className="hidden lg:block w-1/3 sticky  top-0">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
