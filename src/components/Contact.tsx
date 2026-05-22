import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactItems = [
  {
    icon: Mail,
    label: '邮箱',
    value: 'xch10400@163.com',
    href: 'mailto:xch10400@163.com',
  },
  {
    icon: Phone,
    label: '电话',
    value: '177-2118-2745',
    href: 'tel:+8617721182745',
  },
  {
    icon: MapPin,
    label: '坐标',
    value: '中国 · 上海',
    href: null,
  },
];

export default function Contact() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="opacity-0 translate-y-6 mb-14 text-center">
          <p className="text-xs font-mono text-accent-500 dark:text-accent-400 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            开启合作对话
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto text-sm leading-relaxed">
            如果您正在寻找能够将复杂技术方案转化为商业价值的合作伙伴，欢迎随时联系我。
          </p>
        </div>

        <div
          ref={cardRef}
          className="opacity-0 translate-y-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="group flex flex-col gap-2">
                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 mb-1">
                  <Icon size={14} strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
                </div>
                {href ? (
                  <a
                    href={href}
                    className="inline-flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:text-accent-500 dark:hover:text-accent-400 transition-colors group"
                  >
                    {value}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </a>
                ) : (
                  <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-sm">
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="relative mt-10 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              期待与您共同探索技术商业化的无限可能。
            </p>
            <a
              href="mailto:xch10400@163.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Mail size={15} />
              发送邮件
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
