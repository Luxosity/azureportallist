"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [866],
  {
    6440: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => _,
          contentTitle: () => g,
          default: () => w,
          frontMatter: () => f,
          metadata: () => b,
          toc: () => h,
        });
      var n,
        l,
        s,
        r,
        o = a(7462),
        i = a(7294),
        p = a(3905),
        c = a(3677),
        d = a(8570),
        m = a(7626);
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var n in a)
                    Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                }
                return e;
              }),
          u.apply(this, arguments)
        );
      }
      const y = (e) => {
          let { title: t, titleId: a, ...o } = e;
          return i.createElement(
            "svg",
            u(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 35,
                height: 35,
                viewBox: "0 0 18 18",
                "aria-labelledby": a,
              },
              o
            ),
            n ||
              (n = i.createElement(
                "defs",
                null,
                i.createElement(
                  "linearGradient",
                  {
                    id: "a",
                    x1: 9,
                    y1: 6.88,
                    x2: 9,
                    y2: 20.45,
                    gradientUnits: "userSpaceOnUse",
                  },
                  i.createElement("stop", {
                    offset: 0.22,
                    stopColor: "#32d4f5",
                  }),
                  i.createElement("stop", { offset: 1, stopColor: "#198ab3" })
                ),
                i.createElement(
                  "linearGradient",
                  {
                    id: "b",
                    x1: 8.61,
                    y1: -0.4,
                    x2: 9.6,
                    y2: 11.92,
                    gradientUnits: "userSpaceOnUse",
                  },
                  i.createElement("stop", {
                    offset: 0.22,
                    stopColor: "#32d4f5",
                  }),
                  i.createElement("stop", { offset: 1, stopColor: "#198ab3" })
                )
              )),
            void 0 === t
              ? i.createElement("title", { id: a }, "Icon-identity-230")
              : t
              ? i.createElement("title", { id: a }, t)
              : null,
            l ||
              (l = i.createElement("path", {
                d: "M15.72 18a1.45 1.45 0 0 0 1.45-1.45.47.47 0 0 0 0-.17C16.59 11.81 14 8.09 9 8.09s-7.66 3.15-8.17 8.3A1.46 1.46 0 0 0 2.14 18h13.58Z",
                fill: "url(#a)",
              })),
            s ||
              (s = i.createElement("path", {
                d: "M9 9.17a4.59 4.59 0 0 1-2.48-.73L9 14.86l2.44-6.38A4.53 4.53 0 0 1 9 9.17Z",
                fill: "#fff",
                opacity: 0.8,
              })),
            r ||
              (r = i.createElement("circle", {
                cx: 9.01,
                cy: 4.58,
                r: 4.58,
                fill: "url(#b)",
              }))
          );
        },
        f = {
          title: "My Pages",
          sidebar_class_name: "mypages",
          hide_table_of_contents: !0,
          custom_edit_url: null,
          pagination_next: null,
          pagination_prev: null,
        },
        g = "<Icon/> My Pages",
        b = {
          unversionedId: "portals/mypages",
          id: "portals/mypages",
          title: "My Pages",
          description: "<CommandsTable",
          source: "@site/docs/portals/mypages.md",
          sourceDirName: "portals",
          slug: "/portals/mypages",
          permalink: "/portals/mypages",
          draft: !1,
          editUrl: null,
          tags: [],
          version: "current",
          frontMatter: {
            title: "My Pages",
            sidebar_class_name: "mypages",
            hide_table_of_contents: !0,
            custom_edit_url: null,
            pagination_next: null,
            pagination_prev: null,
          },
          sidebar: "docs",
        },
        _ = {},
        h = [],
        E = { toc: h },
        v = "wrapper";
      function w(e) {
        let { components: t, ...a } = e;
        return (0, p.kt)(
          v,
          (0, o.Z)({}, E, a, { components: t, mdxType: "MDXLayout" }),
          (0, p.kt)(
            "h1",
            { id: "-my-pages" },
            (0, p.kt)(y, { mdxType: "Icon" }),
            " My Pages"
          ),
          (0, p.kt)(c.r, {
            applyFilter: "My Pages",
            columns: m.z,
            data: d.C,
            columnsToHide: ["category"],
            mdxType: "CommandsTable",
          })
        );
      }
      w.isMDXComponent = !0;
    },
  },
]);
