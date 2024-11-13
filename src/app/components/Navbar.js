"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ThemeContext from "../../../public/scripts/ThemeContext";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine menu text and background colors based on theme
  const menuTextColor = theme === "light" ? "text-black" : "text-white";
  const menuBgColor = theme === "light" ? "bg-white" : "bg-black";

  // Determine hamburger icon colors based on theme
  const hamburgerColor = theme === "light" ? "text-black" : "text-white";
  const hamburgerTopColor = theme === "light" ? "bg-black" : "bg-white";
  const hamburgerMiddleColor = theme === "light" ? "bg-black" : "bg-white";
  const hamburgerBottomColor = theme === "light" ? "bg-black" : "bg-white";

  // Common styles
  const commonStyles = {
    fontFamily: "Monospace",
    fontWeight: 600,
    fontSize: "14px",
    padding: "32px",
    height: "14px",
  };

  // Styles for light mode
  const lightModeStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "#000000",
    ...commonStyles,
  };

  // Styles for dark mode
  const darkModeStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#FFFFFF",
    ...commonStyles,
  };

  const currentStyles = theme === "light" ? lightModeStyles : darkModeStyles;

  const themeBtn =
    theme === "light"
      ? "/img/header-dark-mode-icon.png"
      : "/img/header-light-mode-icon.png";

  return (
    <nav
      style={currentStyles}
      className="relative top-0 sticky backdrop-blur-lg mx-auto z-50"
    >
      {/* Flex container */}
      <div className="flex items-center justify-between  mt-[-20px]">
        {/* Logo */}
        <div className="sm:flex sm:items-center sm:space-x-4 sm:top-4 sm:left-4 ">
          <Link href="/">
            <Image
              src={
                theme === "light"
                  ? ""
                  : ""
              }
              width={120}
              height={50}
              alt=""
            />
          </Link>
        </div>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex lg:space-x-12 md:space-x-6 font-bold ml-auto mr-12">
          <Link
            href="/swap"
            className={`hover:text-${
              theme === "light" ? "gray-500" : "gray-500"
            }`}
          >
            Swap
          </Link>
          <Link
            href="/features"
            className={`hover:text-${
              theme === "light" ? "gray-500" : "gray-500"
            }`}
          >
            Features
          </Link>
          <Link
            href="/vision"
            className={`hover:text-${
              theme === "light" ? "gray-500" : "gray-500"
            }`}
          >
            Vision
          </Link>
          <Link
            href="/shop"
            className={`hover:text-${
              theme === "light" ? "gray-500" : "gray-500"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/support"
            className={`hover:text-${
              theme === "light" ? "gray-500" : "gray-500"
            }`}
          >
            Support
          </Link>

          <Link
            href="/connect"
            className={`bg-gradient-to-r  text-transparent bg-clip-text from-[#933FFE] to-[#18C8FF] hover:text-${
              theme === "light" ? "gray-500" : "gray-500"
            }`}
          >
            Connect
          </Link>

          {/* Theme button */}
          <button onClick={toggleTheme} className="hover:text-gray-500">
            <Image src={themeBtn} width={25} height={25} alt="" />
          </button>
        </div>

        <div>
          {/* Hamburger Icon for Mobile */}

          <button
            id="menu-btn"
            className={`hamburger md:hidden mt-3 flex ${
              isMenuOpen ? "open" : ""
            } ${hamburgerColor}`}
            onClick={handleMenuToggle}
          >
            <span className={`hamburger-top ${hamburgerTopColor}`}></span>
            <span className={`hamburger-middle ${hamburgerMiddleColor}`}></span>
            <span className={`hamburger-bottom ${hamburgerBottomColor}`}></span>
          </button>
        </div>

        {/* Gradient line at the bottom of the navbar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#933FFE] to-[#18C8FF]"></div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
          <div
            className={`absolute inset-0 ${menuBgColor} ${menuTextColor} flex flex-col items-center justify-center p-6`}
          >
            {/* Exit Button */}
            <button
              className="absolute top-4 right-4 text-2xl font-bold"
              onClick={handleMenuToggle}
            >
              X
            </button>

            {/* Logo */}
            <div className="absolute top-4 left-4">
              <Link href='/'>
              <Image
                src={
                  theme === "light"
                    ? ""
                    : ""
                }
                width={120}
                height={34}
                alt=""
              />
              </Link>
            </div>

            {/* Menu Items */}
            <div className="flex justify-center mt-16">
              <div className="text-left max-w-md mx-auto">
                <div className="space-y-6 font-bold text-4xl">
                  <Link
                    href="/swap"
                    className={`block ${menuTextColor} hover:text-${
                      theme === "light" ? "gray-500" : "gray-500"
                    }`}
                  >
                    Swap
                  </Link>
                  <Link
                    href="/features"
                    className={`block ${menuTextColor} hover:text-${
                      theme === "light" ? "gray-500" : "gray-500"
                    }`}
                  >
                    Features
                  </Link>
                  <Link
                    href="/vision"
                    className={`block ${menuTextColor} hover:text-${
                      theme === "light" ? "gray-500" : "gray-500"
                    }`}
                  >
                    Vision
                  </Link>
                  <Link
                    href="/shop"
                    className={`block ${menuTextColor} hover:text-${
                      theme === "light" ? "gray-500" : "gray-500"
                    }`}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/support"
                    className={`block ${menuTextColor} hover:text-${
                      theme === "light" ? "gray-500" : "gray-500"
                    }`}
                  >
                    Support
                  </Link>
                  <button
                    onClick={toggleTheme}
                    className={`block ${menuTextColor} hover:text-${
                      theme === "light" ? "gray-500" : "gray-500"
                    }`}
                  >
                    {theme === "light" ? (
                      <>
                        <Image
                          src={themeBtn}
                          width={40}
                          height={25}
                          alt=""
                          className="inline-block"
                        />
                        <span className="inline-block align-middle ml-2">
                          Dark
                        </span>
                      </>
                    ) : (
                      <>
                        <Image
                          src={themeBtn}
                          width={40}
                          height={25}
                          alt=""
                          className="inline-block"
                        />
                        <span className="inline-block align-middle ml-2">
                          Light
                        </span>
                      </>
                    )}
                  </button>

                  {/* Line Separator */}
                  <hr className="border-t-2 border-gray-300 my-4" />

                  <Link
                    href="/connect"
                    className={`block ${menuTextColor} hover:text-${
                      theme === "light" ? "gray-500" : "gray-500"
                    }`}
                  >
                    Connect
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Script src="/scripts/hamburgerScript.js" strategy="afterInteractive" />
    </nav>
  );
};

export default Navbar;