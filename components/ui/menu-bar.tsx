import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "HOME", href: "#home", number: "01" },
    { name: "ABOUT", href: "#about", number: "02" },
    { name: "EXPERTISE", href: "#expertise", number: "03" },
    { name: "PROJECTS", href: "#projects", number: "04", disabled: true },
    { name: "CONTACT", href: "#contact", number: "05" },
  ];

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "text-zinc-800" : "text-zinc-400"
        } z-50 relative`}
      >
        MENU
      </button>

      <motion.div
        initial={{
          opacity: 1,
          x: 1000,
        }}
        animate={
          isOpen
            ? { opacity: 1, x: 0 }
            : {
                opacity: 1,
                x: 1000,
              }
        }
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-screen h-screen px-6 bg-zinc-200"
      >
        <ul className="flex flex-col justify-center items-start sm:items-end h-full gap-8 text-6xl font-bold text-zinc-900 select-none">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex justify-center items-start gap-2"
            >
              {item.disabled ? (
                <h1 className="text-zinc-500 flex justify-center items-start gap-2">
                  {item.name}
                  <p className="text-lg">{item.number}</p>
                </h1>
              ) : (
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="flex justify-center items-start gap-2"
                >
                  {item.name}
                  <p className="text-lg">{item.number}</p>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
