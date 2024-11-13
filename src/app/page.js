"use client";
import Head from "next/head";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeContext from "../../public/scripts/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const lightModeStyles = {
    backgroundColor: "#e8e5de",
    color: "#000000",
  };

  const darkModeStyles = {
    backgroundColor: "#191813",
    color: "#FFFFFF",
  };

  const currentStyles = theme === "light" ? lightModeStyles : darkModeStyles;

  const mockPhone = "";

  const creators1 =
    theme === "light"
      ? ""
      : "";

  const creators2 =
    theme === "light"
      ? ""
      : "";

  const desoDesign = "";

  const star =
    theme === "light"
      ? ""
      : "";

  const heroGradient =
    theme === "light"
      ? ""
      : "";

  const featGradient =
    theme === "light"
      ? ""
      : "";

  const desoGradient =
    theme === "light"
      ? ""
      : "";

  return (
    <div style={currentStyles} className="">
      <Head>
        <title></title>
        <meta
          name="description"
          content="A Web3 social finance platform to empower creators"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <div
          className={`w-full h-0.5 bg-gray-300 my-16 z-10 ${
            theme === "light"
              ? "bg-black"
              : "bg-white md:bg-stone-500"
          }`}
        ></div>
        <div className="hidden md:absolute md:top-0 md: md:h-full md:w-full md: z-0 md:block md:-translate-y-0 transform xl:-translate-y-0 2xl:translate-y-0">
          <div
            className="h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${heroGradient})`,
              backgroundSize: "contain",
              backgroundPosition: "top",
            }}
          />
        </div>

        <div className=" z-10 md: md:mb-0">
          <div className="relative z-10 flex flex-col items-center">
            <Fade direction="up" triggerOnce={true}>
              <h1 className="xl:text-7xl text-5xl font-bold  max-w-xl tracking-wider items-center">
                Meet The Social Stock Market
                <Image
                  src={star}
                  width={25}
                  height={25}
                  alt="star"
                  className="inline-block -ml-2 -mt-8 xl:-mt-12"
                />
              </h1>
              <p className="text-lg mb-8 mt-10 text-sky-500">
                The Wall Street experience for creators.
              </p>
            </Fade>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center text-center outline outline-2 px-12 py-6 rounded-xl outline-gray-400">
              <Fade direction="right" triggerOnce={true}>
                <Link
                  href="#"
                  className={`z-20 order-2 md:order-1 px-5 p-3 rounded-lg ${
                    theme === "light"
                      ? " outline outline-black outline-1 hover:bg-black hover:text-white"
                      : "outline outline-white outline-1 hover:bg-white hover:text-black"
                  }`}
                >
                  Whitepaper
                </Link>
              </Fade>
              <Link
                href="#"
                className="z-20 order-1 md:order-2 p-3 px-5 rounded-lg gradient-button drop-shadow-lg md:flex outline outline-2 outline-white text-black"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="text-center items-center mb-8 p-12 pt-48">
            <Fade direction="up" triggerOnce={true}>
              <h1 className="text-4xl font-bold tracking-wider">
                ICO Yourself
                <Image
                  src={star}
                  width={25}
                  height={25}
                  alt="star"
                  className="inline-block -ml-2 -mt-12"
                />
              </h1>
              <p className="text-sky-400 mt-4 max-w-sm items-center text-left mx-auto">
                Just how a company has a stock, or a project has a crypto, you a
                have a Creator Coin from the moment you sign up!
              </p>
            </Fade>
          </div>

          <div className="hidden md:absolute md:left-0 md: md:h-1/3 md:w-1/3 z-0 md:block md:-translate-y-0 transform xl:-translate-y-0 2xl:translate-y-0">
            <div
              className="h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${creators1})`,
                backgroundSize: "contain",
                backgroundPosition: "left",
              }}
            />
          </div>
          <div className="hidden md:absolute md:right-0 md: md:h-full md:w-full md:top-3/4 z-0 md:block md:-translate-y-0 lg:top-1/3 xl:-translate-y-0 2xl:translate-y-0 2xl:top-3/4">
            <div
              className="h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${featGradient})`,
                backgroundSize: "contain",
                backgroundPosition: "right",
              }}
            />
          </div>
          <div className="absolute block right-0  top-3/3 h-[150vh] w-full z-0 -translate-y-96 md:hidden">
            <div
              className="h-full bg-cover bg-no-repeat w-full"
              style={{
                backgroundImage: `url(${featGradient})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            />
          </div>

          {/* Image of phone */}
          <div className="flex justify-center mb-8 ">
            <Fade direction="up" triggerOnce={true}>
              <Image
                src={mockPhone}
                width={350}
                height={400}
                alt="Phone"
                className="mx-4 -mt-12 z-20"
              />
            </Fade>
            <div className="hidden md:absolute md:right-0 md:pt-18 md:h-1/3 md:w-1/3 z-0 md:block md:translate-y-52">
              <div
                className="h-full bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${creators2})`,
                  backgroundSize: "contain",
                  backgroundPosition: "right",
                }}
              />
            </div>
          </div>

          <Fade direction="down" triggerOnce={true}>
            <div className="z-10 md:pb-28">
              <Link
                href="#"
                className={`px-5 p-3 rounded-lg outline outline-gray-600 outline-2 z-10 ${
                  theme === "light"
                    ? "hover:bg-black hover:text-white"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                Explore Features
              </Link>
            </div>
          </Fade>

          {/*nums section */}
          <div className="pt-20 sm:pt-0 flex flex-col md:flex-row justify-center items-center mb-8 space-x-32 mt-96 md:mt-20 md:pb-28">
            
              <div className="relative z-10 -mt-80">
              <Fade direction="left" triggerOnce={true} cascade={true}>
                <h2 className="z-10 text-3xl ml-6 text-left font-semi-bold tracking-widest mb-4 max-w-md">
                  Vibrant Ecosystem
                  <Image
                    src={star}
                    width={25}
                    height={25}
                    alt="star"
                    className="inline-block -ml-2 -mt-6 z-10"
                  />
                </h2>
                <p className=" rounded-lg ml-6 text-sky-500 drop-shadow-lg font-bold items-center max-w-sm text-left z-10">
                  The first trading app to be all on-chain. Powered by the DeSo
                  blockchain
                </p>
                </Fade>
              </div>
            
            <div className="flex flex-col items-start p-4 text-left z-10 overflow-x-hidden">
              <div className="hidden md:absolute md:left-0 md: md:h-1/3 md:w-1/3 z-10 md:block md:-translate-y-12 lg:-translate-y-24 transform xl:-translate-y-0 2xl:translate-y-0 lg:-translate-y-32">
                <div
                  className="h-full bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${desoDesign})`,
                    backgroundSize: "contain",
                    backgroundPosition: "left",
                  }}
                />
              </div>
              {/* small, md and lg */}
              <div className="hidden xl:hidden sm:block z-0 absolute w-1/3 h-1/3 -translate-y-48 left-0 block md:absolute md:left-0 md:translate-y-80 md:pt-0  md:h-[140vh] md:w-full md:top-2/3 z-0 lg:pt-0 lg:translate-y-40  lg:top-2/3 lg: overflow-x-hidden">
                <div
                  className="h-full bg-cover bg-no-repeat w-full"
                  style={{
                    backgroundImage: `url(${desoGradient})`,
                    backgroundSize: "contain",
                    backgroundPosition: "left",
                  }}
                />
              </div>
              {/* xl */}
              <div className="hidden xl:block z-0 absolute w-full h-full left-0 block md:absolute md:left-0 md:translate-y-36 xl:h-[140vh] xl:w-full md:top-3/3 z-0 xl:top-3/3 xl:left-0 xl:-translate-y-96 overflow-x-hidden">
                <div
                  className="h-full bg-cover bg-no-repeat w-full"
                  style={{
                    backgroundImage: `url(${desoGradient})`,
                    backgroundSize: "contain",
                    backgroundPosition: "left",
                  }}
                />
              </div>
              {/* default mobile */}
              <div className="z-0 absolute w-full h-[180vh]  -translate-y-80 left-0 block sm:hidden">
                <div
                  className="h-full bg-cover bg-no-repeat w-full"
                  style={{
                    backgroundImage: `url(${desoGradient})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                  }}
                />
              </div>
            </div>

            <div className="relative md:-translate-y-0 z-10 flex justify-start items-start -translate-x-24 md:justify-center md:items-center md:-translate-x-24">
              <div className="relative flex flex-col items-start space-x-8">
                <div className="">
                  <Fade
                    direction="up"
                    triggerOnce={true}
                    cascade={true}
                    damping={0.1}
                  >
                    <h2
                      className={`z-10 text-7xl mb-2 text-left bg-gradient-to-r  text-transparent bg-clip-text ${
                        theme === "light"
                          ? "from-[#002D83] to-[#1A94FF]"
                          : "from-[#0057FF] to-[#63B6FF]"
                      }`}
                    >
                      $0.001
                    </h2>
                    <p className="z-10 text-lg text-left mb-8">
                      AVERAGE TRANSACTION FEE
                    </p>
                    <h2
                      className={`z-10 text-7xl mb-2 text-left bg-gradient-to-r  text-transparent bg-clip-text ${
                        theme === "light"
                          ? "from-[#002D83] to-[#1A94FF]"
                          : "from-[#0057FF] to-[#63B6FF]"
                      }`}
                    >
                      5.21M+
                    </h2>
                    <p className="z-10 text-lg text-left mb-8">
                      TRANSACTIONS TO DATE
                    </p>
                    <h2
                      className={`z-10 text-7xl mb-2 text-left bg-gradient-to-r  text-transparent bg-clip-text ${
                        theme === "light"
                          ? "from-[#002D83] to-[#1A94FF]"
                          : "from-[#0057FF] to-[#63B6FF]"
                      }`}
                    >
                      5.3M+
                    </h2>
                    <p className="z-10 text-lg text-left">
                      CREATOR COIN TRANSACTIONS
                    </p>
                    <h2
                      className={`z-10 text-7xl mb-2 text-left bg-gradient-to-r  text-transparent bg-clip-text ${
                        theme === "light"
                          ? "from-[#002D83] to-[#1A94FF]"
                          : "from-[#0057FF] to-[#63B6FF]"
                      }`}
                    >
                      3M+
                    </h2>
                    <p className="z-10 text-lg text-left">TOTAL USERS</p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>

          <div className="z-10 absolute left-0 h-full w-2/3 -translate-y-64 sm:-translate-y-36 md:hidden">
            <div
              className="h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${desoDesign})`,
                backgroundSize: "contain",
                backgroundPosition: "left",
              }}
            />
          </div>
        </div>

        <div className="p-8 pt-96 md:pt-0 overflow-x-hidden ">
          <div className="relative flex flex-col items-center p-4  mb-28">
            <Fade direction="up" triggerOnce={true}>
              <h2 className="text-4xl text-left font-semi-bold mb-4  tracking-wider">
                A crypto wallet with a social feed.
              </h2>
            </Fade>
            <p className="text-2xl p-4 mb-4 tracking-wider text-left max-w-xl z-10">
              Just like Metamask started for Ethereum.  is starting for{" "}
              <Link
                href="https://www.deso.com"
                className={`z-10 ${
                  theme === "light" ? "text-sky-400" : "text-sky-400"
                }`}
              >
                DeSo
              </Link>
            </p>
            <Link
              href="#"
              className="z-10 p-3 px-5 rounded-lg gradient-button drop-shadow-lg md:flex outline outline-2 outline-white text-black"
            >
              Read Our Vision
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}