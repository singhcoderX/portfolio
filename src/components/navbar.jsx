"use client";
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

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKSß */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => {
          return <NavLink link={link} key={link.url} />;
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
          <div
            className={`w-10 h-1 bg-${open ? "white" : "black"} rounded`}
          ></div>
          <div
            className={`w-10 h-1 bg-${open ? "white" : "black"} rounded`}
          ></div>
          <div
            className={`w-10 h-1 bg-${open ? "white" : "black"} rounded`}
          ></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => {
              return (
                <Link key={link.url} href={link.url}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
