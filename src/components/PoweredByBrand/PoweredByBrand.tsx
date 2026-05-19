import clsx from "clsx";
import { BrandLogo } from "../BrandLogo";

export interface PoweredByBrandProps {
  brandName?: string;
  logoSrc?: string;
  href?: string;
  className?: string;
  variant?: "pill" | "inline" | "badge";
}

export function PoweredByBrand({
  brandName = "vike",
  logoSrc,
  href,
  className,
  variant = "pill",
}: PoweredByBrandProps) {
  const content = (
    <span className="vb-powered__inner">
      <span className="vb-powered__slab">
        <BrandLogo
          src={logoSrc}
          alt={`${brandName} logo`}
          size="sm"
          className="vb-powered__logo"
        />
      </span>
      <span className="vb-powered__label">Powered by</span>
      <span className="vb-powered__sep" aria-hidden="true" />
      <span className="vb-powered__name">{brandName}</span>
    </span>
  );

  const contentBadge = (
    <span className="vb-powered__inner">
      <span className="vb-powered__slab">
        <BrandLogo
          src={logoSrc}
          alt={`${brandName} logo`}
          size="sm"
          className="vb-powered__logo"
        />
      </span>
      <span className="vb-powered__text-group">
        <span className="vb-powered__label">Powered by</span>
        <span className="vb-powered__name">{brandName}</span>
      </span>
    </span>
  );

  const classes = clsx(
    "vb-powered",
    `vb-powered--${variant}`,
    href && "vb-powered--link",
    className
  );

  const inner = variant === "badge" ? contentBadge : content;

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Powered by ${brandName}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={classes} role="img" aria-label={`Powered by ${brandName}`}>
      {inner}
    </div>
  );
}