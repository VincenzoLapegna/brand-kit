import clsx from "clsx";
import { BrandLogo } from "../BrandLogo";

export interface BrandFooterProps {
  brandName?: string;
  logoSrc?: string;
  text?: string;
  href?: string;
  className?: string;
}

export function BrandFooter({
  brandName = "vike",
  logoSrc,
  text,
  href,
  className
}: BrandFooterProps) {
  const copy = text ?? `© ${new Date().getFullYear()} ${brandName}`;
  const content = (
    <>
      <BrandLogo src={logoSrc} alt={`${brandName} logo`} size="sm" className="vb-footer__logo" />
      <span className="vb-footer__text">{copy}</span>
    </>
  );

  return (
    <footer className={clsx("vb-footer", className)}>
      {href ? (
        <a className="vb-footer__link" href={href}>
          {content}
        </a>
      ) : (
        content
      )}
    </footer>
  );
}
