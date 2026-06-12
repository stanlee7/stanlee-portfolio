"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, type Category, type Project } from "@/data/projects";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | "전체">("전체");
  const visible =
    filter === "전체" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {(["전체", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              filter === c
                ? "bg-indigo-500 font-medium text-white"
                : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition hover:-translate-y-1 hover:border-zinc-600"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
              {p.screenshot ? (
                <Image
                  src={p.screenshot}
                  alt={`${p.name} 스크린샷`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div
                  className="flex h-full items-center justify-center text-5xl font-black text-white/90"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}66, #18181b)`,
                  }}
                >
                  {p.name.charAt(0)}
                </div>
              )}
              {p.highlight && (
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {p.highlight}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  style={{ background: `${p.accent}22`, color: p.accent }}
                >
                  {p.category}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
                {p.tagline}
              </p>
              <p className="mt-3 truncate text-xs text-zinc-600">
                {p.stack.join(" · ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
