import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrandBanner,
  BrandFooter,
  BrandLoader,
  BrandLogo,
  BrandSplashScreen,
  PoweredByBrand
} from "./index";
import "./demo.css";

const logoSrc = "/VL_Logo.png";

function Showcase() {
  return (
    <main className="vb-showcase">
      <div className="vb-showcase__inner">
        <header className="vb-showcase__header">
          <span className="vb-showcase__eyebrow">@vike/brand-kit</span>
          <h1 className="vb-showcase__title">Componenti brand pronti da riusare.</h1>
          <p className="vb-showcase__description">
            Una vetrina rapida per controllare logo, loader, banner, splash screen, footer e firma
            powered-by con il tema copiato dal Portfolio.
          </p>
        </header>

        <section className="vb-showcase__grid" aria-label="Componenti brand-kit">
          <article className="vb-showcase__card">
            <p className="vb-showcase__label">BrandLogo</p>
            <div className="vb-showcase__row">
              <BrandLogo src={logoSrc} alt="VL logo small" size="sm" />
              <BrandLogo src={logoSrc} alt="VL logo medium" size="md" />
              <BrandLogo src={logoSrc} alt="VL logo large" size="lg" />
              <BrandLogo alt="Fallback logo" size="lg" />
            </div>
          </article>

          <article className="vb-showcase__card">
            <p className="vb-showcase__label">BrandLoader</p>
            <div className="vb-showcase__row">
              <BrandLoader label="Caricamento" size="sm" />
              <BrandLoader label="Sincronizzazione" size="md" />
              <BrandLoader label="Preparazione" size="lg" />
            </div>
          </article>

          <article className="vb-showcase__card">
            <p className="vb-showcase__label">PoweredByBrand</p>
            <div className="vb-showcase__row">
              <PoweredByBrand brandName="Vike" logoSrc={logoSrc} />
              <PoweredByBrand brandName="Portfolio" href="https://github.com/vike" />
            </div>
          </article>

          <article className="vb-showcase__card">
            <p className="vb-showcase__label">BrandFooter</p>
            <div className="vb-showcase__footer-slot">
              <BrandFooter
                brandName="Vike"
                logoSrc={logoSrc}
                text="Design system personale per prodotti React"
                href="https://github.com/vike"
              />
            </div>
          </article>

          <article className="vb-showcase__card vb-showcase__card--wide">
            <p className="vb-showcase__label">BrandBanner</p>
            <div className="vb-showcase__row">
              <BrandBanner
                logoSrc={logoSrc}
                title="Banner solid"
                subtitle="Messaggio primario con colore brand"
                variant="solid"
              />
              <BrandBanner
                logoSrc={logoSrc}
                title="Banner soft"
                subtitle="Stato informativo o comunicazione secondaria"
                variant="soft"
              />
              <BrandBanner
                logoSrc={logoSrc}
                title="Banner minimal"
                subtitle="Versione glass coerente con il Portfolio"
                href="https://github.com/vike/brand-kit"
                variant="minimal"
              />
            </div>
          </article>

          <article className="vb-showcase__card vb-showcase__card--wide">
            <p className="vb-showcase__label">BrandSplashScreen</p>
            <div className="vb-showcase__splash-frame">
              <BrandSplashScreen
                logoSrc={logoSrc}
                logoAlt="VL logo"
                appName="Vike App"
                subtitle="Esperienza React brandizzata, pulita e riusabile."
                poweredBy="Vike"
                fullScreen={false}
              />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Showcase />
  </React.StrictMode>
);
