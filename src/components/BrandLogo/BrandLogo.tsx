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
    // Use package-local public asset as default logo
    return <img className={classes} src="./VL_Logo.png" alt={alt} />;
  }

  return <img className={classes} src={src} alt={alt} />;
}
