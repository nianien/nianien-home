'use client';

import { Logo } from './Logo';

// The product as hero: a memory-recall conversation that shows
// "念念不忘，必有回音" in action — the assistant remembers, and answers.
export function ProductMock({
  appName,
  appRole,
  privacy,
  userMsg,
  aiMsg,
  memoryTag,
}: {
  appName: string;
  appRole: string;
  privacy: string;
  userMsg: string;
  aiMsg: string;
  memoryTag: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* ambient echo behind the device */}
      <div className="pointer-events-none absolute -inset-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(110,231,183,0.35),transparent_62%)]" />
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="sonar-ring absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ animationDelay: `${i * 1.4}s`, border: '1px solid rgba(16,185,129,0.35)' }}
          />
        ))}
      </div>

      {/* the app card */}
      <div className="blur-in glass relative overflow-hidden rounded-[28px] p-5 shadow-[0_50px_100px_-40px_rgba(6,36,26,0.4)]">
        {/* top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-brand-100">
              <Logo className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm font-bold text-ink">{appName}</div>
              <div className="text-[11px] text-ink-mute">{appRole}</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-700 ring-1 ring-brand-100">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            {privacy}
          </span>
        </div>

        {/* conversation */}
        <div className="mt-6 space-y-4">
          {/* user bubble */}
          <div className="flex justify-end">
            <div className="max-w-[78%] rounded-[18px] rounded-tr-sm bg-brand-600 px-4 py-2.5 text-[13px] leading-relaxed text-white shadow-sm">
              {userMsg}
            </div>
          </div>

          {/* memory recall chip */}
          <div className="flex items-center gap-2 pl-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/70 px-2.5 py-1 text-[10px] font-semibold text-brand-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              {memoryTag}
            </span>
          </div>

          {/* ai bubble */}
          <div className="flex justify-start">
            <div className="max-w-[88%] rounded-[18px] rounded-tl-sm bg-white px-4 py-3 text-[13px] leading-relaxed text-ink shadow-sm ring-1 ring-[rgba(11,34,24,0.06)]">
              {aiMsg}
            </div>
          </div>
        </div>

        {/* input row (decorative) */}
        <div className="mt-6 flex items-center gap-2 rounded-full border border-[rgba(11,34,24,0.1)] bg-white/60 px-4 py-2.5">
          <span className="flex-1 text-[12px] text-ink-mute">想问点什么…</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>

      {/* floating proof chip */}
      <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl glass px-3.5 py-2.5 shadow-lg">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        <span className="text-[11px] font-semibold text-ink">数据只在你的设备上</span>
      </div>
    </div>
  );
}
