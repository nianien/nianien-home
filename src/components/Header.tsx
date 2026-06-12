'use client';

import { useEffect, useState } from 'react';
import { useLang } from './LanguageProvider';
import { Logo } from './Logo';
import { SITE } from '@/lib/site';

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { href: '#business', label: t.nav.business },
    { href: '#product', label: t.nav.product },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <div
        className={`mt-3 flex w-full items-center justify-between transition-all duration-500 ease-out ${
          scrolled
            ? 'max-w-[920px] glass rounded-full px-4 py-2 shadow-[0_18px_50px_-25px_rgba(6,36,26,0.4)]'
            : 'max-w-[1240px] rounded-full px-4 py-2.5'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 pl-2">
          <Logo className="h-9 w-9" />
          <span className="font-display text-[19px] font-extrabold tracking-tight text-ink">
            {SITE.nameZh}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-brand-700 sm:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="glow-pulse absolute inline-flex h-full w-full rounded-full bg-white" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            {t.nav.contact}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink md:hidden"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass absolute left-4 right-4 top-[72px] rounded-3xl p-3 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-white/60"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
