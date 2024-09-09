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

  return (
    <PageWrapper>
      {/* CONTAINER */}
      <div className="">
        {/* Text Container  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
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
          <div className="flex flex-col gap-12 justify-center">
            {/* Experience Title  */}
            <h1 className="font-bold text-2xl">Experience</h1>
            <div className="">
              {/* Experience List Item  */}
              <div className="">
                {/* LEFT  */}
                <div className="">
                  {/* Job Title  */}
                  <div> Web Internship</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG Container  */}
        <div className=""></div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
