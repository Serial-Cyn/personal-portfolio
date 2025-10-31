import Motion from "../ui/motion";

export default function SkillList() {
  const skills = [
    "C++",
    "Java",
    "Python",
    "React",
    "Tailwind",
    "TypeScript",
    "UI/UX Design",
    "Godot Engine",
    "SQL",
  ];

  return (
    <Motion>
      <ul className="mt-16 text-4xl sm:text-6xl font-light">
        {skills.map((skill, index) => (
          <Motion key={index}>
            <li className="py-16 border-b-2 border-zinc-600">{skill}</li>
          </Motion>
        ))}
      </ul>
    </Motion>
  );
}
