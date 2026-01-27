import AnimateIn from "@/components/AnimateIn";

const SKILLS = [
  {
    title: "Frontend",
    color: "from-blue-500/20 to-blue-500/0",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    color: "from-purple-500/20 to-purple-500/0",
    skills: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    title: "Tools & Practices",
    color: "from-emerald-500/20 to-emerald-500/0",
    skills: [
      "Git & GitHub",
      "Linux",
      "Nginx",
      "PM2",
      "shadcn/ui",
      "Zod",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24  elative"
    >
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <h2 className="text-5xl font-bold mb-4">Skills</h2>
          <p className="text-gray-400 max-w-2xl mb-14">
            A focused set of technologies I use to build modern, scalable,
            and production-ready applications.
          </p>
        </AnimateIn>

        <div className="grid gap-8 md:grid-cols-3">
          {SKILLS.map((group) => (
            <AnimateIn key={group.title}>
              <div
                className="
                  relative rounded-2xl p-6
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  shadow-lg
                  hover:shadow-blue-500/10
                  transition
                "
              >
                {/* gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.color} pointer-events-none`}
                />

                <h3 className="relative text-xl font-semibold mb-4">
                  {group.title}
                </h3>

                <div className="relative flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        px-3 py-1 text-sm
                        bg-white/10
                        border border-white/10
                        text-gray-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
