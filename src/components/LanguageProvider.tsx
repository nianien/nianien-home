'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { dict, type Dict, type Lang } from '@/lib/i18n';

type Ctx = { t: Dict; lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Server renders zh; client may switch after mount (no hydration mismatch).
  const [lang, setLangState] = useState<Lang>('zh');

  useEffect(() => {
    // Don't let the browser restore the previous scroll position on refresh.
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (!window.location.hash) window.scrollTo(0, 0);

    // Pick initial language: saved choice, else browser preference.
    const saved = localStorage.getItem('lang');
    const initial: Lang =
      saved === 'zh' || saved === 'en'
        ? saved
        : navigator.language?.toLowerCase().startsWith('zh')
          ? 'zh'
          : 'en';
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {
      /* ignore */
    }
  };

  return <LangContext.Provider value={{ t: dict[lang], lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
