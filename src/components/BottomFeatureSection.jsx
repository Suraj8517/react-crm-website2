import React from "react";
import Device from "../assets/Device.png";
import background_arrow1 from "../assets/arrow1.png";

export default function BottomFeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center lg:text-left ml-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 text-center lg:text-left">
            Designed for Wellness Professionals Like You
          </h2>
          <p className="mt-4 max-w-full sm:max-w-md mx-auto lg:mx-0 text-gray-600 leading-relaxed text-base sm:text-lg text-center lg:text-left">
            EliMax is designed to support health and wellness professionals who want to streamline their practice, engage clients more effectively, and grow their business with ease.
          </p>

          <ul className="space-y-2 mt-6 text-gray-700 text-sm sm:text-base text-center lg:text-left">
            {[
              "Nutritionists & Dietitians",
              "Fitness Coaches & Personal Trainers",
              "Wellness Consultants",
              "Wellness Centers"
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-center lg:justify-start items-center gap-2 font-semibold sm:font-bold"
              >
                <span className="text-purple-600">✔</span> {item}
              </li>
            ))}
          </ul>

          <a 
            href="#"
            className="inline-block mt-6 text-purple-800 font-semibold hover:underline text-sm sm:text-base text-center lg:text-left"
          >
            Book A Demo →
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center relative w-full lg:w-auto">
          <img
            src={Device}
            alt="Laptop Scheduler"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg z-10"
          />
          <img
            src={background_arrow1}
            alt="background arrow"
            className="absolute right-0 top-0 w-[350px] sm:w-[450px] lg:w-[550px] h-auto opacity-10 hidden lg:block -rotate-60"
          />
        </div>
      </div>
    </section>
  );
}
