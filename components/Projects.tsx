import AnimateIn from "@/components/AnimateIn";

const PROJECTS = [
  {
    title: "Notes App",
    description:
      "A full CRUD notes application with local storage, clean UI, and scalable component structure.",
    tags: ["React", "TypeScript", "Tailwind"],
    live: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with Next.js, App Router, and glassmorphism UI patterns.",
    tags: ["Next.js", "TypeScript", "shadcn/ui"],
    live: true,
  },
  {
    title: "URL Shortener",
    description:
      "A backend-focused project handling URL generation, redirection, and basic analytics.",
    tags: ["Node.js", "Express", "MongoDB"],
    live: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 pt-24 pb-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <AnimateIn>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Projects{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              I’ve Built
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            A selection of projects that demonstrate my approach to building
            clean, scalable, and production-ready applications.
          </p>
        </AnimateIn>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <AnimateIn key={project.title}>
              <ProjectCard project={project} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

function ProjectCard({
  project,
}: {
  project: {
    title: string;
    description: string;
    tags: string[];
    live: boolean;
  };
}) {
  return (
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
      {/* subtle accent */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />

      {/* header */}
      <div className="relative flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        {project.live && (
          <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Live
          </span>
        )}
      </div>

      {/* description */}
      <p className="relative text-gray-400 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* tags */}
      <div className="relative flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full px-3 py-1 text-xs
              bg-white/10 border border-white/10
              text-gray-300
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* actions */}
      <div className="relative flex gap-3">
        <button className="rounded-lg px-4 py-2 text-sm bg-white/10 border border-white/10 hover:bg-white/15 transition">
          GitHub
        </button>
        <button className="rounded-lg px-4 py-2 text-sm bg-white/10 border border-white/10 hover:bg-white/15 transition">
          Live Demo
        </button>
      </div>
    </div>
  );
}

