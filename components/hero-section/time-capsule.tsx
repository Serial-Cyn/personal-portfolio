"use client";

import { useState, useEffect } from "react";

export default function TimeCapsule() {
  const greetStyles = `
        #capsule p {
            white-space: nowrap;
            padding-right: 2rem;
            animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
        }
    `;

  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Get current time in Asia/Manila timezone
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Manila",
      };
      const manilaTimeString = now.toLocaleTimeString("en-US", options);
      setTime(manilaTimeString);

      // Get Manila hour for greeting
      const manilaHour = parseInt(
        now.toLocaleString("en-US", { hour: "2-digit", hour12: false, timeZone: "Asia/Manila" })
      );

      if (manilaHour < 12) {
        setGreeting("Good morning from the Philippines!");
      } else if (manilaHour < 18) {
        setGreeting("Good afternoon from the Philippines!");
      } else {
        setGreeting("Good evening from the Philippines!");
      }
    };

    updateTime(); // Initial call
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <>
      <style>{greetStyles}</style>
      <div
        id="capsule"
        className="absolute bottom-0 w-4/5 sm:w-1/2 mb-8 py-2 flex justify-center items-center 2xl:text-2xl text-zinc-400 border border-zinc-400 rounded-full pointer-events-none"
      >
        <div className="w-1/5 flex justify-center items-center">
          <time>{time}</time>
        </div>
        <div className="w-4/5 flex overflow-x-hidden">
          <p>{greeting}</p>
          <p>{greeting}</p>
          <p>{greeting}</p>
        </div>
      </div>
    </>
  );
}
