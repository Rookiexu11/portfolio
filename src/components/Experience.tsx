import { Briefcase } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const jobs = [
  {
    period: '2023.02 — 至今',
    role: '大客户经理 & SonarQube 产品线负责人',
    company: '某数码科技股份有限公司',
    desc: '主导汽车/芯片生态大单直销，负责 SonarQube 新产品线从零搭建至规模化，实现新产品线 50% 业绩增长。',
    tags: ['DevSecOps', '汽车生态', 'AI 工具链', '直销大单'],
    current: true,
  },
  {
    period: '2022.07 — 2022.12',
    role: '技术销售',
    company: 'COMSOL 中国',
    desc: '负责区域高校与科研院所技术推广，深化仿真软件行业认知与技术沟通能力。',
    tags: ['高校市场', '技术推广', '仿真软件'],
    current: false,
  },
];

function JobCard({ job, delay }: { job: typeof jobs[0]; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 relative flex gap-6 md:gap-10"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 transition-colors ${
            job.current
              ? 'bg-accent-500 border-accent-500 text-white shadow-lg shadow-accent-500/30'
              : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-400'
          }`}
        >
          <Briefcase size={16} strokeWidth={1.5} />
        </div>
        <div className="flex-1 w-px bg-zinc-200 dark:bg-zinc-800 mt-2" />
      </div>

      {/* Content */}
      <div className="pb-12 flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="text-xs font-mono text-accent-500 dark:text-accent-400">
            {job.period}
          </span>
          {job.current && (
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20">
              Current
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
          {job.role}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{job.company}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
          {job.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-24 px-6 bg-zinc-50/60 dark:bg-zinc-950/60">
      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="opacity-0 translate-y-6 mb-14">
          <p className="text-xs font-mono text-accent-500 dark:text-accent-400 uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            工作经历
          </h2>
        </div>

        <div>
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
