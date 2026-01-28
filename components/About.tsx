import Image from "next/image";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-1/3 right-[-15%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
            Get to know me
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Who I am, how I think, and what I focus on as a software developer.
          </p>
        </div>

        {/* ABOUT CONTENT */}
        <div className="flex flex-col md:flex-row gap-14 items-start mb-24">
          {/* IMAGE */}
          <div className="shrink-0">
            <div className="relative w-[220px] h-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/images/vivek.jpg"
                alt="Vivek - Software Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-1">
              Vivek
            </h3>

            <p className="text-blue-400 mb-6">
              Software Developer
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              I am a BCA student and aspiring software developer focused on
              building clean, scalable, and production-ready applications.
              My core strengths include Java, Data Structures, and modern
              full-stack development using Next.js and TypeScript.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I prioritize real-world engineering practices—clear architecture,
              maintainable code, and user-focused design—over shortcuts.
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">
            Education
          </h3>

          <div className="space-y-6">
            <EducationCard
              degree="BCA (Bachelor of Computer Applications)"
              institute="Netaji Subhas University"
              year="2022 – 2025"
              location="Jharkhand, India"
            />

            <EducationCard
              degree="Diploma in Computer Science"
              institute="Birla Institute of Technology"
              year="2024"
              location="Mesra, Ranchi, JH"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Education Card ---------- */

function EducationCard({
  degree,
  institute,
  year,
  location,
}: {
  degree: string;
  institute: string;
  year: string;
  location: string;
}) {
  return (
    <div
      className="
        flex gap-5 items-start
        rounded-2xl p-6 md:p-7
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-lg
      "
    >
      {/* icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        <GraduationCap size={22} />
      </div>

      {/* content */}
      <div>
        <h4 className="text-lg font-semibold mb-1">
          {degree}
        </h4>

        <p className="text-gray-300 mb-2">
          {institute}
        </p>

        <div className="text-sm text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
          <span>{year}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
