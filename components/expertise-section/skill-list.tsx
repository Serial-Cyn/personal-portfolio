'use client';

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function SkillList() {
  const skills = [
    "Web Development",
    "UI/UX Design",
    "Game Development",
    "Java Development",
    "C++ Development",
  ];

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
    <motion.ul
      ref={ref}
      className="mt-16 text-4xl sm:text-6xl font-light"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ 
        visible: { 
          transition: { 
            staggerChildren: 0.2, 
          }, 
        }, 
      }}
    >
      {skills.map((skill, index) => (
        <motion.li
          key={index}
          className="py-16 border-b-2 border-zinc-600"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  );
}
