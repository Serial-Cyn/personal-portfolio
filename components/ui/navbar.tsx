"use client";

import Link from "next/link";
import Button from "./button";
import { Tooltip } from "./tooltip";
import MenuBar from "./menu-bar";

export default function Navbar() {
  function handleClick() {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function TooltipContent() {
    return <div>Still compiling my projects... (coming soon!)</div>;
  }

  return (
    <nav>
      <div className="fixed top-0 w-screen h-auto p-6 pb-3 md:pb-4 flex justify-center items-center bg-zinc-950/50 backdrop-blur-sm z-50">
        <Link className="w-1/4" href={"#home"}>
          <h1 className="text-base md:text-lg font-light tracking-wider pointer-events-none select-none">
            CHRISTIAN
          </h1>
          <h1 className="pl-4 text-base md:text-lg font-light tracking-wider pointer-events-none select-none">
            MAMPLATA
          </h1>
        </Link>
        <div className="w-full">
          <ul className="hidden w-full md:flex justify-end items-center text-lg font-medium space-x-12 lg:space-x-16">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#expertise">Expertise</Link>
            </li>
            {/* Remove Tooltip After Compilation of Projects */}
            <Tooltip content={<TooltipContent />}>
              <li className="cursor-not-allowed">
                {/* <Link href="#projects">Projects</Link> */}
                <p className="text-zinc-600 pointer-events-none select-none">
                  Projects
                </p>
              </li>
            </Tooltip>
            {/* Remove Tooltip After Compilation of Projects */}
            <li>
              <Button
                label="Get in Touch!"
                variant="primary"
                onClick={handleClick}
              />
            </li>
          </ul>
          <div className="md:hidden flex justify-end">
            <MenuBar />
          </div>
        </div>
      </div>
    </nav>
  );
}
