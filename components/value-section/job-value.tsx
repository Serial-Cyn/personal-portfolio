"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function JobValue() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 1.0 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="job-value"
      className="w-screen h-screen flex justify-center items-center px-6 text-4xl sm:text-5xl md:text-6xl leading-normal"
    >
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        I design and develop intuitive software solutions that{" "}
        <span className="font-bold text-sky-400">connect</span> with users and
        deliver{" "}
        <span className="font-bold text-sky-400">meaningful experiences.</span>
      </motion.h1>
    </section>
  );
}
