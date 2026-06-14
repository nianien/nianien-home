'use client';

import { useState } from 'react';
import { useLang } from './LanguageProvider';
import { Logo } from './Logo';
import { SITE } from '@/lib/site';

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const toggleLang = () => setLang(lang === 'zh' ? 'en' : 'zh');

  const nav = [
    { href: '#business', label: t.nav.business },
    { href: '#product', label: t.nav.product },
    { href: '#about', label: t.nav.about },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(246,248,246,0.78)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex flex-col items-center gap-1.5">
          <span className="flex items-center gap-2.5">
            <Logo className="h-10 w-10" />
            <span className="flex flex-col font-display text-[17px] font-extrabold leading-[1.15] tracking-tight text-ink">
              <span>{SITE.nameZh.slice(0, 2)}</span>
              <span>{SITE.nameZh.slice(2)}</span>
            </span>
          </span>
          <span className="text-[11px] font-medium leading-none tracking-wide text-brand-600">
            {t.tagline}
          </span>
        </a>

        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-7 md:flex">
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

          <button
            onClick={toggleLang}
            className="hidden h-8 items-center gap-1.5 rounded-full border border-[rgba(11,34,24,0.12)] px-3 text-[13px] font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700 sm:inline-flex"
            aria-label="Switch language"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
            </svg>
            {t.langLabel}
          </button>

          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-brand-700 sm:inline-flex"
          >
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
        <nav className="glass absolute inset-x-4 top-[84px] rounded-2xl p-3 md:hidden">
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
          <button
            onClick={() => {
              toggleLang();
              setOpen(false);
            }}
            className="mt-1 block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-brand-700 hover:bg-white/60"
          >
            {t.langLabel}
          </button>
        </nav>
      )}
    </header>
  );
}
