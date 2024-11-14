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

  const gradientImage = theme === "light" ? "" : "/img/footer-bg-gradient.png";

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
              src="/img/logo.png"  // Path to your logo image
              width={150}
              height={50}
              alt="Logo"
              priority
            />
          </div>
          <p className="text-gray-600 max-w-sm">
            Sign up to get the latest in news, discounts, opportunities, and more.
          </p>
          <div className="relative w-full max-w-sm m-0 p-0.5 rounded-lg bg-gradient-to-r from-[#18C8FF] to-[#933FFE]">
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
          <p className="text-gray-600">
            &copy; 2024 LLC, all rights reserved.
          </p>
        </div>

        {/* Navigation Links Container */}
        <div className="flex flex-col space-y-3 text-gray-600 z-10">
          <a href="#" className="hover:text-black font-semibold">
            Exchange
          </a>
          <a href="#" className="hover:text-black">
            Learn
          </a>
          <a href="#" className="hover:text-black">
            Features
          </a>
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            News
          </a>
          <a href="#" className="hover:text-black">
            Shop
          </a>
        </div>

        {/* Privacy Policy Links Container */}
        <div className="flex flex-col space-y-3 text-gray-600 z-10">
          <p className="font-semibold">
            Privacy Policy and Terms of Service
          </p>
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black">
            Terms & Conditions
          </a>
          <div className="flex space-x-2 mt-4">
            <Link href="https://www.telegram.com" className="mt-16">
              <Image
                src="/img/telegram-icon-light.png"
                width={30}
                height={30}
                alt="Telegram Logo"
                priority
              />
            </Link>
            <Link href="https://www.x.com" className="mt-16">
              <Image
                src="/img/x-icon-light.png"
                width={30}
                height={30}
                alt="X Logo"
                priority
              />
            </Link>
            <Link href="" className="mt-16">
              <Image
                src="/img/instagram-icon-light.png"
                width={30}
                height={30}
                alt="Instagram Logo"
                priority
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Right side gradient image */}
      <div className="hidden md:absolute md:right-0 md:top-0 md:h-full md:w-1/3 z-1 md:block">
        <div
          className="h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${gradientImage})`,
            backgroundSize: "cover",
            backgroundPosition: "right bottom",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
