import { jsx as s, jsxs as c, Fragment as p } from "react/jsx-runtime";
function v(e) {
  var l, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (l = 0; l < r; l++) e[l] && (n = v(e[l])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function t() {
  for (var e, l, n = 0, a = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (l = v(e)) && (a && (a += " "), a += l);
  return a;
}
const m = "/VL_Logo.png";
function b({
  src: e,
  alt: l = "Brand logo",
  size: n = "md",
  className: a
}) {
  const r = t("vb-logo", `vb-logo--${n}`, a);
  return /* @__PURE__ */ s("img", { className: r, src: e ?? m, alt: l });
}
function N({
  logoSrc: e,
  logoAlt: l = "Brand logo",
  title: n,
  subtitle: a,
  href: r,
  variant: i = "solid",
  className: o
}) {
  const d = /* @__PURE__ */ c(p, { children: [
    /* @__PURE__ */ s(b, { src: e, alt: l, size: "md", className: "vb-banner__logo" }),
    /* @__PURE__ */ c("span", { className: "vb-banner__copy", children: [
      /* @__PURE__ */ s("strong", { className: "vb-banner__title", children: n }),
      a ? /* @__PURE__ */ s("span", { className: "vb-banner__subtitle", children: a }) : null
    ] })
  ] });
  return r ? /* @__PURE__ */ s("a", { className: t("vb-banner", `vb-banner--${i}`, o), href: r, children: d }) : /* @__PURE__ */ s("div", { className: t("vb-banner", `vb-banner--${i}`, o), children: d });
}
function f({
  brandName: e = "vike",
  logoSrc: l,
  text: n,
  href: a,
  className: r
}) {
  const i = n ?? `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${e}`, o = /* @__PURE__ */ c(p, { children: [
    /* @__PURE__ */ s(b, { src: l, alt: `${e} logo`, size: "sm", className: "vb-footer__logo" }),
    /* @__PURE__ */ s("span", { className: "vb-footer__text", children: i })
  ] });
  return /* @__PURE__ */ s("footer", { className: t("vb-footer", r), children: a ? /* @__PURE__ */ s("a", { className: "vb-footer__link", href: a, children: o }) : o });
}
function h({
  label: e = "Loading",
  size: l = "md",
  className: n
}) {
  return /* @__PURE__ */ c("div", { className: t("vb-loader", `vb-loader--${l}`, n), role: "status", children: [
    /* @__PURE__ */ s("span", { className: "vb-loader__spinner", "aria-hidden": "true" }),
    e ? /* @__PURE__ */ s("span", { className: "vb-loader__label", children: e }) : null
  ] });
}
function u({
  brandName: e = "vike",
  logoSrc: l,
  href: n,
  className: a,
  variant: r = "pill"
}) {
  const i = /* @__PURE__ */ c("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ s("span", { className: "vb-powered__slab", children: /* @__PURE__ */ s(
      b,
      {
        src: l,
        alt: `${e} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ s("span", { className: "vb-powered__label", children: "Powered by" }),
    /* @__PURE__ */ s("span", { className: "vb-powered__sep", "aria-hidden": "true" }),
    /* @__PURE__ */ s("span", { className: "vb-powered__name", children: e })
  ] }), o = /* @__PURE__ */ c("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ s("span", { className: "vb-powered__slab", children: /* @__PURE__ */ s(
      b,
      {
        src: l,
        alt: `${e} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ c("span", { className: "vb-powered__text-group", children: [
      /* @__PURE__ */ s("span", { className: "vb-powered__label", children: "Powered by" }),
      /* @__PURE__ */ s("span", { className: "vb-powered__name", children: e })
    ] })
  ] }), d = t(
    "vb-powered",
    `vb-powered--${r}`,
    n && "vb-powered--link",
    a
  ), _ = r === "badge" ? o : i;
  return n ? /* @__PURE__ */ s(
    "a",
    {
      className: d,
      href: n,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `Powered by ${e}`,
      children: _
    }
  ) : /* @__PURE__ */ s("div", { className: d, role: "img", "aria-label": `Powered by ${e}`, children: _ });
}
function w({
  logoSrc: e,
  logoAlt: l = "Brand logo",
  appName: n,
  subtitle: a,
  poweredBy: r,
  fullScreen: i = !0,
  className: o
}) {
  return /* @__PURE__ */ c(
    "section",
    {
      className: t("vb-splash", i && "vb-splash--fullscreen", o),
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ c("div", { className: "vb-splash__content", children: [
          /* @__PURE__ */ s(b, { src: e, alt: l, size: "lg", className: "vb-splash__logo" }),
          n ? /* @__PURE__ */ s("h1", { className: "vb-splash__title", children: n }) : null,
          a ? /* @__PURE__ */ s("p", { className: "vb-splash__subtitle", children: a }) : null,
          /* @__PURE__ */ s(h, { label: "Loading", size: "md", className: "vb-splash__loader" })
        ] }),
        r ? /* @__PURE__ */ s(u, { brandName: r, logoSrc: e, className: "vb-splash__powered" }) : null
      ]
    }
  );
}
export {
  N as BrandBanner,
  f as BrandFooter,
  h as BrandLoader,
  b as BrandLogo,
  w as BrandSplashScreen,
  u as PoweredByBrand
};
