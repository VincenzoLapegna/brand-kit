import clsx from "clsx";

export interface BrandLoaderProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BrandLoader({
  label = "Loading",
  size = "md",
  className
}: BrandLoaderProps) {
  return (
    <div className={clsx("vb-loader", `vb-loader--${size}`, className)} role="status">
      <span className="vb-loader__spinner" aria-hidden="true" />
      {label ? <span className="vb-loader__label">{label}</span> : null}
    </div>
  );
}
