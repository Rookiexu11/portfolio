import { AlertCircle, Zap, TrendingUp, Car, Brain } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    tag: '汽车生态 · 研发效能',
    icon: Car,
    title: '头部智驾企业 ASPICE 合规与研发体系赋能',
    subtitle: '某头部智能驾驶/座舱企业',
    challenge: '解决主机厂极度严苛的敏捷交付要求与跨部门研发割裂痛点。',
    action:
      '采取"高层破局+底层共创"策略，搭建专属场景 PoC，将工具推销升维为效能咨询。',
    result:
      '签下百万级综合大单，助力客户接住高频敏捷交付节奏，打造成汽车生态圈标杆案例。',
    accent: 'blue',
  },
  {
    tag: 'AI 落地 · 数据安全',
    icon: Brain,
    title: '纯本地化 AI 知识库与智能问答落地',
    subtitle: '某头部企业',
    challenge: '突破企业严苛数据安全红线，解决海量技术文档检索难题。',
    action:
      '独立主导技术方案设计，搭建基于大模型检索增强（RAG）的知识库 Demo 并完成完整演示。',
    result:
      '打破选型僵局全流程签单，并将该 AI 应用从研发侧成功横向复制至客服与运营线。',
    accent: 'teal',
  },
];

const steps = [
  { icon: AlertCircle, label: '挑战' },
  { icon: Zap, label: '行动' },
  { icon: TrendingUp, label: '成果' },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  const Icon = project.icon;

  const accentClass =
    project.accent === 'teal'
      ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20'
      : 'bg-accent-500/10 text-accent-600 dark:text-accent-400 border-accent-500/20';

  const resultAccent =
    project.accent === 'teal'
      ? 'bg-teal-500/8 dark:bg-teal-500/10 border-teal-500/25'
      : 'bg-accent-500/8 dark:bg-accent-500/10 border-accent-500/25';

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 flex flex-col h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-xl hover:shadow-zinc-900/8 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Card header */}
      <div className="p-8 pb-6">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className={`p-3 rounded-xl border ${accentClass}`}>
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <span className={`text-xs font-medium px-3 py-1 rounded-full border ${accentClass}`}>
            {project.tag}
          </span>
        </div>

        <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-2">{project.subtitle}</p>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
          {project.title}
        </h3>
      </div>

      <div className="px-8 pb-8 flex flex-col gap-4 flex-1">
        {[project.challenge, project.action, project.result].map((content, i) => {
          const Step = steps[i];
          const StepIcon = Step.icon;
          return (
            <div key={i} className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <StepIcon size={12} className="text-zinc-500 dark:text-zinc-400" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mb-1">
                  {Step.label}
                </p>
                <p className={`text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed ${i === 2 ? `px-3 py-2 rounded-lg border ${resultAccent}` : ''}`}>
                  {content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="opacity-0 translate-y-6 mb-14">
          <p className="text-xs font-mono text-accent-500 dark:text-accent-400 uppercase tracking-widest mb-3">
            Key Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            代表标杆项目
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
