import AnimateIn from "@/components/AnimateIn";

const SKILLS = [
  {
    title: "Frontend",
    color: "from-blue-500/20 to-transparent",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    color: "from-purple-500/20 to-transparent",
    skills: ["Node.js", "Express", "REST APIs", "Authentication"],
  },
  {
    title: "Tools & Practices",
    color: "from-emerald-500/20 to-transparent",
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
      className="relative scroll-mt-24 py-24 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-1/3 right-[-15%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* HEADING */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
              What I use
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
              Skills
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              A focused set of technologies I use to build modern, scalable,
              and production-ready applications.
            </p>
          </div>
        </AnimateIn>

        {/* SKILL CARDS */}
        <div className="grid gap-8 md:grid-cols-3">
          {SKILLS.map((group) => (
            <AnimateIn key={group.title}>
              <div
                className="
                  relative h-full rounded-2xl p-7
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  shadow-lg
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-blue-500/10
                "
              >
                {/* gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.color} pointer-events-none`}
                />

                <h3 className="relative text-xl font-semibold mb-5">
                  {group.title}
                </h3>

                <div className="relative flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        px-3 py-1.5 text-sm
                        bg-white/10
                        border border-white/10
                        text-gray-300
                        hover:bg-white/15
                        transition
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
