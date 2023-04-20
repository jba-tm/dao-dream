import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";

import { AiFillCalendar, AiOutlineRise, AiFillCaretDown } from "react-icons/ai";
import { TbLanguage } from "react-icons/tb";

function Header() {
  const [nav] = useState([
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Documents",
      path: "/documents",
    },
    {
      name: "Audit",
      path: "/audit",
    },
    {
      name: "Instructions",
      dropdown: true,
    },
  ]);

  return (
    <header className="header__wrapper">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="hover:opacity-50 ease-linear duration-150">
              <img src={Logo} alt="" />
            </a>

            <nav className="lg:block hidden">
              <ul className="flex items-center gap-6">
                {nav.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      className="text-white hover:opacity-50 cursor-pointer ease-linear duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-2 text-white border border-zinc-300 rounded-lg py-1 p-2">
                <AiFillCalendar />

                <span>3.735</span>

                <AiOutlineRise className="text-green-500" />
              </div>

              <div className="flex items-center gap-2 cursor-pointer hover:opacity-50 ease-linear duration-150">
                <TbLanguage className="text-xl" />

                <span>English</span>

                <AiFillCaretDown />
              </div>

              <button className="header__button hover:opacity-50 ease-linear duration-150">
                Enter App
              </button>
            </div>

            <h1 className="lg:hidden block">Hamgurg</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
