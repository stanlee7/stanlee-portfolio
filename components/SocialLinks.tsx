import { profile } from "@/data/projects";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Threads", href: profile.threads },
  { label: "X", href: profile.x },
  { label: "Blog", href: profile.blog },
  { label: "Email", href: `mailto:${profile.email}` },
].filter((l) => l.href);

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-300 transition hover:border-indigo-400 hover:text-white"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
