import React from "react";
import background_arrow from "../assets/arrow.png";
import phone from "../assets/phone1.png";
import { motion } from "framer-motion";  
  

export default function TopFeatureSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 lg:px-12 my-52">
      <div className="flex flex-col lg:flex-row items-center gap-12 relative">
        
        {/* Left side - Phones with background arrow */}
        <div className="relative flex-1 flex justify-center">
          {/* background arrow */}
          <motion.img
            src={background_arrow}
            alt="background arrow"
            className="absolute left-36 top-8 w-[450px] h-auto opacity-70 hidden lg:block"
            initial={{y:-50,opacity:0,rotate:0}}
            whileInView={{y:0,opacity:1,rotate:15}}
            viewport={{once:true, amount:0.5}}
            transition={{duration: 1.2, ease: "easeOut"}}
          />

          {/* Phone mockups */}
          <div className="relative">
            <motion.img
              src={phone}
              alt="Phone mockup 1"
              className="w-[220px] sm:w-[260px] md:w-[300px] relative z-10 rotate-[-10deg] "
              initial={{opacity:0,rotate:0,y:-20}}
              whileInView={{opacity:1,rotate:-10,y:0}}
              viewport={{once:true,amount:0.5}}
              transition={{duration:1.2,ease:"easeOut"}}
            />
            <motion.img
              src={phone}
              alt="Phone mockup 2"
              className="w-[220px] sm:w-[260px] md:w-[300px] absolute top-10 lg:left-28 rotate-[10deg] sm:left-1/3"
              initial={{opacity:0,y:-20,rotate:0}}
              whileInView={{opacity:1,rotate:10,y:0}}
              transition={{duration:1.2,ease:"easeOut"}}
              viewport={{once:true,amount:0.5}}
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E375F]">
            Everything you need to<br/> run people operations
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
            From client management to payments — EliMax.ai streamlines your fitness & wellness business in one place.
          </p>
          <a
            href="#"
            className="text-purple-900 font-semibold mt-4 inline-block hover:underline"
          >
            Request Demo →
          </a>
        </div>
      </div>
    </section>
  );
}
