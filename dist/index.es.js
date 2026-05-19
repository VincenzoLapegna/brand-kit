import { jsx as a, jsxs as i, Fragment as v } from "react/jsx-runtime";
function h(e) {
  var r, l, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (r = 0; r < n; r++) e[r] && (l = h(e[r])) && (s && (s += " "), s += l);
  } else for (l in e) e[l] && (s && (s += " "), s += l);
  return s;
}
function t() {
  for (var e, r, l = 0, s = "", n = arguments.length; l < n; l++) (e = arguments[l]) && (r = h(e)) && (s && (s += " "), s += r);
  return s;
}
const u = "/VL_Logo.png";
function p({
  src: e,
  alt: r = "Brand logo",
  size: l = "md",
  className: s
}) {
  const n = t("vb-logo", `vb-logo--${l}`, s);
  return /* @__PURE__ */ a("img", { className: n, src: e ?? u, alt: r });
}
function L({
  logoSrc: e,
  logoAlt: r = "Brand logo",
  title: l,
  subtitle: s,
  href: n,
  variant: c = "solid",
  className: o
}) {
  const d = /* @__PURE__ */ i(v, { children: [
    /* @__PURE__ */ a(p, { src: e, alt: r, size: "md", className: "vb-banner__logo" }),
    /* @__PURE__ */ i("span", { className: "vb-banner__copy", children: [
      /* @__PURE__ */ a("strong", { className: "vb-banner__title", children: l }),
      s ? /* @__PURE__ */ a("span", { className: "vb-banner__subtitle", children: s }) : null
    ] })
  ] });
  return n ? /* @__PURE__ */ a("a", { className: t("vb-banner", `vb-banner--${c}`, o), href: n, children: d }) : /* @__PURE__ */ a("div", { className: t("vb-banner", `vb-banner--${c}`, o), children: d });
}
function y({
  brandName: e = "vike",
  logoSrc: r,
  text: l,
  href: s,
  className: n
}) {
  const c = l ?? `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${e}`, o = /* @__PURE__ */ i(v, { children: [
    /* @__PURE__ */ a(p, { src: r, alt: `${e} logo`, size: "sm", className: "vb-footer__logo" }),
    /* @__PURE__ */ a("span", { className: "vb-footer__text", children: c })
  ] });
  return /* @__PURE__ */ a("footer", { className: t("vb-footer", n), children: s ? /* @__PURE__ */ a("a", { className: "vb-footer__link", href: s, children: o }) : o });
}
function B({
  label: e = "Loading",
  size: r = "md",
  className: l
}) {
  return /* @__PURE__ */ i("div", { className: t("vb-loader", `vb-loader--${r}`, l), role: "status", children: [
    /* @__PURE__ */ a("span", { className: "vb-loader__spinner", "aria-hidden": "true" }),
    e ? /* @__PURE__ */ a("span", { className: "vb-loader__label", children: e }) : null
  ] });
}
function g({
  brandName: e = "vike",
  logoSrc: r,
  href: l,
  className: s,
  variant: n = "pill"
}) {
  const c = /* @__PURE__ */ i("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ a("span", { className: "vb-powered__slab", children: /* @__PURE__ */ a(
      p,
      {
        src: r,
        alt: `${e} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ a("span", { className: "vb-powered__label", children: "Powered by" }),
    /* @__PURE__ */ a("span", { className: "vb-powered__sep", "aria-hidden": "true" }),
    /* @__PURE__ */ a("span", { className: "vb-powered__name", children: e })
  ] }), o = /* @__PURE__ */ i("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ a("span", { className: "vb-powered__slab", children: /* @__PURE__ */ a(
      p,
      {
        src: r,
        alt: `${e} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ i("span", { className: "vb-powered__text-group", children: [
      /* @__PURE__ */ a("span", { className: "vb-powered__label", children: "Powered by" }),
      /* @__PURE__ */ a("span", { className: "vb-powered__name", children: e })
    ] })
  ] }), d = t(
    "vb-powered",
    `vb-powered--${n}`,
    l && "vb-powered--link",
    s
  ), _ = n === "badge" ? o : c;
  return l ? /* @__PURE__ */ a(
    "a",
    {
      className: d,
      href: l,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `Powered by ${e}`,
      children: _
    }
  ) : /* @__PURE__ */ a("div", { className: d, role: "img", "aria-label": `Powered by ${e}`, children: _ });
}
function $({
  logoSrc: e,
  logoAlt: r = "Brand logo",
  appName: l,
  subtitle: s,
  poweredBy: n,
  version: c,
  tags: o = [],
  statusLabel: d = "Preparazione ambiente...",
  loadingLabel: _ = "Caricamento portale in corso",
  fullScreen: m = !0,
  className: N
}) {
  return /* @__PURE__ */ i(
    "section",
    {
      className: t("vb-splash", m && "vb-splash--fullscreen", N),
      "aria-live": "polite",
      "aria-label": _,
      children: [
        /* @__PURE__ */ a("div", { className: "vb-splash__noise", "aria-hidden": "true" }),
        /* @__PURE__ */ a("div", { className: "vb-splash__grid", "aria-hidden": "true" }),
        /* @__PURE__ */ a("div", { className: "vb-splash__orb vb-splash__orb--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ a("div", { className: "vb-splash__orb vb-splash__orb--br", "aria-hidden": "true" }),
        /* @__PURE__ */ a("div", { className: "vb-splash__corner vb-splash__corner--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ a("div", { className: "vb-splash__corner vb-splash__corner--bl", "aria-hidden": "true" }),
        /* @__PURE__ */ i("div", { className: "vb-splash__content", children: [
          /* @__PURE__ */ i("div", { className: "vb-splash__logo-wrap", "aria-hidden": !e, children: [
            /* @__PURE__ */ a("div", { className: "vb-splash__ring vb-splash__ring--outer" }),
            /* @__PURE__ */ a("div", { className: "vb-splash__ring vb-splash__ring--inner" }),
            e ? /* @__PURE__ */ a(
              "img",
              {
                src: e,
                alt: r,
                className: "vb-splash__logo-img"
              }
            ) : /* @__PURE__ */ a("div", { className: "vb-splash__logo-fallback", children: /* @__PURE__ */ a(f, {}) })
          ] }),
          l && /* @__PURE__ */ a("h1", { className: "vb-splash__title", children: l }),
          s && /* @__PURE__ */ a("p", { className: "vb-splash__subtitle", children: s }),
          (c || o.length > 0) && /* @__PURE__ */ i("div", { className: "vb-splash__pills", "aria-label": "Informazioni applicazione", children: [
            c && /* @__PURE__ */ a("span", { className: "vb-splash__pill vb-splash__pill--accent", children: c }),
            o.map((b) => /* @__PURE__ */ a("span", { className: "vb-splash__pill", children: b }, b))
          ] }),
          /* @__PURE__ */ i("div", { className: "vb-splash__loader", role: "status", "aria-label": d, children: [
            /* @__PURE__ */ a("div", { className: "vb-splash__progress-bar", "aria-hidden": "true", children: /* @__PURE__ */ a("div", { className: "vb-splash__progress-fill" }) }),
            /* @__PURE__ */ a("span", { className: "vb-splash__status-label", children: d })
          ] })
        ] }),
        n && /* @__PURE__ */ a(
          g,
          {
            brandName: n,
            logoSrc: e,
            className: "vb-splash__powered"
          }
        )
      ]
    }
  );
}
function f() {
  return /* @__PURE__ */ i("svg", { viewBox: "0 0 32 32", fill: "white", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ a("path", { d: "M16 4L28 10V22L16 28L4 22V10L16 4Z", opacity: "0.3" }),
    /* @__PURE__ */ a("path", { d: "M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z", opacity: "0.6" }),
    /* @__PURE__ */ a("circle", { cx: "16", cy: "16", r: "4.5" })
  ] });
}
export {
  L as BrandBanner,
  y as BrandFooter,
  B as BrandLoader,
  p as BrandLogo,
  $ as BrandSplashScreen,
  g as PoweredByBrand
};
