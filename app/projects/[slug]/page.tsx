import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
      images: [`/og/${project.slug}.png`],
      type: "article",
    },
    twitter: { card: "summary_large_image" },
  };
}

const sections = [
  { key: "problem", title: "왜 만들었나" },
  { key: "build", title: "어떻게 만들었나" },
  { key: "result", title: "결과" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-24">
      <nav className="pt-10">
        <Link
          href="/"
          className="text-sm text-zinc-500 transition hover:text-zinc-200"
        >
          ← 전체 프로젝트
        </Link>
      </nav>

      <header className="mt-10">
        <div className="flex items-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{ background: `${project.accent}22`, color: project.accent }}
          >
            {project.category}
          </span>
          {project.highlight && (
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
              {project.highlight}
            </span>
          )}
          <span className="text-xs text-zinc-600">{project.year}</span>
        </div>
        <h1 className="mt-4 text-4xl font-black sm:text-5xl">{project.name}</h1>
        <p className="mt-3 text-lg text-zinc-400">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-5 py-2 text-sm font-bold text-white transition hover:opacity-90"
              style={{ background: project.accent }}
            >
              라이브로 보기 ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300 transition hover:border-zinc-400 hover:text-white"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </header>

      {project.screenshot && (
        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-800">
          <Image
            src={project.screenshot}
            alt={`${project.name} 스크린샷`}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
            priority
          />
        </div>
      )}

      <article className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.key}>
            <h2
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: project.accent }}
            >
              {s.title}
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-300">
              {project[s.key]}
            </p>
          </section>
        ))}

        <section>
          <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase">
            기술 스택
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </article>

      <div className="mt-16 border-t border-zinc-800 pt-8">
        <p className="text-sm text-zinc-500">다음 프로젝트</p>
        <Link
          href={`/projects/${next.slug}`}
          className="mt-2 inline-block text-xl font-bold text-zinc-200 transition hover:text-white"
        >
          {next.name} →
        </Link>
      </div>
    </main>
  );
}
