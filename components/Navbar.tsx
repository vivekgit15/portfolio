"use client";

import { useScrollSpy } from "@/lib/useScrollSpy";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const activeId = useScrollSpy();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        <span className="font-bold">Vivek</span>

        <div className="flex gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                activeId === link.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
