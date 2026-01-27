import AnimateIn from "@/components/AnimateIn";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 pt-10 pb-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-1/3 right-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mb-20">
            Who I am, how I think, and what I focus on as a software developer.
          </p>
        </AnimateIn>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT MAIN CARD */}
          <AnimateIn>
            <div
              className="
                relative rounded-3xl p-8 md:p-10
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-2xl
              "
            >
              {/* subtle gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />

              <h3 className="relative text-2xl font-semibold mb-6">
                Developer Profile
              </h3>

              <p className="relative text-gray-300 leading-relaxed mb-5">
                I am a BCA student and aspiring software developer focused on
                building clean, scalable, and production-ready applications.
                My core strengths include Java, Data Structures, and modern
                full-stack development using Next.js and TypeScript.
              </p>

              <p className="relative text-gray-400 leading-relaxed">
                I prioritize real-world engineering practices—clear architecture,
                maintainable code, and user-focused design—over shortcuts or
                superficial implementations.
              </p>

              {/* stats */}
              <div className="relative mt-10 grid grid-cols-3 gap-6">
                <Stat label="Projects Built" value="10+" />
                <Stat label="Tech Stack" value="MERN" />
                <Stat label="Focus" value="Full-Stack" />
              </div>
            </div>
          </AnimateIn>

          {/* RIGHT STACKED CARDS */}
          <AnimateIn>
            <div className="grid gap-6">
              <GlassPoint
                title="Engineering Mindset"
                text="I value structure, readability, and long-term maintainability over quick fixes."
              />
              <GlassPoint
                title="Hands-on Learning"
                text="Most of my learning comes from building, breaking, debugging, and rebuilding real systems."
              />
              <GlassPoint
                title="Career Direction"
                text="Actively preparing for software developer roles where I can grow with real-world responsibility."
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function GlassPoint({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        rounded-2xl p-6
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-lg
        hover:shadow-purple-500/10
        transition
      "
    >
      <h4 className="font-medium text-lg mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-black/30 border border-white/10 p-4 text-center">
      <p className="text-xl font-semibold">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{label}</p>
    </div>
  );
}
