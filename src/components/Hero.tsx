import { Download, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(100,116,139,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/10 dark:bg-accent-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/8 dark:bg-accent-500/10 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
          <span className="text-xs font-medium text-accent-600 dark:text-accent-400 tracking-wide">
            Open to Strategic Partnerships
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4 opacity-0 translate-y-6 animate-fade-in-up"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          徐晨晖
        </h1>

        {/* Title */}
        <p
          className="text-base md:text-lg font-medium text-accent-500 dark:text-accent-400 mb-5 tracking-wide opacity-0 translate-y-6 animate-fade-in-up"
          style={{ animationDelay: '220ms', animationFillMode: 'forwards' }}
        >
          高级商务拓展专家 (BD) · 商业化解决方案专家 · 深耕汽车生态与 AI 科技赛道
        </p>

        {/* Tagline */}
        <p
          className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-balance opacity-0 translate-y-6 animate-fade-in-up"
          style={{ animationDelay: '340ms', animationFillMode: 'forwards' }}
        >
          推动前沿技术与复杂工具链在大客户中的战略落地，实现从 0 到 1 的标杆项目闭环。
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 translate-y-6 animate-fade-in-up"
          style={{ animationDelay: '460ms', animationFillMode: 'forwards' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download size={16} />
            获取完整简历
          </a>
          <a
            href="mailto:xch10400@163.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-accent-500 hover:text-accent-500 dark:hover:border-accent-400 dark:hover:text-accent-400 font-semibold text-sm bg-white/60 dark:bg-zinc-900/60 backdrop-blur transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            联系我
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#competencies"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 dark:text-zinc-600 hover:text-accent-500 transition-colors animate-fade-in opacity-0"
        style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
