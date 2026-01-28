import AnimateIn from "@/components/AnimateIn";

const PROJECTS = [
  {
    title: "Inventory Management System",
    description:
      "A full-stack inventory management system with product tracking, logs management, clean UI, and scalable architecture.",
    tags: ["React.js", "JavaScript", "Tailwind", "MongoDB","Ant Design"],
    live: "https://inventory-management-blush-two.vercel.app/",
    github: "https://github.com/vivekgit15/inventory-management-system",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with Next.js, App Router, and glassmorphism UI patterns.",
    tags: ["Next.js", "TypeScript", "Tailwind", "ShadCN"],
    live: "https://github.com/vivekgit15/portfolio",
    github: "https://github.com/vivekgit15/portfolio",
  },
  {
    title: "URL Shortener",
    description:
      "A backend-focused project handling URL generation, redirection, and basic analytics.",
    tags: ["Node.js", "Express", "MongoDB"],
    live: null,
    github: null,
  },
  {
    title: "Contract Management System",
    description:
      "A frontend application ",
    tags: ["Node.js", "Express", "MongoDB"],
    live: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 py-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-1/3 right-[-15%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
              What I’ve built
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
              Projects
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of projects that demonstrate my approach to building
              clean, scalable, and production-ready applications.
            </p>
          </div>
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
    live: string | null;
    github: string | null;
  };
}) {
  return (
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
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />

      {/* header */}
      <div className="relative mb-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
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
            className="rounded-full px-3 py-1.5 text-xs bg-white/10 border border-white/10 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* actions */}
      <div className="relative mt-auto flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm bg-white/10 border border-white/10 hover:bg-white/15 transition"
          >
            GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm bg-white/10 border border-white/10 hover:bg-white/15 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
