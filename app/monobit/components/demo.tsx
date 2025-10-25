"use client";

import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function Demo() {
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
    <section id="demo" className="hidden lg:flex w-full h-screen p-6">
      <motion.div
        ref={ref}
        className="w-full h-full"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <iframe
          title="Figma prototype"
          className="w-full h-full border-0 rounded-2xl"
          src="https://embed.figma.com/proto/Lpmarxfv5IuZxLBSfuQkfJ/2B-%7C-MAMPLATA--CHRISTIAN-B.---HCI?node-id=1289-78458&scaling=scale-down&content-scaling=fixed&page-id=1017%3A19490&starting-point-node-id=1289%3A78458&show-proto-sidebar=1&embed-host=share"
          allowFullScreen
          loading="lazy"
          style={{
            height:
              "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
          }}
        />
      </motion.div>
    </section>
  );
}
