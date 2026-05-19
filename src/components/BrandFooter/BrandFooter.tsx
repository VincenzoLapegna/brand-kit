import clsx from "clsx";

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterSocial {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterStatusService {
  label: string;
  ok: boolean;
}

export interface BrandFooterProps {
  brandName?: string;
  logoSrc?: string;
  tagline?: string;
  href?: string;
  columns?: FooterColumn[];
  socials?: FooterSocial[];
  poweredBy?: string;
  poweredByHref?: string;
  legalLinks?: FooterLink[];
  statusLabel?: string;
  statusOk?: boolean;
  statusUpdatedAt?: string;
  className?: string;
}

const currentYear = new Date().getFullYear();

export function BrandFooter({
  brandName = "AppName",
  logoSrc,
  tagline,
  href,
  columns = [],
  socials = [],
  poweredBy,
  poweredByHref,
  legalLinks = [],
  statusLabel,
  statusOk = true,
  statusUpdatedAt,
  className,
}: BrandFooterProps) {
  return (
    <footer className={clsx("vb-footer-full", className)}>
      <div className="vb-footer-full__top-rule" aria-hidden="true" />

      {/* Ambient orbs */}
      <div className="vb-footer-full__orb vb-footer-full__orb--tl" aria-hidden="true" />
      <div className="vb-footer-full__orb vb-footer-full__orb--br" aria-hidden="true" />

      {/* Main grid body */}
      <div className="vb-footer-full__body">

        {/* Brand column */}
        <div className="vb-footer-full__brand">
          <a
            className="vb-footer-full__logo-row"
            href={href ?? "#"}
            aria-label={`${brandName} homepage`}
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={`${brandName} logo`}
                className="vb-footer-full__logo-img"
              />
            ) : (
              <span className="vb-footer-full__logo-circle" aria-hidden="true">
                <DefaultLogoIcon />
              </span>
            )}
            <span className="vb-footer-full__wordmark">{brandName}</span>
          </a>

          {tagline && (
            <p className="vb-footer-full__tagline">{tagline}</p>
          )}

          {socials.length > 0 && (
            <div className="vb-footer-full__socials" role="list" aria-label="Social media">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="vb-footer-full__social"
                  role="listitem"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="vb-footer-full__col-title">{col.title}</p>
            <ul className="vb-footer-full__links">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="vb-footer-full__link-dot" aria-hidden="true" />
                    {link.label}
                    {link.badge && (
                      <span className="vb-footer-full__badge">{link.badge}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Status column */}
        {statusLabel && (
          <div>
            <p className="vb-footer-full__col-title">Stato sistema</p>
            <div
              className={clsx(
                "vb-footer-full__status-card",
                statusOk
                  ? "vb-footer-full__status-card--ok"
                  : "vb-footer-full__status-card--error"
              )}
              role="status"
              aria-label="Stato dei servizi"
            >
              <div className="vb-footer-full__status-row">
                <span className="vb-footer-full__status-dot" aria-hidden="true" />
                {statusLabel}
              </div>
              {statusUpdatedAt && (
                <p className="vb-footer-full__status-sub">
                  Ultimo aggiornamento: {statusUpdatedAt}
                </p>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Bottom bar */}
      <div className="vb-footer-full__bottom">
        <span className="vb-footer-full__copy">
          <span>© {currentYear} {brandName}</span>
          <span className="vb-footer-full__copy-sep" aria-hidden="true" />
          <span>Tutti i diritti riservati</span>
        </span>

        {legalLinks.length > 0 && (
          <nav className="vb-footer-full__legal" aria-label="Link legali">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </nav>
        )}

        {poweredBy && (
          <a
            href={poweredByHref ?? "#"}
            className="vb-footer-full__powered"
            aria-label={`Powered by ${poweredBy}`}
          >
            <span className="vb-footer-full__powered-slab" aria-hidden="true">
              <DefaultLogoIcon small />
            </span>
            Powered by <strong>{poweredBy}</strong>
          </a>
        )}
      </div>
    </footer>
  );
}

function DefaultLogoIcon({ small }: { small?: boolean }) {
  const s = small ? 10 : 16;
  return (
    <svg viewBox="0 0 32 32" width={s} height={s} fill="white" aria-hidden="true">
      <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" opacity="0.3" />
      <path d="M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z" opacity="0.6" />
      <circle cx="16" cy="16" r="4.5" />
    </svg>
  );
}