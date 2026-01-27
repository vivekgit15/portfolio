"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-background border-white/10 hover:border-primary transition">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2 flex-wrap">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300"
            >
              {t}
            </span>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
