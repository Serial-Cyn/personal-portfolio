'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// List of featured works
const featuredWorks = [
    {
        img: '/featured/monobit-splash.webp',
        title: "Monobit",
        link: '',
    },
    {
        img: '/featured/monobit-splash.webp',
        title: "Java Heroes",
        link: '',
    },
]

export default function Holder() {

    const containerRef = useRef(null);

    useEffect(() => {
        // Select all sections to be pinned
        const sections = gsap.utils.toArray<HTMLElement>('.featured-section');

        // Pin each section as the user scrolls
        sections.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                pinSpacing: false,
            });

            // Fade out the last panel
            const lastPanel = sections[sections.length - 1];

            gsap.to(lastPanel, {
                opacity: 0,
                yPercent: 0,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: lastPanel,
                    start: "center center",
                    end: "center bottom",
                    scrub: true,
                },
            });
        });

        // Cleans up ScrollTriggers on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }

    });


    return (
        <div ref={containerRef} className="relative min-w-full min-h-full overflow-hidden">
            {featuredWorks.map((work, index) => (
                <div key={index} className="featured-section w-full h-full min-h-screen flex flex-col justify-center items-center">
                    <img className="absolute inset-0 object-cover w-full h-full brightness-50 rounded-4xl z-0" src={work.img} alt={work.title} />
                    <h1 className="relative w-full text-6xl lg:text-8xl text-center font-bold uppercase z-10">{work.title}</h1>
                </div>
            ))}
        </div>
    );
}

