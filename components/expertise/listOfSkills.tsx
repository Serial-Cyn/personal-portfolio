'use client';

import ScrollFloat from "../ScrollFloat";

export default function ListOfSkills() {
  const skills = [
    "Web Development",
    "UI/UX Design",
    "Game Development",
    "Java Development",
    "C++ Development",
  ];

  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index} className="py-8 text-2xl border-b-1 border-gray-600">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            {skill}
          </ScrollFloat>
        </li>
      ))}
    </ul>
  );
}
