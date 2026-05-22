export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          © 2026 徐晨晖. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">
          BD · AI · Automotive Ecosystem
        </p>
      </div>
    </footer>
  );
}
