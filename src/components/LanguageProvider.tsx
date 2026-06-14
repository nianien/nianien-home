'use client';

import { createContext, useContext, useEffect } from 'react';
import { dict, type Dict } from '@/lib/i18n';

type Ctx = { t: Dict };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Don't let the browser restore the previous scroll position on refresh.
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    // A plain refresh (no #anchor) should start at the very top.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return <LangContext.Provider value={{ t: dict.zh }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
