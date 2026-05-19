import clsx from "clsx";

const DEFAULT_LOGO_SRC = "/VL_Logo.png";

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

  return <img className={classes} src={src ?? DEFAULT_LOGO_SRC} alt={alt} />;
}
