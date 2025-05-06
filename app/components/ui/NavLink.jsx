"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, name, ...rest }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  console.log(pathname, isActive);

  return (
    <Link href={href} {...rest} className={isActive ? "text-cyan-500" : ""}>
      {name}
    </Link>
  );
};

export default NavLink;
