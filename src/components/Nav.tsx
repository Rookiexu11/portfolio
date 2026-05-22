import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavProps {
  dark: boolean;
  onToggle: () => void;
}

const links = [
  { label: '能力', href: '#competencies' },
  { label: '项目', href: '#projects' },
  { label: '经历', href: '#experience' },
  { label: '联系', href: '#contact' },
];

export default function Nav({ dark, onToggle }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm border-b border-zinc-200/60 dark:border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight text-sm"
        >
          徐晨晖
          <span className="ml-2 text-accent-500 font-mono text-xs">XCH</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <nav className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-b border-zinc-200/60 dark:border-zinc-800/60">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-accent-500 dark:hover:text-accent-400 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
