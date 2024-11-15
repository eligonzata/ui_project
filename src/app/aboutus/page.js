// src/app/about/page.js
"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="left">
          <img src="img/about.png" alt="Serene candles and aromas" />
          <div className="overlay">
            <h1 className="overlay-text">A World of Scents</h1>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h1>Our Story</h1>
            <p>
              Welcome to <strong>Scent Sanctuary</strong>, where scents
              transcend simple aromas. Our candles are crafted to evoke
              emotions, create atmosphere, and transform your space into a
              peaceful sanctuary. We carefully select premium ingredients to
              bring you sustainable and eco-friendly products that are as safe
              as they are luxurious.
            </p>
            <p>
              From soft floral notes to warm, earthy scents, each candle is
              inspired by the beauty of nature and the essence of tranquility.
              Thank you for being part of our journey and letting us share these
              moments with you.
            </p>
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            height: 100vh;
            font-family: "Georgia", serif;
            background: linear-gradient(to right, #f1e5d9 50%, #ffffff 50%);
            box-sizing: border-box;
            overflow: hidden;
          }

          .left {
            position: relative;
            flex: 1;
            overflow: hidden;
          }

          .left img {
            width: 100%;
            height: 100vh;
            object-fit: cover;
            filter: brightness(0.8);
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .overlay-text {
            color: #fff;
            font-size: 3rem;
            font-weight: bold;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
            letter-spacing: 2px;
            text-align: center;
          }

          .right {
            flex: 1;
            display: flex;
            align-items: center;
            padding: 50px;
            background: #fff;
            text-align: left;
            box-sizing: border-box;
          }

          .content {
            max-width: 500px;
          }

          .content h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #8a2a2a;
          }

          .content p {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 20px;
            color: #444;
          }

          .content strong {
            color: #8a2a2a;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
              height: auto;
            }

            .overlay-text {
              font-size: 2rem;
            }

            .content h1 {
              font-size: 2rem;
            }

            .content p {
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
