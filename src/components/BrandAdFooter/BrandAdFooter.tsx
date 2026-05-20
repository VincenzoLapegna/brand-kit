import clsx from "clsx";
import { BrandLogo } from "../BrandLogo";

export interface BrandAdFooterProps {
  brandName?: string;
  title?: string;
  text?: string;
  ctaLabel?: string;
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
  variant?: "bar" | "card" | "minimal";
  className?: string;
}

function isExternalHref(href: string) {
  return /^(?:https?:)?\/\//i.test(href);
}

export function BrandAdFooter({
  brandName = "Vincenzo Lapegna",
  title = "Hai bisogno di consulenza o visibilità online?",
  text = "Creo landing page, siti web e applicazioni moderne per trasformare la tua presenza digitale in nuovi contatti.",
  ctaLabel = "Scopri di più",
  href = "https://vlapegna.it",
  logoSrc,
  logoAlt = "Vincenzo Lapegna logo",
  variant = "bar",
  className,
}: BrandAdFooterProps) {
  const classes = clsx(
    "vb-ad-footer",
    `vb-ad-footer--${variant}`,
    href && "vb-ad-footer--link",
    className
  );

  const content = (
    <span className="vb-ad-footer__inner">
      <span className="vb-ad-footer__brand">
        <BrandLogo
          src={logoSrc}
          alt={logoAlt}
          size="md"
          className="vb-ad-footer__logo"
        />
        <span className="vb-ad-footer__copy">
          <span className="vb-ad-footer__eyebrow">
            Realizzato da <strong>{brandName}</strong>
          </span>
          <span className="vb-ad-footer__title">{title}</span>
          <span className="vb-ad-footer__text">{text}</span>
        </span>
      </span>
      <span className="vb-ad-footer__cta">
        {ctaLabel}
        <span className="vb-ad-footer__arrow" aria-hidden="true">
          &rarr;
        </span>
      </span>
    </span>
  );

  if (href) {
    const external = isExternalHref(href);

    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}
