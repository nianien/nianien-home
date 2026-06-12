export function Logo({ className = '' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.png"
      alt="念音科技 NiaNien"
      width={36}
      height={36}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
