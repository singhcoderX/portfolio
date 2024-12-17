"use client";
import React, { useState, useRef } from "react";
import PageWrapper from "../../components/pageWrapper";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const form = useRef();
  const text = "Hi There";

  const handleEmail = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const userMessage = form.current?.user_message?.value.trim();
    const userEmail = form.current?.user_email?.value.trim();

    // Empty checks for user input
    if (!userMessage || !userEmail) {
      setError("FAILED... Fields cannot be empty!");

      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Something went wrong!");
        }
      );
  };

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
        <form
          className="min-h-[10rem] sm:h-1/2 lg:h-full lg:w-1/2  bg-red-50 rounded-xl text-xl flex flex-col gap-2 justify-center p-6 sm:p-24 box-border"
          onSubmit={handleEmail}
          ref={form}
        >
          <span>Dear Aryan Singh,</span>
          <textarea
            rows={6}
            className="bg-red-100 border-b-2 border-b-black outline-none resize-none min-h-[5rem]"
            name="user_message"
          ></textarea>
          <span>My email address is:</span>
          <input
            type="email"
            className="bg-red-100 border-b-2 border-b-black outline-none"
            name="user_email"
          />
          <span>Thanks & Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error != "" && (
            <span className="text-red-600 font-semibold">{error}</span>
          )}
        </form>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
