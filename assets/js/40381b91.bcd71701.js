"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [200],
  {
    7716: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => v,
          contentTitle: () => E,
          default: () => k,
          frontMatter: () => x,
          metadata: () => _,
          toc: () => w,
        });
      var a,
        l,
        r,
        i,
        o,
        s,
        c,
        d,
        u = n(7462),
        p = n(7294),
        f = n(3905),
        m = n(3677),
        h = n(8570),
        b = n(7626);
      function y() {
        return (
          (y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          y.apply(this, arguments)
        );
      }
      const g = (e) => {
          let { title: t, titleId: n, ...u } = e;
          return p.createElement(
            "svg",
            y(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 35,
                height: 35,
                viewBox: "0 0 18 18",
                "aria-labelledby": n,
              },
              u
            ),
            a ||
              (a = p.createElement(
                "defs",
                null,
                p.createElement(
                  "linearGradient",
                  {
                    id: "a",
                    x1: 8.05,
                    y1: 11.32,
                    x2: 8.05,
                    y2: 1.26,
                    gradientUnits: "userSpaceOnUse",
                  },
                  p.createElement("stop", { offset: 0, stopColor: "#0078d4" }),
                  p.createElement("stop", {
                    offset: 0.82,
                    stopColor: "#5ea0ef",
                  })
                ),
                p.createElement(
                  "linearGradient",
                  {
                    id: "b",
                    x1: 8.05,
                    y1: 15.21,
                    x2: 8.05,
                    y2: 11.32,
                    gradientUnits: "userSpaceOnUse",
                  },
                  p.createElement("stop", { offset: 0, stopColor: "#1490df" }),
                  p.createElement("stop", {
                    offset: 0.98,
                    stopColor: "#1f56a3",
                  })
                ),
                p.createElement(
                  "linearGradient",
                  {
                    id: "c",
                    x1: 8.05,
                    y1: 7.87,
                    x2: 8.05,
                    y2: 4.94,
                    gradientUnits: "userSpaceOnUse",
                  },
                  p.createElement("stop", { offset: 0, stopColor: "#d2ebff" }),
                  p.createElement("stop", { offset: 1, stopColor: "#f0fffd" })
                )
              )),
            void 0 === t
              ? p.createElement("title", { id: n }, "Icon-intune-329")
              : t
              ? p.createElement("title", { id: n }, t)
              : null,
            l ||
              (l = p.createElement("rect", {
                x: 0.5,
                y: 1.26,
                width: 15.1,
                height: 10.06,
                rx: 0.5,
                fill: "url(#a)",
              })),
            r ||
              (r = p.createElement("rect", {
                x: 1.34,
                y: 2.1,
                width: 13.42,
                height: 8.39,
                rx: 0.28,
                fill: "#fff",
              })),
            i ||
              (i = p.createElement("path", {
                d: "M11.08 14.37c-1.5-.23-1.56-1.31-1.55-3h-3c0 1.74-.06 2.82-1.55 3a.87.87 0 0 0-.74.84h7.54a.88.88 0 0 0-.7-.84Z",
                fill: "url(#b)",
              })),
            o ||
              (o = p.createElement("path", {
                d: "M17.17 5.91h-6.88a2.31 2.31 0 1 0 0 .92H11v9.58a.33.33 0 0 0 .33.33h5.83a.33.33 0 0 0 .33-.33V6.24a.33.33 0 0 0-.32-.33Z",
                fill: "#32bedd",
              })),
            s ||
              (s = p.createElement("rect", {
                x: 11.62,
                y: 6.82,
                width: 5.27,
                height: 8.7,
                rx: 0.12,
                fill: "#fff",
              })),
            c ||
              (c = p.createElement("circle", {
                cx: 8.05,
                cy: 6.41,
                r: 1.46,
                opacity: 0.9,
                fill: "url(#c)",
              })),
            d ||
              (d = p.createElement("path", {
                d: "M14.88 10.82 13.76 9.7a.06.06 0 0 0-.1.05v.68a.06.06 0 0 1-.06.06H11v.83h2.6a.06.06 0 0 1 .06.06v.69a.06.06 0 0 0 .1 0L14.88 11a.12.12 0 0 0 0-.18Z",
                fill: "#0078d4",
              }))
          );
        },
        x = {
          title: "Intune",
          sidebar_class_name: "intune",
          hide_table_of_contents: !0,
          custom_edit_url: null,
          pagination_next: null,
          pagination_prev: null,
        },
        E = "<Icon/> Intune",
        _ = {
          unversionedId: "portals/intune",
          id: "portals/intune",
          title: "Intune",
          description: "<CommandsTable",
          source: "@site/docs/portals/intune.md",
          sourceDirName: "portals",
          slug: "/portals/intune",
          permalink: "/portals/intune",
          draft: !1,
          editUrl: null,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Intune",
            sidebar_class_name: "intune",
            hide_table_of_contents: !0,
            custom_edit_url: null,
            pagination_next: null,
            pagination_prev: null,
          },
          sidebar: "docs",
        },
        v = {},
        w = [],
        C = { toc: w },
        I = "wrapper";
      function k(e) {
        let { components: t, ...n } = e;
        return (0, f.kt)(
          I,
          (0, u.Z)({}, C, n, { components: t, mdxType: "MDXLayout" }),
          (0, f.kt)(
            "h1",
            { id: "-intune" },
            (0, f.kt)(g, { mdxType: "Icon" }),
            " Intune"
          ),
          (0, f.kt)(m.r, {
            applyFilter: "Intune",
            columns: b.z,
            data: h.C,
            columnsToHide: ["category"],
            mdxType: "CommandsTable",
          })
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
