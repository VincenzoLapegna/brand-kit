import clsx from "clsx";
import { BrandLogo } from "../BrandLogo";

export interface BrandBannerProps {
  logoSrc?: string;
  logoAlt?: string;
  title: string;
  subtitle?: string;
  href?: string;
  variant?: "solid" | "soft" | "minimal";
  className?: string;
}

export function BrandBanner({
  logoSrc,
  logoAlt = "Brand logo",
  title,
  subtitle,
  href,
  variant = "solid",
  className
}: BrandBannerProps) {
  const content = (
    <>
      <BrandLogo src={logoSrc} alt={logoAlt} size="md" className="vb-banner__logo" />
      <span className="vb-banner__copy">
        <strong className="vb-banner__title">{title}</strong>
        {subtitle ? <span className="vb-banner__subtitle">{subtitle}</span> : null}
      </span>
    </>
  );

  if (href) {
    return (
      <a className={clsx("vb-banner", `vb-banner--${variant}`, className)} href={href}>
        {content}
      </a>
    );
  }

  return <div className={clsx("vb-banner", `vb-banner--${variant}`, className)}>{content}</div>;
}
