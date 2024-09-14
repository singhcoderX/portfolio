import React from "react";
import PageWrapper from "../../components/pageWrapper";

const AboutPage = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React Js",
    "Redux",
    "Node Js",
    "Express Js",
    "Vue Js",
    "MongoDB",
    "mySQL",
    "Webpack",
    "Git",
    "Figma",
    "Jest",
    "Google Cloud",
    "Firebase",
    "Jira",
    "Blender",
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
      desc: `Built dynamic user interfaces with React.js, integrating
                    highcharts for interactive data visualizations and
                    drag-and-drop widgets.`,
      date: "Jun 2021 - Nov 2022",
      company: "Envestnet Yodlee",
    },
    {
      title: "Senior Engineer",
      desc: `Transitioned to TCS through a strategic partnership with
                    Envestnet, ensuring project continuity and overseeing
                    ongoing initiatives. Facilitated onboarding and provided
                    mentorship to new team members.`,
      date: "Nov 2022 - present",
      company: "Tata Consultancy Service",
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
      <div className="lg:flex">
        {/* Text Container  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Biography Container  */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title  */}
            <h1 className="font-bold text-2xl">Biography</h1>
            {/* Biography Desc  */}

            <p className="text-lg">
              Aryan Singh hails from the vibrant city of Kashipur in
              Uttarakhand, India. With a strong academic foundation in science,
              they embarked on their journey to IIT at a young age, beginning
              preparations in Kota from Class 9th. Their hard work paid off when
              they successfully cracked the IIT entrance exam, leading them to
              pursue a B.Tech in Computer Science at IIT Jodhpur, from which
              they graduated in 2021. Currently, they are a skilled full-stack
              developer, boasting three years of experience, particularly with
              React. Their passion for coding is matched by a love for football,
              both as a player and a spectator. Beyond the digital realm, they
              find joy in traveling and sketching, hobbies that allow them to
              explore their creativity and the world around them. Driven by a
              desire to live a healthy and fulfilling life, they are committed
              to making a positive impact on their country and its people,
              striving to give back in meaningful ways.
            </p>
            {/* Biography Quote  */}

            <span className="italic">Hardwork works where talent fails.</span>
            {/* Biography Sign  */}

            <div className="overflow-hidden h-32 w-32 self-end">
              <img
                src={"/sign.svg"}
                alt="sign"
                style={{ transform: "scale(4) translateY(3px)" }}
              />
            </div>
          </div>
          {/* Skills Container  */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Skills Title  */}
            <h1 className="font-bold text-2xl">Skills</h1>
            {/* Skills list  */}
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, idx) => {
                return (
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Experience Container  */}
          <div className="m-b-4 flex flex-col gap-12 justify-center">
            {/* Experience Title  */}
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* Experience List  */}
            <div className="">
              {jobs.map((job, idx) => {
                return (
                  <>
                    {/* Experience List Item*/}
                    <div className="flex justify-between h-48" key={idx}>
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
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* SVG Container  */}
        <div className="hidden lg:block w-1/3 xl:w-1/2"></div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
