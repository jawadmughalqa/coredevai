// The CoreDevAI mark: a "C" that closes on a check, in the brand's navy and electric blue.
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0A1330" />
      <path d="M21.7 10.3A8 8 0 1 0 21.7 21.7" fill="none" stroke="#F5F7FB" strokeWidth="3" strokeLinecap="round" />
      <path d="M12.6 16.3l2.9 2.9 6.2-6.3" fill="none" stroke="#3D7BFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <a className="nav__logo" href="/">
      <LogoMark />
      <span className="logo-word">
        CoreDev<span className="logo-ai">AI</span>
      </span>
    </a>
  );
}
