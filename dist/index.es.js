import { jsx as l, jsxs as c, Fragment as b } from "react/jsx-runtime";
function m(e) {
  var r, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (r = 0; r < s; r++) e[r] && (n = m(e[r])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function o() {
  for (var e, r, n = 0, a = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (r = m(e)) && (a && (a += " "), a += r);
  return a;
}
function d({
  src: e,
  alt: r = "Brand logo",
  size: n = "md",
  className: a
}) {
  const s = o("vb-logo", `vb-logo--${n}`, a);
  return e ? /* @__PURE__ */ l("img", { className: s, src: e, alt: r }) : /* @__PURE__ */ l("span", { className: o(s, "vb-logo--fallback"), "aria-label": r, role: "img", children: /* @__PURE__ */ l("svg", { className: "vb-logo__mark", viewBox: "0 0 500 500", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ c("g", { transform: "translate(0 500) scale(0.1 -0.1)", children: [
    /* @__PURE__ */ l("path", { d: "M2407 3508c-7-18-112-290-232-605-121-315-223-569-226-565-4 4-82 206-175 449-93 244-171 443-174 442-3 0-18-27-33-60-31-65-104-146-158-175-22-12-56-18-97-19-51 0-61-3-57-15 3-8 124-297 268-642l262-627 166-1 167 0 49 118c27 64 119 283 204 485l154 368 3-485 2-486 465 0 466 0-17 32c-9 18-19 60-22 95-6 74 13 131 64 199l34 44-285 0-285 0 0 740 0 740-265 0-265 0-13-32z" }),
    /* @__PURE__ */ l("path", { d: "M1314 3393c-36-7-85-67-91-110-11-82 45-147 127-147 102 0 159 95 114 189-9 19-26 41-38 49-26 16-80 26-112 19z" }),
    /* @__PURE__ */ l("path", { d: "M3635 2003c-83-21-121-123-75-198 18-29 36-41 92-58 28-9 83 11 112 42 59 62 40 163-38 201-43 20-55 22-91 13z" })
  ] }) }) });
}
function p({
  logoSrc: e,
  logoAlt: r = "Brand logo",
  title: n,
  subtitle: a,
  href: s,
  variant: i = "solid",
  className: t
}) {
  const v = /* @__PURE__ */ c(b, { children: [
    /* @__PURE__ */ l(d, { src: e, alt: r, size: "md", className: "vb-banner__logo" }),
    /* @__PURE__ */ c("span", { className: "vb-banner__copy", children: [
      /* @__PURE__ */ l("strong", { className: "vb-banner__title", children: n }),
      a ? /* @__PURE__ */ l("span", { className: "vb-banner__subtitle", children: a }) : null
    ] })
  ] });
  return s ? /* @__PURE__ */ l("a", { className: o("vb-banner", `vb-banner--${i}`, t), href: s, children: v }) : /* @__PURE__ */ l("div", { className: o("vb-banner", `vb-banner--${i}`, t), children: v });
}
function g({
  brandName: e = "vike",
  logoSrc: r,
  text: n,
  href: a,
  className: s
}) {
  const i = n ?? `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${e}`, t = /* @__PURE__ */ c(b, { children: [
    /* @__PURE__ */ l(d, { src: r, alt: `${e} logo`, size: "sm", className: "vb-footer__logo" }),
    /* @__PURE__ */ l("span", { className: "vb-footer__text", children: i })
  ] });
  return /* @__PURE__ */ l("footer", { className: o("vb-footer", s), children: a ? /* @__PURE__ */ l("a", { className: "vb-footer__link", href: a, children: t }) : t });
}
function _({
  label: e = "Loading",
  size: r = "md",
  className: n
}) {
  return /* @__PURE__ */ c("div", { className: o("vb-loader", `vb-loader--${r}`, n), role: "status", children: [
    /* @__PURE__ */ l("span", { className: "vb-loader__spinner", "aria-hidden": "true" }),
    e ? /* @__PURE__ */ l("span", { className: "vb-loader__label", children: e }) : null
  ] });
}
function h({
  brandName: e = "vike",
  logoSrc: r,
  href: n,
  className: a
}) {
  const s = /* @__PURE__ */ c(b, { children: [
    /* @__PURE__ */ l("span", { className: "vb-powered__label", children: "Powered by" }),
    /* @__PURE__ */ l(d, { src: r, alt: `${e} logo`, size: "sm", className: "vb-powered__logo" }),
    /* @__PURE__ */ l("span", { className: "vb-powered__name", children: e })
  ] });
  return n ? /* @__PURE__ */ l("a", { className: o("vb-powered", a), href: n, target: "_blank", rel: "noreferrer", children: s }) : /* @__PURE__ */ l("div", { className: o("vb-powered", a), children: s });
}
function f({
  logoSrc: e,
  logoAlt: r = "Brand logo",
  appName: n,
  subtitle: a,
  poweredBy: s,
  fullScreen: i = !0,
  className: t
}) {
  return /* @__PURE__ */ c(
    "section",
    {
      className: o("vb-splash", i && "vb-splash--fullscreen", t),
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ c("div", { className: "vb-splash__content", children: [
          /* @__PURE__ */ l(d, { src: e, alt: r, size: "lg", className: "vb-splash__logo" }),
          n ? /* @__PURE__ */ l("h1", { className: "vb-splash__title", children: n }) : null,
          a ? /* @__PURE__ */ l("p", { className: "vb-splash__subtitle", children: a }) : null,
          /* @__PURE__ */ l(_, { label: "Loading", size: "md", className: "vb-splash__loader" })
        ] }),
        s ? /* @__PURE__ */ l(h, { brandName: s, logoSrc: e, className: "vb-splash__powered" }) : null
      ]
    }
  );
}
export {
  p as BrandBanner,
  g as BrandFooter,
  _ as BrandLoader,
  d as BrandLogo,
  f as BrandSplashScreen,
  h as PoweredByBrand
};
