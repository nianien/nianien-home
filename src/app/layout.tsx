import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import { LanguageProvider } from '@/components/LanguageProvider';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    '念音科技',
    'Nianien',
    'AI',
    '大模型',
    '智能体',
    '长期记忆',
    'AI agent',
    'long-term memory',
    'personal assistant',
  ],
  authors: [{ name: SITE.nameZh, url: SITE.url }],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.nameZh,
    title: SITE.title,
    description: SITE.description,
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    images: [{ url: '/logo-wordmark.png', width: 512, height: 512, alt: SITE.nameZh }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/logo-wordmark.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={`${display.variable} ${sans.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
