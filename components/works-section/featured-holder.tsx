'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// List of featured works
const featuredWorks = [
    {
        img: '/featured/monobit/splash.webp',
        title: "Monobit",
        link: '/monobit',
    },
]

export default function Holder() {

    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        // Select all sections to be stacked
        const sections = gsap.utils.toArray<HTMLElement>('.featured-section');

        const triggers = sections.map((panel, index) => {
            const remainingPanels = sections.length - index - 1;
            const pinDuration = remainingPanels * window.innerHeight;

            return ScrollTrigger.create({
                trigger: panel,
                start: 'top top',
                end: () => `+=${pinDuration}`,
                pin: true,
                pinSpacing: false,
            });
        });

        const handleResize = () => {
            // Recalculate on resize
            ScrollTrigger.refresh();
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            triggers.forEach(t => t.kill());
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);


    return (
        <div ref={ref} className="relative min-w-full min-h-full overflow-hidden">
            {featuredWorks.map((work, index) => (
                <Link href={work.link} key={index} className="featured-section w-full h-full min-h-screen flex flex-col justify-center items-center">
                    <Image className="absolute inset-0 object-cover w-full h-full brightness-50 rounded-4xl z-0" src={work.img} alt={work.title} />
                    <h1 className="relative w-full text-6xl lg:text-8xl text-center font-bold uppercase z-10">{work.title}</h1>
                </Link>
            ))}
        </div>
    );
}

