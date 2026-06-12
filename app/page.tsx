import { profile, projects, stats } from "@/data/projects";
import ProjectGrid from "@/components/ProjectGrid";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-24">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32">
        <p className="mb-4 text-sm font-medium tracking-widest text-indigo-400 uppercase">
          {profile.name} · Builder &amp; AI Instructor
        </p>
        <h1 className="text-4xl font-black leading-tight sm:text-6xl">
          아이디어를{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            일주일 안에
          </span>
          <br />
          실서비스로.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-400">{profile.bio}</p>

        <div className="mt-10 flex flex-wrap gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-white">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <SocialLinks />
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="mb-2 text-2xl font-bold">프로젝트</h2>
        <p className="mb-8 text-zinc-400">
          전부 실제로 배포된 결과물입니다. 카드를 누르면 만든 이유와 과정을 볼 수
          있습니다.
        </p>
        <ProjectGrid projects={projects} />
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-zinc-800 pt-10 text-sm text-zinc-500">
        <p>
          새 프로젝트와 제작기는 SNS에 먼저 올라옵니다. 협업·강의 문의:{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-zinc-300 underline underline-offset-4 hover:text-white"
          >
            {profile.email}
          </a>
        </p>
        <p className="mt-3">© 2026 {profile.name}. Built with Next.js.</p>
      </footer>
    </main>
  );
}
