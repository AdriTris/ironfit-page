"use client";

import { useState } from "react";
import { IoIosFitness } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full h-16 flex justify-between items-center font-light px-10 fixed z-10 bg-zinc-800 max-sm:h-12">
      <div className="flex items-center cursor-pointer">
        <button className="w-10 h-10">
          <IoIosFitness className="text-red-500 w-10 h-10" />
        </button>
        <p className="font-bold text-2xl">IronFit</p>
      </div>
      <div className="sm:hidden w-16 h-full flex justify-center items-center relative">
        {isMenuOpen ? (
          <IoMdClose
            className="text-red-500 w-8 h-8"
            onClick={handleMenuToggle}
          />
        ) : (
          <IoIosMenu
            className="text-red-500 w-10 h-10"
            onClick={handleMenuToggle}
          />
        )}
        <ul
          className={`flex flex-col gap-2 bg-zinc-700 p-3 ${
            isMenuOpen ? "open absolute top-12" : "hidden"
          }`}
        >
          <li>
            <a
              href="#"
              className={`handleActive hover:text-red-500`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`handleActive hover:text-red-500`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("programs");
              }}
            >
              Programs
            </a>
          </li>
          <li>
            <a
              className={`handleActive hover:text-red-500`}
              href="#"
              onClick={() => scrollToSection("aboutus")}
            >
              About us
            </a>
          </li>
          <li>
            <a
              className={`handleActive hover:text-red-500`}
              href="#"
              onClick={() => scrollToSection("plans")}
            >
              Membership
            </a>
          </li>
          <li>
            <a
              className={`handleActive hover:text-red-500`}
              href="#"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>

      <div className="max-sm:hidden flex ">
        <ul className="flex gap-8">
          <li>
            <a
              href="#"
              className={`handleActive hover:text-red-500`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`handleActive hover:text-red-500`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("programs");
              }}
            >
              Programs
            </a>
          </li>
          <li>
            <a
              className={`handleActive hover:text-red-500`}
              href="#"
              onClick={() => scrollToSection("aboutus")}
            >
              About us
            </a>
          </li>
          <li>
            <a
              className={`handleActive hover:text-red-500`}
              href="#"
              onClick={() => scrollToSection("plans")}
            >
              Membership
            </a>
          </li>
          <li>
            <a
              className={`handleActive hover:text-red-500`}
              href="#"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
