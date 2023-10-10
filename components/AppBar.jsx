"use client";
import Link from "next/link";
import logo from "@/public/assets/icons/logo.svg";
import { useState } from "react";

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
                  <a href="#" onClick={toggleMobileMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" onClick={toggleMobileMenu}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" onClick={toggleMobileMenu}>
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" onClick={toggleMobileMenu}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" onClick={toggleMobileMenu}>
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <ul className="flex gap-7 sm:hidden">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AppBar;
