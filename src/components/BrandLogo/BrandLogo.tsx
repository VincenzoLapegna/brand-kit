import clsx from "clsx";

const DEFAULT_LOGO_SRC = undefined;

export interface BrandLogoProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BrandLogo({
  src,
  alt = "Brand logo",
  size = "md",
  className
}: BrandLogoProps) {
  const classes = clsx("vb-logo", `vb-logo--${size}`, className);

  if (!src) {
    return (
      <span className={classes} aria-hidden="true">
        <svg viewBox="0 0 32 32" width={size === "sm" ? 24 : size === "lg" ? 72 : 40} height={size === "sm" ? 24 : size === "lg" ? 72 : 40} fill="currentColor" role="img" className={clsx("vb-logo__fallback")}> 
          <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" opacity="0.25" />
          <path d="M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z" opacity="0.5" />
          <circle cx="16" cy="16" r="4.5" />
        </svg>
      </span>
    );
  }

  return <img className={classes} src={src} alt={alt} />;
}
