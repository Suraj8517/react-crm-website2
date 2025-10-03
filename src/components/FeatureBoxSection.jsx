import React from "react";
import features from "../datas/features";
import { motion } from "framer-motion";

export default function FeatureBoxSection() {
  const iconVariants = {
    hidden: { borderRadius: "75px", rotate: -20 },
    visible: { rotate: 0, borderRadius: "10px", transition: { duration: 2, ease: "easeInOut" } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { backgroundColor: "#ffd700", transition: { duration: 0.2 } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-purple-100 py-12 lg:px-16">
      <div className="max-w-5xl mt-4 mx-auto text-center space-y-4">
        <h2 className="text-purple-900 font-bold text-3xl md:text-4xl">
          Why Choose Us?
        </h2>
        <p className="text-gray-700">
          Discover all the reasons to grow with our platform
        </p>

        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white px-4 pt-6 pb-12 shadow-lg mt-12 rounded-2xl transition transform duration-300 hover:translate-y-2 hover:shadow-xl"
              variants={cardVariants}
            >
              <motion.div
                className="w-12 h-12 flex items-center justify-center mb-8 bg-gradient-to-br from-[#D8B4FE] to-[#7E22CE] rounded-lg transition duration-300"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true, amount: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h1 className="font-bold text-purple-900 text-start mb-4">
                {feature.title}
              </h1>
              <p className="text-gray-600 text-start">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
