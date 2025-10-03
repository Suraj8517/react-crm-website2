import React from "react";
import vector from "../assets/Vector.svg";
import background_circle from "../assets/Shape.png";
import dashboard_image from "../assets/hero.png";

export default function HeroSection() {
  return (
    <div className="bg-[#8B4FE8] w-full h-[70vh] sm:h-[80vh] md:h-[60vh] lg:h-[100vh] relative">
      <main className="relative flex items-center h-full">
        <div className="w-[100%] mx-auto flex flex-col lg:flex-row items-center lg:px-4 gap-8 relative">
          <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left z-10 px-4 lg:pl-12">
            <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold leading-snug sm:leading-tight lg:leading-[5rem] text-white">
              We help you <br />
              grow your business
              <br />{" "}
              <span className="relative inline-block">
                Faster
                <img
                  src={vector}
                  alt="underline vector"
                  className="absolute left-0 -bottom-6 w-full"
                />
              </span>
            </h1>

            <p className="text-white lg:text-lg sm:text-2xl pt-4">
              An all-in-one CRM for personal trainers,
              <br /> coaches, and fitness studios.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="w-44 bg-[#6E0ACE] text-white text-base px-5 py-3 rounded-xl shadow-md hover:brightness-105 transition">
                Book A Demo
              </button>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center items-center">
            <img
              src={background_circle}
              alt="background circle"
              className="absolute right-28 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-80 hidden lg:block"
            />
          </div>
        </div>

        <img
          src={dashboard_image}
          alt="dashboard"
          className="absolute bottom-0 w-full max-w-[350px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[950px] h-auto z-10 object-contain 
                     left-1/2 -translate-x-1/2 translate-y-1/4 
                     lg:left-auto lg:translate-x-1/4 lg:-right-40"
        />
      </main>
    </div>
  );
}
