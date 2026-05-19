import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function BrandBanner({ logoSrc, logoAlt, title, subtitle, href, variant, className }: BrandBannerProps): JSX_2.Element;

export declare interface BrandBannerProps {
    logoSrc?: string;
    logoAlt?: string;
    title: string;
    subtitle?: string;
    href?: string;
    variant?: "solid" | "soft" | "minimal";
    className?: string;
}

export declare function BrandFooter({ brandName, logoSrc, tagline, href, columns, socials, poweredBy, poweredByHref, legalLinks, statusLabel, statusOk, statusUpdatedAt, className, }: BrandFooterProps): JSX_2.Element;

export declare interface BrandFooterProps {
    brandName?: string;
    logoSrc?: string;
    tagline?: string;
    href?: string;
    columns?: FooterColumn[];
    socials?: FooterSocial[];
    poweredBy?: string;
    poweredByHref?: string;
    legalLinks?: FooterLink[];
    statusLabel?: string;
    statusOk?: boolean;
    statusUpdatedAt?: string;
    className?: string;
}

export declare function BrandLoader({ label, size, className }: BrandLoaderProps): JSX_2.Element;

export declare interface BrandLoaderProps {
    label?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export declare function BrandLogo({ src, alt, size, className }: BrandLogoProps): JSX_2.Element;

export declare interface BrandLogoProps {
    src?: string;
    alt?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export declare function BrandSplashScreen({ logoSrc, logoAlt, appName, subtitle, poweredBy, version, tags, statusLabel, loadingLabel, fullScreen, className, minDurationMs, onMinDurationEnd, }: BrandSplashScreenProps): JSX_2.Element;

export declare interface BrandSplashScreenProps {
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

declare interface FooterColumn {
    title: string;
    links: FooterLink[];
}

declare interface FooterLink {
    label: string;
    href: string;
    badge?: string;
}

declare interface FooterSocial {
    label: string;
    href: string;
    icon: React.ReactNode;
}

export declare function PoweredByBrand({ brandName, logoSrc, href, className, variant, }: PoweredByBrandProps): JSX_2.Element;

export declare interface PoweredByBrandProps {
    brandName?: string;
    logoSrc?: string;
    href?: string;
    className?: string;
    variant?: "pill" | "inline" | "badge";
}

export { }
