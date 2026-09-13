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
    "OpenSearch",
    "OpenTelemetry",
    "Storybook",
    "Highcharts",
    "WCAG",
    "Micro-frontends",
    "Vert.x",
    "Struts",
    "JSP",
    "Java",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "SQL",
    "GraphQL",
    "Apollo",
    "gRPC",
    "Webpack",
    "Babel",
    "Git",
    "GitHub Actions",
    "Jenkins",
    "Firebase",
    "Google Cloud",
    "Cloud VPN",
    "IPsec",
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
      title: "Software Engineer III",
      desc: `Currently managing over 1M IPsec tunnels across multiple regions within the Google Cloud ecosystem. Collaborate with cross-functional teams to enhance the performance and reliability of Cloud VPN services and utilize advanced networking protocols to ensure secure and efficient data transmission for clients.`,
      date: "Jun 2026 - present",
      company: "Google",
    },
    {
      title: "Software Engineer II",
      desc: `Built and maintained enterprise-scale applications with a focus on scalability, observability, and developer productivity. Worked across frontend and backend layers, improved deployment workflows, and supported large-scale platform modernization for business-critical systems.`,
      date: "Mar 2025 - May 2026",
      company: "American Express",
    },
    {
      title: "Software Engineer II",
      desc: `Developed and maintained enterprise systems with strong emphasis on product reliability, maintainability, and user experience. Contributed to backend integration work, UI enhancements, and application performance across key business workflows.`,
      date: "Nov 2022 - Feb 2025",
      company: "TCS",
    },
    {
      title: "Software Engineer",
      desc: `Worked on frontend and web application development with React and JavaScript, contributing to product enhancements and improving customer-facing experience across fintech workflows.`,
      date: "Jul 2021 - Nov 2022",
      company: "Envestnet Yodlee",
    },
    {
      title: "Web Development Intern",
      desc: `Built and integrated digital business card exchange features into a web platform using PHP (Laravel), Vue.js, and Vuetify, improving online networking capabilities and user engagement.`,
      date: "May 2020 - Jul 2020",
      company: "Tonichi",
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
                him to pursue a B.Tech in Computer Science at IIT Jodhpur,
                graduating in 2021. Aryan is a software engineer with
                approximately five years of experience across fintech,
                enterprise platforms, and Google Cloud engineering. He specializes
                in React, Java, full-stack systems, micro-frontends, and cloud
                infrastructure, with a strong focus on performance, accessibility,
                and scalable product engineering. Outside of work, he enjoys
                football, travel, and sketching while staying driven by a desire
                to build meaningful, high-impact solutions for real-world
                problems.
              </p>
              {/* Biography Quote  */}
              <br />
              <span className="italic hidden sm:block">
                Hard work beats talent after some time!!
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
