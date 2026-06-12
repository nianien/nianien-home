'use client';

import { useLang } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import { Logo } from '@/components/Logo';
import { Reveal } from '@/components/Reveal';
import { ProductMock } from '@/components/ProductMock';
import { SITE } from '@/lib/site';

export default function Home() {
  return (
    <>
      <div className="flowlight" />
      <div className="pagedots" />
      <div className="grain" />
      <Header />
      <main id="top" className="relative z-[2]">
        <Hero />
        <Business />
        <Product />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 ambient" />
      <div className="pointer-events-none absolute inset-0 enggrid opacity-50" />
      <div className="drift pointer-events-none absolute -top-40 right-[-16%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.12),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 px-5 pb-28 pt-40 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-40 lg:pt-52">
        <div>
          <div className="rise inline-flex items-center gap-2.5 rounded-full glass-soft px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-ink-soft">{t.hero.badge}</span>
          </div>

          <h1 className="rise mt-8 font-display text-[clamp(3rem,8vw,5.6rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-ink" style={{ animationDelay: '0.08s' }}>
            {t.hero.titleLine1}
            <br />
            <span className="text-gradient">{t.hero.titleLine2}</span>
          </h1>

          <p className="rise mt-8 max-w-xl text-[17px] leading-relaxed text-ink-soft" style={{ animationDelay: '0.16s' }}>
            {t.hero.subtitle}
          </p>

          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '0.24s' }}>
            <a
              href="#business"
              className="group glow-edge inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-8 py-4 text-sm font-bold text-brand-800 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_40px_-10px_rgba(16,185,129,0.45)]"
            >
              {t.hero.ctaPrimary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-ink-soft transition-colors hover:text-brand-700"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* product mock — the assistant remembering, in action */}
        <div className="relative hidden lg:block">
          <ProductMock {...t.hero.demo} />
        </div>
      </div>
    </section>
  );
}

