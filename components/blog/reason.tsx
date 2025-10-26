'use client';

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

type ReasonProps = {
  reason: string;
}

export default function Reason({ reason }: ReasonProps) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full mb-16 p-6 flex items-center justify-center">
      <motion.h1
        ref={ref}
        className="text-4xl md:text-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {reason}
      </motion.h1>
    </section>
  );
}
