import { jsx as e, jsxs as c, Fragment as N } from "react/jsx-runtime";
import { useState as L, useEffect as y } from "react";
function u(s) {
  var r, l, a = "";
  if (typeof s == "string" || typeof s == "number") a += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var n = s.length;
    for (r = 0; r < n; r++) s[r] && (l = u(s[r])) && (a && (a += " "), a += l);
  } else for (l in s) s[l] && (a && (a += " "), a += l);
  return a;
}
function _() {
  for (var s, r, l = 0, a = "", n = arguments.length; l < n; l++) (s = arguments[l]) && (r = u(s)) && (a && (a += " "), a += r);
  return a;
}
function h({
  src: s,
  alt: r = "Brand logo",
  size: l = "md",
  className: a
}) {
  const n = _("vb-logo", `vb-logo--${l}`, a);
  if (!s) {
    return /* @__PURE__ */ e("span", { className: n, "aria-hidden": "true", children: /* @__PURE__ */ c("svg", { viewBox: "0 0 32 32", width: l === "sm" ? 24 : l === "lg" ? 72 : 40, height: l === "sm" ? 24 : l === "lg" ? 72 : 40, fill: "currentColor", role: "img", className: "vb-logo__fallback", children: [/* @__PURE__ */ e("path", { d: "M16 4L28 10V22L16 28L4 22V10L16 4Z", opacity: "0.25" }), /* @__PURE__ */ e("path", { d: "M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z", opacity: "0.5" }), /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "4.5" })] }) });
  }

  return /* @__PURE__ */ e("img", { className: n, src: s, alt: r });
}
function P({
  logoSrc: s,
  logoAlt: r = "Brand logo",
  title: l,
  subtitle: a,
  href: n,
  variant: i = "solid",
  className: o
}) {
  const d = /* @__PURE__ */ c(N, { children: [
    /* @__PURE__ */ e(h, { src: s, alt: r, size: "md", className: "vb-banner__logo" }),
    /* @__PURE__ */ c("span", { className: "vb-banner__copy", children: [
      /* @__PURE__ */ e("strong", { className: "vb-banner__title", children: l }),
      a ? /* @__PURE__ */ e("span", { className: "vb-banner__subtitle", children: a }) : null
    ] })
  ] });
  return n ? /* @__PURE__ */ e("a", { className: _("vb-banner", `vb-banner--${i}`, o), href: n, children: d }) : /* @__PURE__ */ e("div", { className: _("vb-banner", `vb-banner--${i}`, o), children: d });
}
function V({
  brandName: s = "vike",
  logoSrc: r,
  text: l,
  href: a,
  className: n
}) {
  const i = l ?? `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${s}`, o = /* @__PURE__ */ c(N, { children: [
    /* @__PURE__ */ e(h, { src: r, alt: `${s} logo`, size: "sm", className: "vb-footer__logo" }),
    /* @__PURE__ */ e("span", { className: "vb-footer__text", children: i })
  ] });
  return /* @__PURE__ */ e("footer", { className: _("vb-footer", n), children: a ? /* @__PURE__ */ e("a", { className: "vb-footer__link", href: a, children: o }) : o });
}
function F({
  label: s = "Loading",
  size: r = "md",
  className: l
}) {
  return /* @__PURE__ */ c("div", { className: _("vb-loader", `vb-loader--${r}`, l), role: "status", children: [
    /* @__PURE__ */ e("span", { className: "vb-loader__spinner", "aria-hidden": "true" }),
    s ? /* @__PURE__ */ e("span", { className: "vb-loader__label", children: s }) : null
  ] });
}
function $({
  brandName: s = "vike",
  logoSrc: r,
  href: l,
  className: a,
  variant: n = "pill"
}) {
  const i = /* @__PURE__ */ c("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ e("span", { className: "vb-powered__slab", children: /* @__PURE__ */ e(
      h,
      {
        src: r,
        alt: `${s} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ e("span", { className: "vb-powered__label", children: "Powered by" }),
    /* @__PURE__ */ e("span", { className: "vb-powered__sep", "aria-hidden": "true" }),
    /* @__PURE__ */ e("span", { className: "vb-powered__name", children: s })
  ] }), o = /* @__PURE__ */ c("span", { className: "vb-powered__inner", children: [
    /* @__PURE__ */ e("span", { className: "vb-powered__slab", children: /* @__PURE__ */ e(
      h,
      {
        src: r,
        alt: `${s} logo`,
        size: "sm",
        className: "vb-powered__logo"
      }
    ) }),
    /* @__PURE__ */ c("span", { className: "vb-powered__text-group", children: [
      /* @__PURE__ */ e("span", { className: "vb-powered__label", children: "Powered by" }),
      /* @__PURE__ */ e("span", { className: "vb-powered__name", children: s })
    ] })
  ] }), d = _(
    "vb-powered",
    `vb-powered--${n}`,
    l && "vb-powered--link",
    a
  ), p = n === "badge" ? o : i;
  return l ? /* @__PURE__ */ e(
    "a",
    {
      className: d,
      href: l,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": `Powered by ${s}`,
      children: p
    }
  ) : /* @__PURE__ */ e("div", { className: d, role: "img", "aria-label": `Powered by ${s}`, children: p });
}
function j({
  logoSrc: s,
  logoAlt: r = "Brand logo",
  appName: l,
  subtitle: a,
  poweredBy: n,
  version: i,
  tags: o = [],
  statusLabel: d = "Preparazione ambiente...",
  loadingLabel: p = "Caricamento portale in corso",
  fullScreen: g = !0,
  className: f,
  minDurationMs: b = 1800,
  onMinDurationEnd: t
}) {
  const [w, m] = L(b <= 0);
  return y(() => {
    if (b <= 0) {
      m(!0), t == null || t();
      return;
    }
    m(!1);
    const v = window.setTimeout(() => {
      m(!0), t == null || t();
    }, b);
    return () => window.clearTimeout(v);
  }, [b, t]), /* @__PURE__ */ c(
    "section",
    {
      className: _(
        "vb-splash",
        g && "vb-splash--fullscreen",
        w && "vb-splash--min-duration-elapsed",
        f
      ),
      "aria-live": "polite",
      "aria-label": p,
      children: [
        /* @__PURE__ */ e("div", { className: "vb-splash__noise", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__grid", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__orb vb-splash__orb--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__orb vb-splash__orb--br", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__corner vb-splash__corner--tl", "aria-hidden": "true" }),
        /* @__PURE__ */ e("div", { className: "vb-splash__corner vb-splash__corner--bl", "aria-hidden": "true" }),
        /* @__PURE__ */ c("div", { className: "vb-splash__content", children: [
          /* @__PURE__ */ c("div", { className: "vb-splash__logo-wrap", "aria-hidden": !s, children: [
            /* @__PURE__ */ e("div", { className: "vb-splash__ring vb-splash__ring--outer" }),
            /* @__PURE__ */ e("div", { className: "vb-splash__ring vb-splash__ring--inner" }),
            s ? /* @__PURE__ */ e(
              "img",
              {
                src: s,
                alt: r,
                className: "vb-splash__logo-img"
              }
            ) : /* @__PURE__ */ e("div", { className: "vb-splash__logo-fallback", children: /* @__PURE__ */ e(x, {}) })
          ] }),
          l && /* @__PURE__ */ e("h1", { className: "vb-splash__title", children: l }),
          a && /* @__PURE__ */ e("p", { className: "vb-splash__subtitle", children: a }),
          (i || o.length > 0) && /* @__PURE__ */ c("div", { className: "vb-splash__pills", "aria-label": "Informazioni applicazione", children: [
            i && /* @__PURE__ */ e("span", { className: "vb-splash__pill vb-splash__pill--accent", children: i }),
            o.map((v) => /* @__PURE__ */ e("span", { className: "vb-splash__pill", children: v }, v))
          ] }),
          /* @__PURE__ */ c("div", { className: "vb-splash__loader", role: "status", "aria-label": d, children: [
            /* @__PURE__ */ e("div", { className: "vb-splash__progress-bar", "aria-hidden": "true", children: /* @__PURE__ */ e("div", { className: "vb-splash__progress-fill" }) }),
            /* @__PURE__ */ e("span", { className: "vb-splash__status-label", children: d })
          ] })
        ] }),
        n && /* @__PURE__ */ e(
          $,
          {
            brandName: n,
            logoSrc: s,
            className: "vb-splash__powered"
          }
        )
      ]
    }
  );
}
function x() {
  return /* @__PURE__ */ c("svg", { viewBox: "0 0 32 32", fill: "white", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [
    /* @__PURE__ */ e("path", { d: "M16 4L28 10V22L16 28L4 22V10L16 4Z", opacity: "0.3" }),
    /* @__PURE__ */ e("path", { d: "M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z", opacity: "0.6" }),
    /* @__PURE__ */ e("circle", { cx: "16", cy: "16", r: "4.5" })
  ] });
}
export {
  P as BrandBanner,
  V as BrandFooter,
  F as BrandLoader,
  h as BrandLogo,
  j as BrandSplashScreen,
  $ as PoweredByBrand
};
