import { jsx as e, jsxs as l, Fragment as L } from "react/jsx-runtime";
import { useState as y, useEffect as $ } from "react";
function w(a) {
  var s, r, i = "";
  if (typeof a == "string" || typeof a == "number") i += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var o = a.length;
    for (s = 0; s < o; s++) a[s] && (r = w(a[s])) && (i && (i += " "), i += r);
  } else for (r in a) a[r] && (i && (i += " "), i += r);
  return i;
}
function h() {
  for (var a, s, r = 0, i = "", o = arguments.length; r < o; r++) (a = arguments[r]) && (s = w(a)) && (i && (i += " "), i += s);
  return i;
}
function N({
  src: a,
  alt: s = "Brand logo",
  size: r = "md",
  className: i
}) {
  const o = h("vb-logo", `vb-logo--${r}`, i);
  return a ? /* @__PURE__ */ e("img", { className: o, src: a, alt: s }) : /* @__PURE__ */ e("img", { className: o, src: "./VL_Logo.png", alt: s });
}
function k({
  logoSrc: a,
  logoAlt: s = "Brand logo",
  title: r,
  subtitle: i,
  href: o,
  variant: n = "solid",
  className: t
}) {
  const d = /* @__PURE__ */ l(L, { children: [
    /* @__PURE__ */ e(N, { src: a, alt: s, size: "md", className: "vb-banner__logo" }),
    /* @__PURE__ */ l("span", { className: "vb-banner__copy", children: [
      /* @__PURE__ */ e("strong", { className: "vb-banner__title", children: r }),
      i ? /* @__PURE__ */ e("span", { className: "vb-banner__subtitle", children: i }) : null
    ] })
  ] });
  return o ? /* @__PURE__ */ e("a", { className: h("vb-banner", `vb-banner--${n}`, t), href: o, children: d }) : /* @__PURE__ */ e("div", { className: h("vb-banner", `vb-banner--${n}`, t), children: d });
}
const B = (/* @__PURE__ */ new Date()).getFullYear();
function I({
  brandName: a = "AppName",
  logoSrc: s,
  tagline: r,
  href: i,
  columns: o = [],
  socials: n = [],
  poweredBy: t,
  poweredByHref: d,
  legalLinks: v = [],
  statusLabel: m,
  statusOk: u = !0,
  statusUpdatedAt: p,
  className: _
}) {
  return /* @__PURE__ */ l("footer", { className: h("vb-footer-full", _), children: [
    /* @__PURE__ */ e("div", { className: "vb-footer-full__top-rule", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { className: "vb-footer-full__orb vb-footer-full__orb--tl", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { className: "vb-footer-full__orb vb-footer-full__orb--br", "aria-hidden": "true" }),
    /* @__PURE__ */ l("div", { className: "vb-footer-full__body", children: [
      /* @__PURE__ */ l("div", { className: "vb-footer-full__brand", children: [
        /* @__PURE__ */ l(
          "a",
          {
            className: "vb-footer-full__logo-row",
            href: i ?? "#",
            "aria-label": `${a} homepage`,
            children: [
              s ? /* @__PURE__ */ e(
                "img",
                {
                  src: s,
                  alt: `${a} logo`,
                  className: "vb-footer-full__logo-img"
                }
              ) : /* @__PURE__ */ e("span", { className: "vb-footer-full__logo-circle", "aria-hidden": "true", children: /* @__PURE__ */ e(g, {}) }),
              /* @__PURE__ */ e("span", { className: "vb-footer-full__wordmark", children: a })
            ]
          }
        ),
        r && /* @__PURE__ */ e("p", { className: "vb-footer-full__tagline", children: r }),
        n.length > 0 && /* @__PURE__ */ e("div", { className: "vb-footer-full__socials", role: "list", "aria-label": "Social media", children: n.map((c) => /* @__PURE__ */ e(
          "a",
          {
            href: c.href,
            className: "vb-footer-full__social",
            role: "listitem",
            "aria-label": c.label,
            children: c.icon
          },
          c.label
        )) })
      ] }),
      o.map((c) => /* @__PURE__ */ l("nav", { "aria-label": c.title, children: [
        /* @__PURE__ */ e("p", { className: "vb-footer-full__col-title", children: c.title }),
        /* @__PURE__ */ e("ul", { className: "vb-footer-full__links", children: c.links.map((b) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ l("a", { href: b.href, children: [
          /* @__PURE__ */ e("span", { className: "vb-footer-full__link-dot", "aria-hidden": "true" }),
          b.label,
          b.badge && /* @__PURE__ */ e("span", { className: "vb-footer-full__badge", children: b.badge })
        ] }) }, b.label)) })
      ] }, c.title)),
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
              p && /* @__PURE__ */ l("p", { className: "vb-footer-full__status-sub", children: [
                "Ultimo aggiornamento: ",
                p
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
      v.length > 0 && /* @__PURE__ */ e("nav", { className: "vb-footer-full__legal", "aria-label": "Link legali", children: v.map((c) => /* @__PURE__ */ e("a", { href: c.href, children: c.label }, c.label)) }),
      t && /* @__PURE__ */ l(
        "a",
        {
          href: d ?? "#",
          className: "vb-footer-full__powered",
          "aria-label": `Powered by ${t}`,
          children: [
            /* @__PURE__ */ e("span", { className: "vb-footer-full__powered-slab", "aria-hidden": "true", children: /* @__PURE__ */ e(g, { small: !0 }) }),
            "Powered by ",
            /* @__PURE__ */ e("strong", { children: t })
          ]
        }
      )
    ] })
  ] });
}
function g({ small: a }) {
  const s = a ? 10 : 16;
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 32 32", width: s, height: s, fill: "white", "aria-hidden": "true", children: [
    /* @__PURE__ */ e("path", { d: "M16 4L28 10V22L16 28L4 22V10L16 4Z", opacity: "0.3" }),
    /* @__PURE__ */ e("path", { d: "M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z", opacity: "0.6" }),
    /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "4.5" })
  ] });
}
function Z({
  label: a = "Loading",
  size: s = "md",
  className: r
}) {
  return /* @__PURE__ */ l("div", { className: h("vb-loader", `vb-loader--${s}`, r), role: "status", children: [
    /* @__PURE__ */ e("span", { className: "vb-loader__spinner", "aria-hidden": "true" }),
    a ? /* @__PURE__ */ e("span", { className: "vb-loader__label", children: a }) : null
  ] });
}
function x({
  brandName: a = "vike",
  logoSrc: s,
  href: r,
  className: i,
  variant: o = "pill"
}) {
  const n = /* @__PURE__ */ l("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ e("span", { className: "vb-powered__slab", children: /* @__PURE__ */ e(
      N,
      {
        src: s,
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
      N,
      {
        src: s,
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
    `vb-powered--${o}`,
    r && "vb-powered--link",
    i
  ), v = o === "badge" ? t : n;
  return r ? /* @__PURE__ */ e(
    "a",
    {
      className: d,
      href: r,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `Powered by ${a}`,
      children: v
    }
  ) : /* @__PURE__ */ e("div", { className: d, role: "img", "aria-label": `Powered by ${a}`, children: v });
}
function j({
  logoSrc: a,
  logoAlt: s = "Brand logo",
  appName: r,
  subtitle: i,
  poweredBy: o,
  version: n,
  tags: t = [],
  statusLabel: d = "Preparazione ambiente...",
  loadingLabel: v = "Caricamento portale in corso",
  fullScreen: m = !0,
  className: u,
  minDurationMs: p = 1800,
  onMinDurationEnd: _
}) {
  const [c, b] = y(p <= 0);
  return $(() => {
    if (p <= 0) {
      b(!0), _ == null || _();
      return;
    }
    b(!1);
    const f = window.setTimeout(() => {
      b(!0), _ == null || _();
    }, p);
    return () => window.clearTimeout(f);
  }, [p, _]), /* @__PURE__ */ l(
    "section",
    {
      className: h(
        "vb-splash",
        m && "vb-splash--fullscreen",
        c && "vb-splash--min-duration-elapsed",
        u
      ),
      "aria-live": "polite",
      "aria-label": v,
      children: [
        /* @__PURE__ */ e("div", { className: "vb-splash__noise", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__grid", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__orb vb-splash__orb--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__orb vb-splash__orb--br", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__corner vb-splash__corner--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__corner vb-splash__corner--bl", "aria-hidden": "true" }),
        /* @__PURE__ */ l("div", { className: "vb-splash__content", children: [
          /* @__PURE__ */ l("div", { className: "vb-splash__logo-wrap", "aria-hidden": !a, children: [
            /* @__PURE__ */ e("div", { className: "vb-splash__ring vb-splash__ring--outer" }),
            /* @__PURE__ */ e("div", { className: "vb-splash__ring vb-splash__ring--inner" }),
            a ? /* @__PURE__ */ e(
              "img",
              {
                src: a,
                alt: s,
                className: "vb-splash__logo-img"
              }
            ) : /* @__PURE__ */ e("div", { className: "vb-splash__logo-fallback", children: /* @__PURE__ */ e(V, {}) })
          ] }),
          r && /* @__PURE__ */ e("h1", { className: "vb-splash__title", children: r }),
          i && /* @__PURE__ */ e("p", { className: "vb-splash__subtitle", children: i }),
          (n || t.length > 0) && /* @__PURE__ */ l("div", { className: "vb-splash__pills", "aria-label": "Informazioni applicazione", children: [
            n && /* @__PURE__ */ e("span", { className: "vb-splash__pill vb-splash__pill--accent", children: n }),
            t.map((f) => /* @__PURE__ */ e("span", { className: "vb-splash__pill", children: f }, f))
          ] }),
          /* @__PURE__ */ l("div", { className: "vb-splash__loader", role: "status", "aria-label": d, children: [
            /* @__PURE__ */ e("div", { className: "vb-splash__progress-bar", "aria-hidden": "true", children: /* @__PURE__ */ e("div", { className: "vb-splash__progress-fill" }) }),
            /* @__PURE__ */ e("span", { className: "vb-splash__status-label", children: d })
          ] })
        ] }),
        o && /* @__PURE__ */ e(
          x,
          {
            brandName: o,
            logoSrc: a,
            className: "vb-splash__powered"
          }
        )
      ]
    }
  );
}
function V() {
  return /* @__PURE__ */ l("svg", { viewBox: "0 0 32 32", fill: "white", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ e("path", { d: "M16 4L28 10V22L16 28L4 22V10L16 4Z", opacity: "0.3" }),
    /* @__PURE__ */ e("path", { d: "M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z", opacity: "0.6" }),
    /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "4.5" })
  ] });
}
export {
  k as BrandBanner,
  I as BrandFooter,
  Z as BrandLoader,
  N as BrandLogo,
  j as BrandSplashScreen,
  x as PoweredByBrand
};
