"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link, id }) => {
  const pathaName = usePathname();

  return (
    <Link
      key={id}
      href={link.url}
      className={`rounded p-1 ${
        pathaName === link.url && "bg-black text-white"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
