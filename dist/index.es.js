import { jsx as e, jsxs as r, Fragment as w } from "react/jsx-runtime";
import { useState as $, useEffect as y } from "react";
function g(l) {
  var o, a, s = "";
  if (typeof l == "string" || typeof l == "number") s += l;
  else if (typeof l == "object") if (Array.isArray(l)) {
    var i = l.length;
    for (o = 0; o < i; o++) l[o] && (a = g(l[o])) && (s && (s += " "), s += a);
  } else for (a in l) l[a] && (s && (s += " "), s += a);
  return s;
}
function v() {
  for (var l, o, a = 0, s = "", i = arguments.length; a < i; a++) (l = arguments[a]) && (o = g(l)) && (s && (s += " "), s += o);
  return s;
}
function m({
  src: l,
  alt: o = "Brand logo",
  size: a = "md",
  className: s
}) {
  const i = v("vb-logo", `vb-logo--${a}`, !l && "vb-logo--default", s);
  return l ? /* @__PURE__ */ e("img", { className: i, src: l, alt: o }) : /* @__PURE__ */ e("span", { className: i, role: "img", "aria-label": o });
}
function k({
  logoSrc: l,
  logoAlt: o = "Brand logo",
  title: a,
  subtitle: s,
  href: i,
  variant: t = "solid",
  className: n
}) {
  const d = /* @__PURE__ */ r(w, { children: [
    /* @__PURE__ */ e(m, { src: l, alt: o, size: "md", className: "vb-banner__logo" }),
    /* @__PURE__ */ r("span", { className: "vb-banner__copy", children: [
      /* @__PURE__ */ e("strong", { className: "vb-banner__title", children: a }),
      s ? /* @__PURE__ */ e("span", { className: "vb-banner__subtitle", children: s }) : null
    ] })
  ] });
  return i ? /* @__PURE__ */ e("a", { className: v("vb-banner", `vb-banner--${t}`, n), href: i, children: d }) : /* @__PURE__ */ e("div", { className: v("vb-banner", `vb-banner--${t}`, n), children: d });
}
const z = (/* @__PURE__ */ new Date()).getFullYear();
function j({
  brandName: l = "AppName",
  logoSrc: o,
  tagline: a,
  href: s,
  columns: i = [],
  socials: t = [],
  poweredBy: n,
  poweredByHref: d,
  legalLinks: h = [],
  statusLabel: f,
  statusOk: N = !0,
  statusUpdatedAt: p,
  className: _
}) {
  return /* @__PURE__ */ r("footer", { className: v("vb-footer-full", _), children: [
    /* @__PURE__ */ e("div", { className: "vb-footer-full__top-rule", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { className: "vb-footer-full__orb vb-footer-full__orb--tl", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { className: "vb-footer-full__orb vb-footer-full__orb--br", "aria-hidden": "true" }),
    /* @__PURE__ */ r("div", { className: "vb-footer-full__body", children: [
      /* @__PURE__ */ r("div", { className: "vb-footer-full__brand", children: [
        /* @__PURE__ */ r(
          "a",
          {
            className: "vb-footer-full__logo-row",
            href: s ?? "#",
            "aria-label": `${l} homepage`,
            children: [
              /* @__PURE__ */ e(
                m,
                {
                  src: o,
                  alt: `${l} logo`,
                  size: "md",
                  className: "vb-footer-full__logo-img"
                }
              ),
              /* @__PURE__ */ e("span", { className: "vb-footer-full__wordmark", children: l })
            ]
          }
        ),
        a && /* @__PURE__ */ e("p", { className: "vb-footer-full__tagline", children: a }),
        t.length > 0 && /* @__PURE__ */ e("div", { className: "vb-footer-full__socials", role: "list", "aria-label": "Social media", children: t.map((c) => /* @__PURE__ */ e(
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
      i.map((c) => /* @__PURE__ */ r("nav", { "aria-label": c.title, children: [
        /* @__PURE__ */ e("p", { className: "vb-footer-full__col-title", children: c.title }),
        /* @__PURE__ */ e("ul", { className: "vb-footer-full__links", children: c.links.map((b) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ r("a", { href: b.href, children: [
          /* @__PURE__ */ e("span", { className: "vb-footer-full__link-dot", "aria-hidden": "true" }),
          b.label,
          b.badge && /* @__PURE__ */ e("span", { className: "vb-footer-full__badge", children: b.badge })
        ] }) }, b.label)) })
      ] }, c.title)),
      f && /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ e("p", { className: "vb-footer-full__col-title", children: "Stato sistema" }),
        /* @__PURE__ */ r(
          "div",
          {
            className: v(
              "vb-footer-full__status-card",
              N ? "vb-footer-full__status-card--ok" : "vb-footer-full__status-card--error"
            ),
            role: "status",
            "aria-label": "Stato dei servizi",
            children: [
              /* @__PURE__ */ r("div", { className: "vb-footer-full__status-row", children: [
                /* @__PURE__ */ e("span", { className: "vb-footer-full__status-dot", "aria-hidden": "true" }),
                f
              ] }),
              p && /* @__PURE__ */ r("p", { className: "vb-footer-full__status-sub", children: [
                "Ultimo aggiornamento: ",
                p
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "vb-footer-full__bottom", children: [
      /* @__PURE__ */ r("span", { className: "vb-footer-full__copy", children: [
        /* @__PURE__ */ r("span", { children: [
          "© ",
          z,
          " ",
          l
        ] }),
        /* @__PURE__ */ e("span", { className: "vb-footer-full__copy-sep", "aria-hidden": "true" }),
        /* @__PURE__ */ e("span", { children: "Tutti i diritti riservati" })
      ] }),
      h.length > 0 && /* @__PURE__ */ e("nav", { className: "vb-footer-full__legal", "aria-label": "Link legali", children: h.map((c) => /* @__PURE__ */ e("a", { href: c.href, children: c.label }, c.label)) }),
      n && /* @__PURE__ */ r(
        "a",
        {
          href: d ?? "#",
          className: "vb-footer-full__powered",
          "aria-label": `Powered by ${n}`,
          children: [
            /* @__PURE__ */ e("span", { className: "vb-footer-full__powered-slab", children: /* @__PURE__ */ e(
              m,
              {
                src: o,
                alt: `${n} logo`,
                size: "sm",
                className: "vb-footer-full__powered-logo"
              }
            ) }),
            "Powered by ",
            /* @__PURE__ */ e("strong", { children: n })
          ]
        }
      )
    ] })
  ] });
}
function F({
  label: l = "Loading",
  size: o = "md",
  className: a
}) {
  return /* @__PURE__ */ r("div", { className: v("vb-loader", `vb-loader--${o}`, a), role: "status", children: [
    /* @__PURE__ */ e("span", { className: "vb-loader__spinner", "aria-hidden": "true" }),
    l ? /* @__PURE__ */ e("span", { className: "vb-loader__label", children: l }) : null
  ] });
}
function B({
  brandName: l = "vike",
  logoSrc: o,
  href: a,
  className: s,
  variant: i = "pill"
}) {
  const t = /* @__PURE__ */ r("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ e("span", { className: "vb-powered__slab", children: /* @__PURE__ */ e(
      m,
      {
        src: o,
        alt: `${l} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ e("span", { className: "vb-powered__label", children: "Powered by" }),
    /* @__PURE__ */ e("span", { className: "vb-powered__sep", "aria-hidden": "true" }),
    /* @__PURE__ */ e("span", { className: "vb-powered__name", children: l })
  ] }), n = /* @__PURE__ */ r("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ e("span", { className: "vb-powered__slab", children: /* @__PURE__ */ e(
      m,
      {
        src: o,
        alt: `${l} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ r("span", { className: "vb-powered__text-group", children: [
      /* @__PURE__ */ e("span", { className: "vb-powered__label", children: "Powered by" }),
      /* @__PURE__ */ e("span", { className: "vb-powered__name", children: l })
    ] })
  ] }), d = v(
    "vb-powered",
    `vb-powered--${i}`,
    a && "vb-powered--link",
    s
  ), h = i === "badge" ? n : t;
  return a ? /* @__PURE__ */ e(
    "a",
    {
      className: d,
      href: a,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `Powered by ${l}`,
      children: h
    }
  ) : /* @__PURE__ */ e("div", { className: d, role: "img", "aria-label": `Powered by ${l}`, children: h });
}
function S({
  logoSrc: l,
  logoAlt: o = "Brand logo",
  appName: a,
  subtitle: s,
  poweredBy: i,
  version: t,
  tags: n = [],
  statusLabel: d = "Preparazione ambiente...",
  loadingLabel: h = "Caricamento portale in corso",
  fullScreen: f = !0,
  className: N,
  minDurationMs: p = 1800,
  onMinDurationEnd: _
}) {
  const [c, b] = $(p <= 0);
  return y(() => {
    if (p <= 0) {
      b(!0), _ == null || _();
      return;
    }
    b(!1);
    const u = window.setTimeout(() => {
      b(!0), _ == null || _();
    }, p);
    return () => window.clearTimeout(u);
  }, [p, _]), /* @__PURE__ */ r(
    "section",
    {
      className: v(
        "vb-splash",
        f && "vb-splash--fullscreen",
        c && "vb-splash--min-duration-elapsed",
        N
      ),
      "aria-live": "polite",
      "aria-label": h,
      children: [
        /* @__PURE__ */ e("div", { className: "vb-splash__noise", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__grid", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__orb vb-splash__orb--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__orb vb-splash__orb--br", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__corner vb-splash__corner--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__corner vb-splash__corner--bl", "aria-hidden": "true" }),
        /* @__PURE__ */ r("div", { className: "vb-splash__content", children: [
          /* @__PURE__ */ r("div", { className: "vb-splash__logo-wrap", children: [
            /* @__PURE__ */ e("div", { className: "vb-splash__ring vb-splash__ring--outer" }),
            /* @__PURE__ */ e("div", { className: "vb-splash__ring vb-splash__ring--inner" }),
            /* @__PURE__ */ e(
              m,
              {
                src: l,
                alt: o,
                size: "lg",
                className: "vb-splash__logo-img"
              }
            )
          ] }),
          a && /* @__PURE__ */ e("h1", { className: "vb-splash__title", children: a }),
          s && /* @__PURE__ */ e("p", { className: "vb-splash__subtitle", children: s }),
          (t || n.length > 0) && /* @__PURE__ */ r("div", { className: "vb-splash__pills", "aria-label": "Informazioni applicazione", children: [
            t && /* @__PURE__ */ e("span", { className: "vb-splash__pill vb-splash__pill--accent", children: t }),
            n.map((u) => /* @__PURE__ */ e("span", { className: "vb-splash__pill", children: u }, u))
          ] }),
          /* @__PURE__ */ r("div", { className: "vb-splash__loader", role: "status", "aria-label": d, children: [
            /* @__PURE__ */ e("div", { className: "vb-splash__progress-bar", "aria-hidden": "true", children: /* @__PURE__ */ e("div", { className: "vb-splash__progress-fill" }) }),
            /* @__PURE__ */ e("span", { className: "vb-splash__status-label", children: d })
          ] })
        ] }),
        i && /* @__PURE__ */ e(
          B,
          {
            brandName: i,
            logoSrc: l,
            className: "vb-splash__powered"
          }
        )
      ]
    }
  );
}
export {
  k as BrandBanner,
  j as BrandFooter,
  F as BrandLoader,
  m as BrandLogo,
  S as BrandSplashScreen,
  B as PoweredByBrand
};
