"use client";

import { useEffect, useState } from "react";

function TimeCapsule() {
    const [time, setTime] = useState("");
    const [greeting, setGreeting] = useState("");

    // Function to update time and greeting
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            setTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);

            if (hours < 12) {
                setGreeting("Good morning from the Philippines!");
            } else if (hours < 18) {
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
        <div className="w-full flex border-gray-600 border-2 rounded-full overflow-hidden">
            <div>
                <p className="w-max px-4 text-base font-extralight">{time}</p>
            </div>
            <div className="flex overflow-hidden space-x-4">
                <p className="animate-marquee text-base whitespace-nowrap font-extralight">{greeting}</p>
                <p className="animate-marquee text-base whitespace-nowrap font-extralight">{greeting}</p>
            </div>
        </div>
    );

}
export default TimeCapsule;