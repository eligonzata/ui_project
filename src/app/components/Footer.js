import Image from "next/image";
import ThemeContext from "../../../public/scripts/ThemeContext";
import { useContext } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Footer must be used within a ThemeProvider");
  }

  const { theme } = themeContext;

  const lightModeStyles = {
    backgroundColor: "#FFFFFF",
    color: "#4B5563",
  };

  const darkModeStyles = {
    backgroundColor: "#000000",
    color: "#D1D5DB",
  };

  const currentStyles = theme === "light" ? lightModeStyles : darkModeStyles;

  const gradientImage =
    theme === "light" ? "" : "/img/exchange-hero-red-bg.png";

  function emailBtnHandler() {
    const email = document.getElementById("email").value;
    // Handle email logic here
  }

  return (
    <footer
      style={currentStyles}
      className="relative py-10 overflow-x-hidden overflow-y-hidden inset-0 z-0"
    >
      {/* Black line at the top */}
      <div className="border-t-2 border-black w-full absolute top-0 left-0" />

      {/* Footer for md and bigger screens */}
      <div className="container flex flex-col md:flex-row md:space-x-8 lg:space-x-24 md:space-y-4 hidden md:flex md:ml-12 lg:ml-24">
        {/* Logo and Description Container */}
        <div className="flex flex-col space-y-4 z-10">
          <div className="flex items-center space-x-2">
            <Image
              src="/img/logo.png" // Path to your logo image
              width={150}
              height={50}
              alt="Logo"
              priority
            />
          </div>
          <p className="text-gray-600 max-w-sm">
            Sign up to get the latest in news, discounts, opportunities, and
            more.
          </p>
          <div className="relative w-full max-w-sm m-0 p-0.5 rounded-lg bg-gradient-to-r from-[#ffb03b] to-[#ff1f1b]">
            <input
              className={"p-3 pr-12 w-full rounded-lg focus:outline-none"}
              type="text"
              id="email"
              placeholder="Email Address"
            />
            <button
              className="absolute right-1 top-2 px-3 py-3"
              onClick={emailBtnHandler}
            >
              <FaArrowRight fill="gray" />
            </button>
          </div>
          <p className="text-gray-600">&copy; 2024 LLC, all rights reserved.</p>
        </div>

        {/* Navigation Links Container */}
        <div className="flex flex-col space-y-3 text-gray-600 z-10">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-300">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <Link href="/aboutus" className="hover:text-gray-300">
            About us
          </Link>
        </div>
      </div>

      {/* Right side gradient image */}
      <div className="hidden md:absolute md:right-0 md:top-0 md:h-full md:w-1/3 z-1 md:block">
        <div
          className="h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${gradientImage})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
