import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "../datas/features";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left side */}
      <div>
        <p className="text-gray-500 mt-4">What Our Clients Say </p>

        <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 leading-snug">
          Trusted by nutritionists, dietitians, and
          <br /> wellness professionals worldwide
        </h2>
      </div>

      {/* Right side */}
      <div className="relative rounded-2xl p-8 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-6xl text-purple-900">
            <FaQuoteLeft />
          </span>
        </div>

        {/* Testimonial text */}
        <p className="italic text-gray-500 mb-6 transition-all duration-500">
          {testimonials[current].text}
        </p>

        {/* Profile + navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="bg-purple-900 rounded-full p-2 text-white hover:bg-purple-800"
          >
            <FaChevronLeft />
          </button>

          <div className="flex items-center gap-4">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-purple-900 font-bold">
                {testimonials[current].name}
              </h2>
              <p className="text-sm text-gray-500">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="bg-purple-900 rounded-full p-2 text-white hover:bg-purple-800"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              onClick={() => setCurrent(index)}
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === current ? "bg-purple-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
