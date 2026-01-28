import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-[-15%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-1/2 right-[-15%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
      

        {/* education list */}
        <div className="space-y-6">
          <EducationCard
            degree="BCA (Bachelor of Computer Applications)"
            institute="Netaji Subhas University"
            year="2022 – 2025"
            location="Jharkhand, India"
          />

        </div>
      </div>
    </section>
  );
}

/* ---------- card ---------- */

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
        <h3 className="text-lg font-semibold mb-1">
          {degree}
        </h3>

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
