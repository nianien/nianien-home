'use client';

import { createContext, useContext } from 'react';
import { dict, type Dict } from '@/lib/i18n';

type Ctx = { t: Dict };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <LangContext.Provider value={{ t: dict.zh }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