/* ============================ BUSINESS — centered title + bento grid ============================ */
function Business() {
  const { t } = useLang();
  // bento spans: first card hero-wide, rest balanced asymmetric
  const spans = [
    'lg:col-span-3 lg:row-span-2',
    'lg:col-span-3',
    'lg:col-span-3',
    'lg:col-span-2',
    'lg:col-span-2',
  ];
  return (
    <section id="business" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            <span className="h-px w-6 bg-brand-500" />
            NiaNien
            <span className="h-px w-6 bg-brand-500" />
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold leading-tight tracking-tight text-ink">
            {t.business.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-mute">{t.business.intro}</p>
        </Reveal>

        <div className="mt-16 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {t.business.items.map((b, i) => {
            const feature = i === 0;
            return (
              <Reveal key={b.name} delay={i * 80} className={spans[i]}>
                <article className={`crystal group flex h-full flex-col rounded-[26px] ${feature ? 'p-9' : 'p-7'}`}>
                  {feature && (
                    <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.4),transparent_70%)] blur-2xl" />
                  )}
                  <span className={`glass-icon flex items-center justify-center rounded-2xl text-brand-600 ${feature ? 'h-14 w-14' : 'h-12 w-12'}`}>
                    <BizIcon index={i} />
                  </span>
                  <h3 className={`relative mt-5 font-display font-bold tracking-tight text-ink ${feature ? 'text-2xl' : 'text-xl'}`}>
                    {b.name}
                  </h3>
                  <p className={`relative mt-2.5 leading-relaxed text-ink-soft ${feature ? 'max-w-md text-[15px]' : 'text-[14px]'}`}>
                    {b.desc}
                  </p>
                  {feature && <div className="mt-auto" />}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================ PRODUCT: Pikppo — split, mockup bleeds right ============================ */
function Product() {
  const { t } = useLang();
  const p = t.product;
  return (
    <section id="product" className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      <div className="drift pointer-events-none absolute right-[-10%] top-1/4 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.14),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        {/* left: copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            <span className="h-px w-6 bg-brand-500" />
            {t.product.title}
          </span>
          <div className="mt-5 font-display text-[clamp(3.2rem,7vw,5rem)] font-extrabold leading-none tracking-tight text-gradient">
            {p.name}
          </div>
          <p className="mt-4 font-display text-2xl font-semibold text-ink">{p.tagline}</p>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">{p.desc}</p>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-800"
          >
            {p.cta}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>

        {/* right: large floating app shell bleeding toward the edge */}
        <Reveal delay={120}>
          <div className="relative lg:-mr-16 xl:-mr-28">
            <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_60%_40%,rgba(110,231,183,0.3),transparent_62%)]" />
            <div className="crystal relative overflow-hidden rounded-[32px] p-3.5 shadow-[0_60px_120px_-50px_rgba(6,36,26,0.4)]">
              <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white to-brand-50/60 p-6">
                <div className="pointer-events-none absolute inset-0 enggrid opacity-30" />
                {/* app header */}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-brand-100">
                      <Logo className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-bold text-ink">{p.name}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-700 ring-1 ring-brand-100">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
                    端到端加密
                  </span>
                </div>
                {/* memory cards strip */}
                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  {p.memories.map((m, i) => (
                    <div key={i} className="rounded-2xl border border-[rgba(11,34,24,0.07)] bg-white/70 p-3.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-brand-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {m.tag}
                      </div>
                      <p className="mt-2 text-[12px] leading-relaxed text-ink-soft">{m.text}</p>
                    </div>
                  ))}
                </div>
                {/* input */}
                <div className="relative mt-4 flex items-center gap-2 rounded-full border border-[rgba(11,34,24,0.1)] bg-white px-4 py-2.5">
                  <span className="flex-1 text-[12px] text-ink-mute">想问点什么…</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ ABOUT — centered manifesto + keyword tags ============================ */
function About() {
  const { t } = useLang();
  const [seg1, seg2] = t.about.body[1].split(t.about.emphasis);
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-[920px] px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
            <span className="h-px w-6 bg-brand-500" />
            {t.about.title}
            <span className="h-px w-6 bg-brand-500" />
          </span>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-[1.4] tracking-tight text-ink">
            {seg1}
            <span className="text-gradient">{t.about.emphasis}</span>
            {seg2}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-relaxed text-ink-soft">{t.about.body[0]}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {t.about.tags.map((tag) => (
              <span key={tag} className="glass-soft rounded-full px-4 py-2 text-sm font-semibold text-brand-700">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ CONTACT — flowing gradient, no divider line ============================ */
function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="scroll-mt-24 pb-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="crystal relative overflow-hidden rounded-[40px] px-7 py-20 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 enggrid opacity-30" />
            <div className="drift pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.4),transparent_68%)] blur-2xl" />
            <div className="drift pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.25),transparent_68%)] blur-2xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-gradient">
                {t.contact.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">{t.contact.subtitle}</p>

              <a
                href={`mailto:${t.contact.email}`}
                className="group mt-10 inline-flex items-center gap-3 font-display text-2xl font-bold text-ink sm:text-3xl"
              >
                <span className="border-b-2 border-brand-400/40 pb-1 transition-colors group-hover:border-brand-500">
                  {t.contact.email}
                </span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-600 transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>

              <div className="mt-6 text-sm font-medium text-ink-mute">{t.contact.address}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="relative z-[2] bg-[#f0f3f0]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display text-lg font-extrabold text-ink">{SITE.nameZh}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-mute">{t.footer.slogan}</p>
          </div>
          <div className="flex flex-wrap gap-12 sm:gap-20">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">{t.footer.links}</h4>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li><a href="#business" className="transition-colors hover:text-brand-700">{t.nav.business}</a></li>
                <li><a href="#product" className="transition-colors hover:text-brand-700">{t.nav.product}</a></li>
                <li><a href="#about" className="transition-colors hover:text-brand-700">{t.nav.about}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">{t.footer.productTitle}</h4>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li>
                  <a href={t.product.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-700">
                    Pikppo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">{t.footer.contactTitle}</h4>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li><a href={`mailto:${t.contact.email}`} className="transition-colors hover:text-brand-700">{t.contact.email}</a></li>
                <li>{t.contact.address}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-[rgba(11,34,24,0.07)] pt-7 text-[11px] text-ink-mute/80 sm:flex-row">
          <span>© 2026 {t.footer.company}</span>
          <span>{t.footer.icpPlaceholder}</span>
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
