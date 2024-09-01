"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";

const NavBar = () => {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const animateVariants = {
    first: {
      rotate: 45,
    },
    second: {
      opacity: 0,
    },
    third: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemsVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKSß */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, idx) => {
          return <NavLink link={link} key={`link_${idx}`} />;
        })}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3 ">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white font-semibold mr-1">Aryan</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Singh
          </span>
        </Link>
      </div>
      {/* SOCIALS */}
      <div className="hidden md:flex justify-end gap-4 w-1/3">
        <a
          href={"https://github.com/singhcoderX"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={"/github.png"} width={24} height={24} />
        </a>
        <a
          href={"https://www.linkedin.com/in/aryansingh007/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={"/linkedin.png"} width={24} height={24} />
        </a>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleMenu}
        >
          <motion.div
            className={`w-10 h-1 bg-${
              open ? "white" : "black"
            } rounded origin-left`}
            variants={animateVariants}
            animate={open ? "first" : ""}
          ></motion.div>
          <motion.div
            className={`w-10 h-1 bg-${open ? "white" : "black"} rounded`}
            variants={animateVariants}
            animate={open ? "second" : ""}
          ></motion.div>
          <motion.div
            className={`w-10 h-1 bg-${
              open ? "white" : "black"
            } rounded origin-left`}
            variants={animateVariants}
            animate={open ? "third" : ""}
          ></motion.div>
        </button>
        {open && (
          <motion.div
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-10"
            variants={listVariants}
            animate={open ? "opened" : "closed"}
            initial="closed"
          >
            {links.map((link) => {
              return (
                <motion.div key={link.url} variants={listItemsVariants}>
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
