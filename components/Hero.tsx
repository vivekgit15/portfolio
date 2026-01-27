import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
        {/* LEFT */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Hello, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vivek
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
            Software developer building clean, scalable, production-ready web
            applications using Next.js, TypeScript, and modern tooling.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-gray-300">
              Next.js
            </span>
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-gray-300">
              TypeScript
            </span>
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-gray-300">
              Node.js
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <p className="text-sm tracking-widest text-gray-400">
                CURRENTLY BUILDING
              </p>
              <span className="inline-flex items-center gap-2 text-xs rounded-full bg-green-500/10 px-3 py-1 text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Live
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">
                Full-stack web applications
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                React · Next.js · Node.js · MongoDB
              </p>

              <pre className="rounded-xl bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
{`$ npx create-next-app my-app
✓ TypeScript
✓ Tailwind CSS
✓ App Router

→ Built REST APIs
→ Auth & validation
→ Deployed to production`}
              </pre>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-gray-400">Focus</p>
                  <p className="font-medium mt-1">Clean code & UX</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-gray-400">Stack</p>
                  <p className="font-medium mt-1">MERN + Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
