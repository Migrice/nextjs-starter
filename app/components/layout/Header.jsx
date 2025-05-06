import React from "react";
import NavLink from "../ui/NavLink";

const Header = () => {
  return (
    <header className="bg-gray-700 text-white">
      <nav>
        <ul className="flex w-full justify-end gap-10 p-2">
          <li>
            <NavLink href="/" name="Home" />
          </li>
          <li>
            <NavLink href="/about" name="About Us" />
          </li>
          <li>
            <NavLink href="/about/team" name="Contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
