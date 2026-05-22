import { Users, Cpu, Network } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const items = [
  {
    icon: Users,
    title: '大客户商业拓展',
    desc: '4年ToB复杂标的操盘经验，擅长突破长周期决策链，连续两年斩获公司业绩第一。',
  },
  {
    icon: Cpu,
    title: '技术方案转化',
    desc: '精通DevSecOps工具链及大模型（RAG）场景落地，具备独立演示AI技术Demo及推进POC的能力。',
  },
  {
    icon: Network,
    title: '行业生态破局',
    desc: '深耕智能生态赛道，深刻理解"软件定义汽车"及先进制造业组织协同痛点。',
  },
];

function Card({ icon: Icon, title, desc, delay }: typeof items[0] & { delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 group relative p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-accent-500/60 dark:hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/8 transition-all duration-300"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="mb-5 inline-flex p-3 rounded-xl bg-accent-500/10 dark:bg-accent-500/15 text-accent-500 dark:text-accent-400 group-hover:bg-accent-500/15 dark:group-hover:bg-accent-500/20 transition-colors duration-200">
        <Icon size={22} strokeWidth={1.5} />
      </div>

      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
        {title}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function Competencies() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="competencies" className="py-24 px-6 bg-zinc-50/60 dark:bg-zinc-950/60">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="opacity-0 translate-y-6 mb-14">
          <p className="text-xs font-mono text-accent-500 dark:text-accent-400 uppercase tracking-widest mb-3">
            Core Competencies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            核心能力
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Card key={item.title} {...item} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
