# @vike/brand-kit

Libreria React riusabile per componenti di branding semplici: logo, splash screen, banner, loader, footer e firma "powered by".

## Installazione

Da GitHub:

```bash
npm install github:vike/brand-kit#v1.0.0
```

Da npm:

```bash
npm install @vike/brand-kit
```

## Uso

Importa i componenti e il CSS globale della libreria:

```tsx
import { BrandBanner, BrandSplashScreen } from "@vike/brand-kit";
import "@vike/brand-kit/style.css";
```

### BrandSplashScreen

```tsx
import { BrandSplashScreen } from "@vike/brand-kit";

export function AppSplash() {
  return (
    <BrandSplashScreen
      logoSrc="/logo.svg"
      logoAlt="vike logo"
      appName="My App"
      subtitle="Preparazione dell'applicazione..."
      poweredBy="vike"
      fullScreen
    />
  );
}
```

### BrandBanner

```tsx
import { BrandBanner } from "@vike/brand-kit";

export function HeaderBanner() {
  return (
    <BrandBanner
      logoSrc="/logo.svg"
      title="vike Brand Kit"
      subtitle="Componenti React pronti per prodotti brandizzati"
      href="https://github.com/vike/brand-kit"
      variant="solid"
    />
  );
}
```

### BrandAdFooter

```tsx
import { BrandAdFooter } from "@vike/brand-kit";

export function ClientFooterAd() {
  return (
    <BrandAdFooter
      variant="bar"
      title="Hai bisogno di consulenza o visibilità online?"
      text="Landing page, siti web e applicazioni React pensate per portare nuovi contatti al tuo business."
      ctaLabel="Visita il portfolio"
      href="https://vlapegna.it"
    />
  );
}
```

## Personalizzazione

Puoi personalizzare l'aspetto sovrascrivendo le CSS variables nel tuo progetto:

```css
:root {
  --vb-brand-bg: #f5f7fb;
  --vb-brand-bg-soft: #eef2f7;
  --vb-brand-surface: rgba(255, 255, 255, 0.78);
  --vb-brand-fg: #0f172a;
  --vb-brand-muted: #64748b;
  --vb-brand-accent: #c14340;
  --vb-brand-accent-dark: #a0322f;
  --vb-brand-teal: #0f766e;
  --vb-brand-border: rgba(148, 163, 184, 0.32);
}
```

Tutte le classi CSS sono prefissate con `vb-` per ridurre il rischio di collisioni.
