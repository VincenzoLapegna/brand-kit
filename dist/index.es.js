import { jsx as e, jsxs as l, Fragment as w } from "react/jsx-runtime";
import { useState as z, useEffect as y } from "react";
function g(a) {
  var o, s, r = "";
  if (typeof a == "string" || typeof a == "number") r += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var i = a.length;
    for (o = 0; o < i; o++) a[o] && (s = g(a[o])) && (r && (r += " "), r += s);
  } else for (s in a) a[s] && (r && (r += " "), r += s);
  return r;
}
function h() {
  for (var a, o, s = 0, r = "", i = arguments.length; s < i; s++) (a = arguments[s]) && (o = g(a)) && (r && (r += " "), r += o);
  return r;
}
function f({
  src: a,
  alt: o = "Brand logo",
  size: s = "md",
  className: r
}) {
  const i = h("vb-logo", `vb-logo--${s}`, !a && "vb-logo--default", r);
  return a ? /* @__PURE__ */ e("img", { className: i, src: a, alt: o }) : /* @__PURE__ */ e("span", { className: i, role: "img", "aria-label": o });
}
function $(a) {
  return /^(?:https?:)?\/\//i.test(a);
}
function F({
  brandName: a = "Vincenzo Lapegna",
  title: o = "Hai bisogno di consulenza o visibilità online?",
  text: s = "Creo landing page, siti web e applicazioni moderne per trasformare la tua presenza digitale in nuovi contatti.",
  ctaLabel: r = "Scopri di più",
  href: i = "https://vlapegna.it",
  logoSrc: c,
  logoAlt: t = "Vincenzo Lapegna logo",
  variant: d = "bar",
  className: b
}) {
  const m = h(
    "vb-ad-footer",
    `vb-ad-footer--${d}`,
    i && "vb-ad-footer--link",
    b
  ), u = /* @__PURE__ */ l("span", { className: "vb-ad-footer__inner", children: [
    /* @__PURE__ */ l("span", { className: "vb-ad-footer__brand", children: [
      /* @__PURE__ */ e(
        f,
        {
          src: c,
          alt: t,
          size: "md",
          className: "vb-ad-footer__logo"
        }
      ),
      /* @__PURE__ */ l("span", { className: "vb-ad-footer__copy", children: [
        /* @__PURE__ */ l("span", { className: "vb-ad-footer__eyebrow", children: [
          "Realizzato da ",
          /* @__PURE__ */ e("strong", { children: a })
        ] }),
        /* @__PURE__ */ e("span", { className: "vb-ad-footer__title", children: o }),
        /* @__PURE__ */ e("span", { className: "vb-ad-footer__text", children: s })
      ] })
    ] }),
    /* @__PURE__ */ l("span", { className: "vb-ad-footer__cta", children: [
      r,
      /* @__PURE__ */ e("span", { className: "vb-ad-footer__arrow", "aria-hidden": "true", children: "→" })
    ] })
  ] });
  if (i) {
    const _ = $(i);
    return /* @__PURE__ */ e(
      "a",
      {
        className: m,
        href: i,
        target: _ ? "_blank" : void 0,
        rel: _ ? "noreferrer" : void 0,
        children: u
      }
    );
  }
  return /* @__PURE__ */ e("div", { className: m, children: u });
}
function S({
  logoSrc: a,
  logoAlt: o = "Brand logo",
  title: s,
  subtitle: r,
  href: i,
  variant: c = "solid",
  className: t
}) {
  const d = /* @__PURE__ */ l(w, { children: [
    /* @__PURE__ */ e(f, { src: a, alt: o, size: "md", className: "vb-banner__logo" }),
    /* @__PURE__ */ l("span", { className: "vb-banner__copy", children: [
      /* @__PURE__ */ e("strong", { className: "vb-banner__title", children: s }),
      r ? /* @__PURE__ */ e("span", { className: "vb-banner__subtitle", children: r }) : null
    ] })
  ] });
  return i ? /* @__PURE__ */ e("a", { className: h("vb-banner", `vb-banner--${c}`, t), href: i, children: d }) : /* @__PURE__ */ e("div", { className: h("vb-banner", `vb-banner--${c}`, t), children: d });
}
const B = (/* @__PURE__ */ new Date()).getFullYear();
function j({
  brandName: a = "AppName",
  logoSrc: o,
  tagline: s,
  href: r,
  columns: i = [],
  socials: c = [],
  poweredBy: t,
  poweredByHref: d,
  legalLinks: b = [],
  statusLabel: m,
  statusOk: u = !0,
  statusUpdatedAt: _,
  className: v
}) {
  return /* @__PURE__ */ l("footer", { className: h("vb-footer-full", v), children: [
    /* @__PURE__ */ e("div", { className: "vb-footer-full__top-rule", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { className: "vb-footer-full__orb vb-footer-full__orb--tl", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { className: "vb-footer-full__orb vb-footer-full__orb--br", "aria-hidden": "true" }),
    /* @__PURE__ */ l("div", { className: "vb-footer-full__body", children: [
      /* @__PURE__ */ l("div", { className: "vb-footer-full__brand", children: [
        /* @__PURE__ */ l(
          "a",
          {
            className: "vb-footer-full__logo-row",
            href: r ?? "#",
            "aria-label": `${a} homepage`,
            children: [
              /* @__PURE__ */ e(
                f,
                {
                  src: o,
                  alt: `${a} logo`,
                  size: "md",
                  className: "vb-footer-full__logo-img"
                }
              ),
              /* @__PURE__ */ e("span", { className: "vb-footer-full__wordmark", children: a })
            ]
          }
        ),
        s && /* @__PURE__ */ e("p", { className: "vb-footer-full__tagline", children: s }),
        c.length > 0 && /* @__PURE__ */ e("div", { className: "vb-footer-full__socials", role: "list", "aria-label": "Social media", children: c.map((n) => /* @__PURE__ */ e(
          "a",
          {
            href: n.href,
            className: "vb-footer-full__social",
            role: "listitem",
            "aria-label": n.label,
            children: n.icon
          },
          n.label
        )) })
      ] }),
      i.map((n) => /* @__PURE__ */ l("nav", { "aria-label": n.title, children: [
        /* @__PURE__ */ e("p", { className: "vb-footer-full__col-title", children: n.title }),
        /* @__PURE__ */ e("ul", { className: "vb-footer-full__links", children: n.links.map((p) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ l("a", { href: p.href, children: [
          /* @__PURE__ */ e("span", { className: "vb-footer-full__link-dot", "aria-hidden": "true" }),
          p.label,
          p.badge && /* @__PURE__ */ e("span", { className: "vb-footer-full__badge", children: p.badge })
        ] }) }, p.label)) })
      ] }, n.title)),
      m && /* @__PURE__ */ l("div", { children: [
        /* @__PURE__ */ e("p", { className: "vb-footer-full__col-title", children: "Stato sistema" }),
        /* @__PURE__ */ l(
          "div",
          {
            className: h(
              "vb-footer-full__status-card",
              u ? "vb-footer-full__status-card--ok" : "vb-footer-full__status-card--error"
            ),
            role: "status",
            "aria-label": "Stato dei servizi",
            children: [
              /* @__PURE__ */ l("div", { className: "vb-footer-full__status-row", children: [
                /* @__PURE__ */ e("span", { className: "vb-footer-full__status-dot", "aria-hidden": "true" }),
                m
              ] }),
              _ && /* @__PURE__ */ l("p", { className: "vb-footer-full__status-sub", children: [
                "Ultimo aggiornamento: ",
                _
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "vb-footer-full__bottom", children: [
      /* @__PURE__ */ l("span", { className: "vb-footer-full__copy", children: [
        /* @__PURE__ */ l("span", { children: [
          "© ",
          B,
          " ",
          a
        ] }),
        /* @__PURE__ */ e("span", { className: "vb-footer-full__copy-sep", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { children: "Tutti i diritti riservati" })
      ] }),
      b.length > 0 && /* @__PURE__ */ e("nav", { className: "vb-footer-full__legal", "aria-label": "Link legali", children: b.map((n) => /* @__PURE__ */ e("a", { href: n.href, children: n.label }, n.label)) }),
      t && /* @__PURE__ */ l(
        "a",
        {
          href: d ?? "#",
          className: "vb-footer-full__powered",
          "aria-label": `Powered by ${t}`,
          children: [
            /* @__PURE__ */ e("span", { className: "vb-footer-full__powered-slab", children: /* @__PURE__ */ e(
              f,
              {
                src: o,
                alt: `${t} logo`,
                size: "sm",
                className: "vb-footer-full__powered-logo"
              }
            ) }),
            "Powered by ",
            /* @__PURE__ */ e("strong", { children: t })
          ]
        }
      )
    ] })
  ] });
}
function A({
  label: a = "Loading",
  size: o = "md",
  className: s
}) {
  return /* @__PURE__ */ l("div", { className: h("vb-loader", `vb-loader--${o}`, s), role: "status", children: [
    /* @__PURE__ */ e("span", { className: "vb-loader__spinner", "aria-hidden": "true" }),
    a ? /* @__PURE__ */ e("span", { className: "vb-loader__label", children: a }) : null
  ] });
}
function x({
  brandName: a = "vike",
  logoSrc: o,
  href: s,
  className: r,
  variant: i = "pill"
}) {
  const c = /* @__PURE__ */ l("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ e("span", { className: "vb-powered__slab", children: /* @__PURE__ */ e(
      f,
      {
        src: o,
        alt: `${a} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ e("span", { className: "vb-powered__label", children: "Powered by" }),
    /* @__PURE__ */ e("span", { className: "vb-powered__sep", "aria-hidden": "true" }),
    /* @__PURE__ */ e("span", { className: "vb-powered__name", children: a })
  ] }), t = /* @__PURE__ */ l("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ e("span", { className: "vb-powered__slab", children: /* @__PURE__ */ e(
      f,
      {
        src: o,
        alt: `${a} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ l("span", { className: "vb-powered__text-group", children: [
      /* @__PURE__ */ e("span", { className: "vb-powered__label", children: "Powered by" }),
      /* @__PURE__ */ e("span", { className: "vb-powered__name", children: a })
    ] })
  ] }), d = h(
    "vb-powered",
    `vb-powered--${i}`,
    s && "vb-powered--link",
    r
  ), b = i === "badge" ? t : c;
  return s ? /* @__PURE__ */ e(
    "a",
    {
      className: d,
      href: s,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `Powered by ${a}`,
      children: b
    }
  ) : /* @__PURE__ */ e("div", { className: d, role: "img", "aria-label": `Powered by ${a}`, children: b });
}
function L({
  logoSrc: a,
  logoAlt: o = "Brand logo",
  appName: s,
  subtitle: r,
  poweredBy: i,
  version: c,
  tags: t = [],
  statusLabel: d = "Preparazione ambiente...",
  loadingLabel: b = "Caricamento portale in corso",
  fullScreen: m = !0,
  className: u,
  minDurationMs: _ = 1800,
  onMinDurationEnd: v
}) {
  const [n, p] = z(_ <= 0);
  return y(() => {
    if (_ <= 0) {
      p(!0), v == null || v();
      return;
    }
    p(!1);
    const N = window.setTimeout(() => {
      p(!0), v == null || v();
    }, _);
    return () => window.clearTimeout(N);
  }, [_, v]), /* @__PURE__ */ l(
    "section",
    {
      className: h(
        "vb-splash",
        m && "vb-splash--fullscreen",
        n && "vb-splash--min-duration-elapsed",
        u
      ),
      "aria-live": "polite",
      "aria-label": b,
      children: [
        /* @__PURE__ */ e("div", { className: "vb-splash__noise", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__grid", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__orb vb-splash__orb--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__orb vb-splash__orb--br", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__corner vb-splash__corner--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__corner vb-splash__corner--bl", "aria-hidden": "true" }),
        /* @__PURE__ */ l("div", { className: "vb-splash__content", children: [
          /* @__PURE__ */ l("div", { className: "vb-splash__logo-wrap", children: [
            /* @__PURE__ */ e("div", { className: "vb-splash__ring vb-splash__ring--outer" }),
            /* @__PURE__ */ e("div", { className: "vb-splash__ring vb-splash__ring--inner" }),
            /* @__PURE__ */ e(
              f,
              {
                src: a,
                alt: o,
                size: "lg",
                className: "vb-splash__logo-img"
              }
            )
          ] }),
          s && /* @__PURE__ */ e("h1", { className: "vb-splash__title", children: s }),
          r && /* @__PURE__ */ e("p", { className: "vb-splash__subtitle", children: r }),
          (c || t.length > 0) && /* @__PURE__ */ l("div", { className: "vb-splash__pills", "aria-label": "Informazioni applicazione", children: [
            c && /* @__PURE__ */ e("span", { className: "vb-splash__pill vb-splash__pill--accent", children: c }),
            t.map((N) => /* @__PURE__ */ e("span", { className: "vb-splash__pill", children: N }, N))
          ] }),
          /* @__PURE__ */ l("div", { className: "vb-splash__loader", role: "status", "aria-label": d, children: [
            /* @__PURE__ */ e("div", { className: "vb-splash__progress-bar", "aria-hidden": "true", children: /* @__PURE__ */ e("div", { className: "vb-splash__progress-fill" }) }),
            /* @__PURE__ */ e("span", { className: "vb-splash__status-label", children: d })
          ] })
        ] }),
        i && /* @__PURE__ */ e(
          x,
          {
            brandName: i,
            logoSrc: a,
            className: "vb-splash__powered"
          }
        )
      ]
    }
  );
}
export {
  F as BrandAdFooter,
  S as BrandBanner,
  j as BrandFooter,
  A as BrandLoader,
  f as BrandLogo,
  L as BrandSplashScreen,
  x as PoweredByBrand
};
