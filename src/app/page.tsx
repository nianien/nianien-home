'use client';

import { useLang } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import { Logo } from '@/components/Logo';
import { Reveal } from '@/components/Reveal';
import { SITE } from '@/lib/site';

export default function Home() {
  return (
    <>
      <div className="flowlight" />
      <div className="pagedots" />
      <div className="grain" />
      <Header />
      <main id="top" className="relative z-[2]">
        <Business />
        <Product />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}

/* ============================ BUSINESS — stacked direction panels ============================ */
function Business() {
  const { t } = useLang();
  return (
    <section id="business" className="relative scroll-mt-24 pb-28 pt-32 sm:pb-36 sm:pt-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="mb-16 flex flex-col items-center text-center">
          <h1 className="font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-extrabold leading-tight tracking-tight text-ink">
            {t.hero.lead}
            <span className="text-gradient">{t.hero.accent}</span>
          </h1>
          <p className="mt-5 text-[clamp(1rem,2vw,1.25rem)] font-medium tracking-wide text-ink-soft">
            {t.hero.subtitle}
          </p>
          <span className="mt-12 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-[rgba(11,34,24,0.16)] to-transparent" />
        </Reveal>
        <div className="grid gap-5 lg:auto-rows-fr lg:grid-cols-6">
          {t.business.items.map((b, i) => {
            const feature = i === 0;
            return (
              <Reveal key={b.name} delay={i * 70} className={feature ? 'lg:col-span-3 lg:row-span-2' : 'lg:col-span-3'}>
                {feature ? (
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 p-9 text-white shadow-[0_30px_70px_-30px_rgba(16,185,129,0.55)] transition-transform duration-500 hover:-translate-y-1.5 sm:p-10">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)]" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="relative">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm">
                        <BizIcon index={i} />
                      </span>
                      <h3 className="mt-8 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{b.name}</h3>
                      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/90">{b.desc}</p>
                    </div>
                    <div className="relative mt-10 flex flex-wrap gap-2">
                      {b.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ) : (
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-200/70 bg-gradient-to-br from-brand-50 via-white to-brand-100/50 p-7 shadow-[0_12px_44px_-28px_rgba(16,185,129,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_40px_80px_-34px_rgba(16,185,129,0.55)]">
                    <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.18),transparent_70%)] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-[0_14px_30px_-10px_rgba(16,185,129,0.7)] ring-1 ring-inset ring-white/40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <BizIcon index={i} />
                    </span>
                    <h3 className="relative mt-5 font-display text-xl font-bold tracking-tight text-ink">{b.name}</h3>
                    <p className="relative mt-3 text-[14px] leading-relaxed text-ink-soft">{b.desc}</p>
                    <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                      {b.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-brand-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-brand-700 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ PRODUCT — Pikppo showcase ============================ */
function Product() {
  const { t } = useLang();
  const p = t.product;
  return (
    <section id="product" className="relative scroll-mt-24 pb-20 pt-8 sm:pb-24 sm:pt-10">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="relative grid gap-10 overflow-hidden rounded-3xl border border-brand-200/70 bg-gradient-to-br from-brand-50 via-white to-brand-100/50 p-8 shadow-[0_16px_50px_-30px_rgba(16,185,129,0.5)] sm:p-12 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.16),transparent_70%)]" />

            {/* left: product intro */}
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/60 bg-white/70 px-3.5 py-1 text-xs font-medium text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {p.title}
              </span>
              <div className="mt-5 font-display text-[clamp(2.6rem,6vw,4rem)] font-extrabold leading-none tracking-tight text-gradient">
                {p.name}
              </div>
              <p className="mt-4 font-display text-2xl font-bold text-ink">{p.tagline}</p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">{p.desc}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(5,150,105,0.7)] transition-all hover:bg-brand-700 hover:-translate-y-0.5"
              >
                {p.cta}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>

            {/* right: feature list */}
            <div className="relative space-y-4">
              {p.features.map((f) => (
                <div
                  key={f.name}
                  className="rounded-2xl border border-brand-200/60 bg-white/70 p-5 backdrop-blur-sm transition-colors hover:border-brand-300"
                >
                  <div className="flex items-center gap-2.5 font-display text-[15px] font-bold text-ink">
                    <span className="h-2 w-2 rounded-sm bg-gradient-to-br from-brand-400 to-brand-600" />
                    {f.name}
                  </div>
                  <p className="mt-2 pl-[18px] text-[13.5px] leading-relaxed text-ink-soft">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ ABOUT — heading + plain statement ============================ */
function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold tracking-tight text-ink">
            {t.about.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-7 max-w-[40ch] text-[clamp(1.05rem,1.7vw,1.35rem)] font-normal leading-[1.8] text-ink-soft">
            {t.about.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ FOOTER — three-column, contact merged in ============================ */
function SiteFooter() {
  const { t } = useLang();
  return (
    <footer id="contact" className="relative z-[2] scroll-mt-24 bg-[#eef2ef]">
      <div className="mx-auto max-w-[1240px] px-5 pb-12 pt-20 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {/* brand + mission */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display text-lg font-extrabold text-ink">{SITE.nameZh}</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-mute">{t.footer.desc}</p>
          </div>

          {/* contact details */}
          <div className="max-w-sm">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">{t.contact.title}</h4>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-10 shrink-0 text-ink-mute">{t.contact.emailLabel}</dt>
                <dd>
                  <a
                    href={`mailto:${t.contact.email}`}
                    className="inline-flex items-center text-ink-soft transition-colors hover:text-brand-700"
                  >
                    {t.contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-10 shrink-0 text-ink-mute">{t.contact.addressLabel}</dt>
                <dd className="leading-relaxed text-ink-soft">{t.contact.address}</dd>
              </div>
            </dl>
          </div>

          {/* WeChat official account QR */}
          <div className="flex flex-col items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wechat-qr.png"
              alt={`${SITE.nameZh} · ${t.contact.wechat}`}
              width={108}
              height={108}
              className="h-[108px] w-[108px] rounded-xl border border-[rgba(11,34,24,0.1)] bg-white p-2 shadow-[0_8px_24px_-12px_rgba(11,34,24,0.2)]"
            />
            <span className="text-xs text-ink-mute">{t.contact.wechat}</span>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-[rgba(11,34,24,0.08)] pt-7 text-[12px] text-ink-mute/80 sm:flex-row">
          <span>© 2026 {t.footer.company} · {t.footer.rights}</span>
          <a
            href={t.footer.icpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-700"
          >
            {t.footer.icp}
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================ ICONS ============================ */
function BizIcon({ index }: { index: number }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  const paths = [
    <g key="0"><circle cx="12" cy="8" r="4" /><path d="M5 21v-1a7 7 0 0 1 14 0v1" /></g>,
    <g key="1"><path d="M12 21s-8-4.5-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 11c0 5.5-8 10-8 10z" /></g>,
    <g key="2"><path d="M4 6h16M4 12h16M4 18h10" /></g>,
    <g key="3"><path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" /></g>,
    <g key="4"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" /><path d="M19 17H6a2 2 0 0 0-2 2" /></g>,
  ];
  return <svg {...common}>{paths[index] ?? paths[0]}</svg>;
}
