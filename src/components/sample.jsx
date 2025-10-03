import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const frames = 24; // total number of images

export default function ScrollImageSequence() {
  const ref = useRef(null);

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frames - 1]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    return frameIndex.on("change", (latest) => {
      setIndex(Math.floor(latest));
    });
  }, [frameIndex]);

  // Preload frames
  useEffect(() => {
    for (let i = 0; i < frames; i++) {
      const img = new Image();
      img.src = `assets/frames/${String(i).padStart(3, "0")}.png`;
    }
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[200vh] bg-black" // 👈 added relative
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.img
          key={index}
          src={`/frames/${String(index).padStart(3, "0")}.png`}
          alt="scroll sequence"
          className="max-w-[700px] w-full object-contain"
        />
      </div>
    </section>
  );
}
