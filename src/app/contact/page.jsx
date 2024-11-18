"use client";
import React from "react";
import PageWrapper from "../../components/pageWrapper";
import { motion } from "framer-motion";

const ContactPage = () => {
  const text = "Hi There";

  return (
    <PageWrapper>
      {/* <WorkInProgress /> */}
      <div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER  */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, idx) => {
              return (
                <motion.span
                  key={idx}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
            <span>😎</span>
          </div>
        </div>
        {/* FORM CONTAINER  */}
        <div className="h-1/2 lg:h-full lg:w-1/2"></div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
