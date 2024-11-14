import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarBackgroundColor = "#641414";
  const textColor = "#FFFFFF";

  const commonStyles = {
    fontFamily: "Monospace",
    fontWeight: 600,
    fontSize: "14px",
    padding: "45px",
    height: "14px",
  };

  const navbarStyles = {
    backgroundColor: navbarBackgroundColor,
    color: textColor,
    ...commonStyles,
  };

  return (
    <nav style={navbarStyles} className="relative top-0 sticky backdrop-blur-lg mx-auto z-50">
      <div className="flex items-center justify-between mt-[-20px]">
        <div className="sm:flex sm:items-center sm:space-x-4 relative sm:top-[-21px] sm:left-4">
          <Link href="/">
            <Image src="/img/logo.png" width={110} height={50} alt="Logo" />
          </Link>
        </div>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex lg:space-x-12 md:space-x-6 font-bold mr-12">
          <Link href="/shop" className="hover:text-gray-300">Shop</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/aboutus" className="hover:text-gray-300">About us</Link>
          <Link href="/account" className="bg-gradient-to-r text-transparent bg-clip-text from-[#933FFE] to-[#18C8FF] hover:text-gray-300">Account</Link>
        </div>

        <div>
          <button id="menu-btn" className={`hamburger md:hidden mt-3 flex ${isMenuOpen ? "open" : ""} text-white`} onClick={handleMenuToggle}>
            <span className="hamburger-top bg-white"></span>
            <span className="hamburger-middle bg-white"></span>
            <span className="hamburger-bottom bg-white"></span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white top-[90px]"></div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
          <div className="absolute inset-0 bg-[#641414] text-white flex flex-col items-center justify-center p-6">
            <button className="absolute top-4 right-4 text-2xl font-bold" onClick={handleMenuToggle}>
              X
            </button>

            <div className="space-y-6 font-bold text-4xl">
              <Link href="/swap" className="block hover:text-gray-300">Swap</Link>
              <Link href="/features" className="block hover:text-gray-300">Features</Link>
              <Link href="/vision" className="block hover:text-gray-300">Vision</Link>
              <Link href="/shop" className="block hover:text-gray-300">Shop</Link>
              <Link href="/support" className="block hover:text-gray-300">Support</Link>
              <Link href="/connect" className="block hover:text-gray-300">Connect</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
