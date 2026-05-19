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
  const classes = clsx("vb-logo", `vb-logo--${size}`, className);

  if (src) {
    return <img className={classes} src={src} alt={alt} />;
  }

  return (
    <span className={clsx(classes, "vb-logo--fallback")} aria-label={alt} role="img">
      <svg className="vb-logo__mark" viewBox="0 0 500 500" aria-hidden="true" focusable="false">
        <g transform="translate(0 500) scale(0.1 -0.1)">
          <path d="M2407 3508c-7-18-112-290-232-605-121-315-223-569-226-565-4 4-82 206-175 449-93 244-171 443-174 442-3 0-18-27-33-60-31-65-104-146-158-175-22-12-56-18-97-19-51 0-61-3-57-15 3-8 124-297 268-642l262-627 166-1 167 0 49 118c27 64 119 283 204 485l154 368 3-485 2-486 465 0 466 0-17 32c-9 18-19 60-22 95-6 74 13 131 64 199l34 44-285 0-285 0 0 740 0 740-265 0-265 0-13-32z" />
          <path d="M1314 3393c-36-7-85-67-91-110-11-82 45-147 127-147 102 0 159 95 114 189-9 19-26 41-38 49-26 16-80 26-112 19z" />
          <path d="M3635 2003c-83-21-121-123-75-198 18-29 36-41 92-58 28-9 83 11 112 42 59 62 40 163-38 201-43 20-55 22-91 13z" />
        </g>
      </svg>
    </span>
  );
}
