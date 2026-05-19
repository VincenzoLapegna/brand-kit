import clsx from "clsx";
import { BrandLoader } from "../BrandLoader";
import { BrandLogo } from "../BrandLogo";
import { PoweredByBrand } from "../PoweredByBrand";

export interface BrandSplashScreenProps {
  logoSrc?: string;
  logoAlt?: string;
  appName?: string;
  subtitle?: string;
  poweredBy?: string;
  fullScreen?: boolean;
  className?: string;
}

export function BrandSplashScreen({
  logoSrc,
  logoAlt = "Brand logo",
  appName,
  subtitle,
  poweredBy,
  fullScreen = true,
  className
}: BrandSplashScreenProps) {
  return (
    <section
      className={clsx("vb-splash", fullScreen && "vb-splash--fullscreen", className)}
      aria-live="polite"
    >
      <div className="vb-splash__content">
        <BrandLogo src={logoSrc} alt={logoAlt} size="lg" className="vb-splash__logo" />
        {appName ? <h1 className="vb-splash__title">{appName}</h1> : null}
        {subtitle ? <p className="vb-splash__subtitle">{subtitle}</p> : null}
        <BrandLoader label="Loading" size="md" className="vb-splash__loader" />
      </div>
      {poweredBy ? (
        <PoweredByBrand brandName={poweredBy} logoSrc={logoSrc} className="vb-splash__powered" />
      ) : null}
    </section>
  );
}
