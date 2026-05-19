import clsx from "clsx";

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
  const classes = clsx("vb-logo", `vb-logo--${size}`, !src && "vb-logo--default", className);

  if (!src) {
    return <span className={classes} role="img" aria-label={alt} />;
  }

  return <img className={classes} src={src} alt={alt} />;
}
