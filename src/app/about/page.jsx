import React from "react";
import PageWrapper from "../../components/pageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper>
      {/* CONTAINER */}
      <div className="">
        {/* Text Container  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* Biography Container  */}
          <div className="">Biography</div>
          {/* Skills Container  */}
          <div className="">Skills</div>
          {/* Experience Container  */}
          <div className="">Experience</div>
        </div>
        {/* SVG Container  */}
        <div className=""></div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
