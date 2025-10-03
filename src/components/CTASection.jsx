import React from "react";

export default function CTASection() {
  const avatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/56.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
  ];

  return (
    <section className="bg-gradient-to-br from-[#7E22CE] to-[#D8B4FE] max-w-5xl p-10 rounded-lg mx-auto relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Content */}
        <div className="text-white flex-1 relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 pt-4">
            Ready to grow your <br />
            coaching business? 🚀
          </h2>
          <p className="mb-4 text-white/90 text-xs">
            Join with more than 100+ happy customers
          </p>
          <div className="flex items-center gap-2">
            {avatars.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`avatar-${idx}`}
                className="w-10 h-10 rounded-full border-2 border-white -ml-6 first:ml-0 mt-4"
              />
            ))}
            <span className="text-white/90 ml-1 underline cursor-pointer mt-4">
              and others
            </span>
          </div>
        </div>

        {/* Right Button */}
        <div className="flex-1 flex justify-start lg:justify-end items-center">
          <button className="
            relative
            bg-white 
            text-purple-950 
            font-bold 
            py-3 px-8 
            rounded-lg 
            shadow-[0_8px_0_0_#9333EA] 
            transition-all 
            duration-300 
            hover:-translate-y-2 
            hover:shadow-[0_12px_0_0_#9333EA] 
            active:translate-y-1 
            active:shadow-[0_4px_0_0_#9333EA]
          ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
