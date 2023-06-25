"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [9],
  {
    9512: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => g,
          contentTitle: () => E,
          default: () => x,
          frontMatter: () => h,
          metadata: () => _,
          toc: () => C,
        });
      var a,
        l,
        n,
        o,
        i,
        s,
        c,
        d,
        p = r(7462),
        u = r(7294),
        f = r(3905),
        m = r(3677),
        v = r(8570),
        z = r(7626);
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var a in r)
                    Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                }
                return e;
              }),
          b.apply(this, arguments)
        );
      }
      const y = (e) => {
          let { title: t, titleId: r, ...p } = e;
          return u.createElement(
            "svg",
            b(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 35,
                height: 35,
                viewBox: "0 0 18 18",
                "aria-labelledby": r,
              },
              p
            ),
            a ||
              (a = u.createElement(
                "defs",
                null,
                u.createElement(
                  "linearGradient",
                  {
                    id: "a",
                    x1: 13.25,
                    y1: 13.02,
                    x2: 8.62,
                    y2: 4.25,
                    gradientUnits: "userSpaceOnUse",
                  },
                  u.createElement("stop", { offset: 0, stopColor: "#1988d9" }),
                  u.createElement("stop", { offset: 0.9, stopColor: "#54aef0" })
                ),
                u.createElement(
                  "linearGradient",
                  {
                    id: "b",
                    x1: 11.26,
                    y1: 10.47,
                    x2: 14.46,
                    y2: 15.99,
                    gradientUnits: "userSpaceOnUse",
                  },
                  u.createElement("stop", {
                    offset: 0.1,
                    stopColor: "#54aef0",
                  }),
                  u.createElement("stop", {
                    offset: 0.29,
                    stopColor: "#4fabee",
                  }),
                  u.createElement("stop", {
                    offset: 0.51,
                    stopColor: "#41a2e9",
                  }),
                  u.createElement("stop", {
                    offset: 0.74,
                    stopColor: "#2a93e0",
                  }),
                  u.createElement("stop", {
                    offset: 0.88,
                    stopColor: "#1988d9",
                  })
                )
              )),
            void 0 === t
              ? u.createElement("title", { id: r }, "Icon-identity-221")
              : t
              ? u.createElement("title", { id: r }, t)
              : null,
            l ||
              (l = u.createElement("path", {
                fill: "#50e6ff",
                d: "m1.01 10.19 7.92 5.14 8.06-5.16L18 11.35l-9.07 5.84L0 11.35l1.01-1.16z",
              })),
            n ||
              (n = u.createElement("path", {
                fill: "#fff",
                d: "M1.61 9.53 8.93.81l7.47 8.73-7.47 4.72-7.32-4.73z",
              })),
            o ||
              (o = u.createElement("path", {
                fill: "#50e6ff",
                d: "M8.93.81v13.45L1.61 9.53 8.93.81z",
              })),
            i ||
              (i = u.createElement("path", {
                fill: "url(#a)",
                d: "M8.93.81v13.45l7.47-4.72L8.93.81z",
              })),
            s ||
              (s = u.createElement("path", {
                fill: "#53b1e0",
                d: "m8.93 7.76 7.47 1.78-7.47 4.72v-6.5z",
              })),
            c ||
              (c = u.createElement("path", {
                fill: "#9cebff",
                d: "M8.93 14.26 1.61 9.53l7.32-1.77v6.5z",
              })),
            d ||
              (d = u.createElement("path", {
                fill: "url(#b)",
                d: "M8.93 17.19 18 11.35l-1.01-1.18-8.06 5.16v1.86z",
              }))
          );
        },
        h = {
          title: "Azure Active Directory",
          hide_table_of_contents: !0,
          sidebar_class_name: "azuread",
          custom_edit_url: null,
          pagination_next: null,
          pagination_prev: null,
        },
        E = "<Icon/> Azure Active Directory",
        _ = {
          unversionedId: "portals/azuread",
          id: "portals/azuread",
          title: "Azure Active Directory",
          description: "<CommandsTable",
          source: "@site/docs/portals/azuread.md",
          sourceDirName: "portals",
          slug: "/portals/azuread",
          permalink: "/portals/azuread",
          draft: !1,
          editUrl: null,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Azure Active Directory",
            hide_table_of_contents: !0,
            sidebar_class_name: "azuread",
            custom_edit_url: null,
            pagination_next: null,
            pagination_prev: null,
          },
          sidebar: "docs",
        },
        g = {},
        C = [],
        w = { toc: C },
        A = "wrapper";
      function x(e) {
        let { components: t, ...r } = e;
        return (0, f.kt)(
          A,
          (0, p.Z)({}, w, r, { components: t, mdxType: "MDXLayout" }),
          (0, f.kt)(
            "h1",
            { id: "-azure-active-directory" },
            (0, f.kt)(y, { mdxType: "Icon" }),
            " Azure Active Directory"
          ),
          (0, f.kt)(m.r, {
            applyFilter: "Azure Active Directory",
            columns: z.z,
            data: v.C,
            columnsToHide: ["category"],
            mdxType: "CommandsTable",
          })
        );
      }
      x.isMDXComponent = !0;
    },
  },
]);
