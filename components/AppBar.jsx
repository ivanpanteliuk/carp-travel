"use client";
import Link from "next/link";
import logo from "@/public/assets/icons/logo.svg";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function AppBar() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpened((prev) => !prev);

  return (
    <div className="container sm:w-[320px] lg:w-d sm:py-[35px]">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="flex flex-col justify-center items-center font-karantina text-[14px] tracking-tight"
        >
          <svg
            className="fill-transparent"
            width={61}
            height={22}
            viewBox={logo.viewBox}
          >
            <use xlinkHref={`#${logo.id}`} />
          </svg>
          <span>CarpTravel</span>
        </Link>

        {/* Mobile nav */}
        <div className="sm:flex hidden">
          {!isMobileMenuOpened && (
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="uppercase"
            >
              Menu
            </button>
          )}
          {isMobileMenuOpened && (
            <div className="dropdown dropdown-bg">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="absolute right-[20px] top-[43px] text-[14px] uppercase tracking-tightest"
              >
                Close
              </button>
              <ul className=" flex flex-col gap-[48px] items-center justify-center tracking-tighter">
                <li>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={700}
                    onClick={toggleMobileMenu}
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="#"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={700}
                    onClick={toggleMobileMenu}
                  >
                    Services
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="career"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={700}
                    onClick={toggleMobileMenu}
                  >
                    Career
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={700}
                    onClick={toggleMobileMenu}
                  >
                    Gallery
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={700}
                    onClick={toggleMobileMenu}
                  >
                    Contacts
                  </ScrollLink>
                </li>
              </ul>
            </div>
          )}
        </div>

        <ul className="flex gap-7 sm:hidden">
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="career"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Career
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="gallery"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Gallery
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contacts"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Contacts
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AppBar;
