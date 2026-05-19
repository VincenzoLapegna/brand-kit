import { useEffect, useState } from "react";
import clsx from "clsx";
import { BrandLogo } from "../BrandLogo";
import { PoweredByBrand } from "../PoweredByBrand";

export interface BrandSplashScreenProps {
  logoSrc?: string;
  logoAlt?: string;
  appName?: string;
  subtitle?: string;
  poweredBy?: string;
  version?: string;
  tags?: string[];
  statusLabel?: string;
  loadingLabel?: string;
  fullScreen?: boolean;
  className?: string;
  minDurationMs?: number;
  onMinDurationEnd?: () => void;
}

export function BrandSplashScreen({
  logoSrc,
  logoAlt = "Brand logo",
  appName,
  subtitle,
  poweredBy,
  version,
  tags = [],
  statusLabel = "Preparazione ambiente...",
  loadingLabel = "Caricamento portale in corso",
  fullScreen = true,
  className,
  minDurationMs = 1800,
  onMinDurationEnd,
}: BrandSplashScreenProps) {
  const [minDurationElapsed, setMinDurationElapsed] = useState(minDurationMs <= 0);

  useEffect(() => {
    if (minDurationMs <= 0) {
      setMinDurationElapsed(true);
      onMinDurationEnd?.();
      return;
    }

    setMinDurationElapsed(false);

    const timeoutId = window.setTimeout(() => {
      setMinDurationElapsed(true);
      onMinDurationEnd?.();
    }, minDurationMs);

    return () => window.clearTimeout(timeoutId);
  }, [minDurationMs, onMinDurationEnd]);

  return (
    <section
      className={clsx(
        "vb-splash",
        fullScreen && "vb-splash--fullscreen",
        minDurationElapsed && "vb-splash--min-duration-elapsed",
        className
      )}
      aria-live="polite"
      aria-label={loadingLabel}
    >
      {/* Decorative background layers */}
      <div className="vb-splash__noise" aria-hidden="true" />
      <div className="vb-splash__grid" aria-hidden="true" />
      <div className="vb-splash__orb vb-splash__orb--tl" aria-hidden="true" />
      <div className="vb-splash__orb vb-splash__orb--br" aria-hidden="true" />

      {/* Corner registration marks */}
      <div className="vb-splash__corner vb-splash__corner--tl" aria-hidden="true" />
      <div className="vb-splash__corner vb-splash__corner--bl" aria-hidden="true" />

      {/* Main content */}
      <div className="vb-splash__content">

        {/* Logo with pulse rings */}
        <div className="vb-splash__logo-wrap">
          <div className="vb-splash__ring vb-splash__ring--outer" />
          <div className="vb-splash__ring vb-splash__ring--inner" />

          <BrandLogo
            src={logoSrc}
            alt={logoAlt}
            size="lg"
            className="vb-splash__logo-img"
          />
        </div>

        {/* App name */}
        {appName && (
          <h1 className="vb-splash__title">{appName}</h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="vb-splash__subtitle">{subtitle}</p>
        )}

        {/* Informazioni applicazione */}
        {(version || tags.length > 0) && (
          <div className="vb-splash__pills" aria-label="Informazioni applicazione">
            {version && (
              <span className="vb-splash__pill vb-splash__pill--accent">{version}</span>
            )}
            {tags.map((tag) => (
              <span key={tag} className="vb-splash__pill">{tag}</span>
            ))}
          </div>
        )}

        {/* Stato caricamento */}
        <div className="vb-splash__loader" role="status" aria-label={statusLabel}>
          <div className="vb-splash__progress-bar" aria-hidden="true">
            <div className="vb-splash__progress-fill" />
          </div>
          <span className="vb-splash__status-label">{statusLabel}</span>
        </div>

      </div>

      {/* Firma brand */}
      {poweredBy && (
        <PoweredByBrand
          brandName={poweredBy}
          logoSrc={logoSrc}
          className="vb-splash__powered"
        />
      )}
    </section>
  );
}
