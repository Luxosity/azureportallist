"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [891],
  {
    3404: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => z,
          contentTitle: () => y,
          default: () => w,
          frontMatter: () => h,
          metadata: () => g,
          toc: () => E,
        });
      var r,
        n,
        l,
        s,
        o,
        i = a(7462),
        c = a(7294),
        p = a(3905),
        u = a(3677),
        d = a(8570),
        m = a(7626);
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var a = arguments[t];
                  for (var r in a)
                    Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                }
                return e;
              }),
          f.apply(this, arguments)
        );
      }
      const b = (e) => {
          let { title: t, titleId: a, ...i } = e;
          return c.createElement(
            "svg",
            f(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 35,
                height: 35,
                viewBox: "0 0 96 96",
                "aria-labelledby": a,
              },
              i
            ),
            t ? c.createElement("title", { id: a }, t) : null,
            r ||
              (r = c.createElement(
                "defs",
                null,
                c.createElement(
                  "linearGradient",
                  {
                    id: "a",
                    x1: -1032.172,
                    x2: -1059.213,
                    y1: 145.312,
                    y2: 65.426,
                    gradientTransform: "matrix(1 0 0 -1 1075 158)",
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { offset: 0, stopColor: "#114a8b" }),
                  c.createElement("stop", { offset: 1, stopColor: "#0669bc" })
                ),
                c.createElement(
                  "linearGradient",
                  {
                    id: "b",
                    x1: -1023.725,
                    x2: -1029.98,
                    y1: 108.083,
                    y2: 105.968,
                    gradientTransform: "matrix(1 0 0 -1 1075 158)",
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { offset: 0, stopOpacity: 0.3 }),
                  c.createElement("stop", { offset: 0.071, stopOpacity: 0.2 }),
                  c.createElement("stop", { offset: 0.321, stopOpacity: 0.1 }),
                  c.createElement("stop", { offset: 0.623, stopOpacity: 0.05 }),
                  c.createElement("stop", { offset: 1, stopOpacity: 0 })
                ),
                c.createElement(
                  "linearGradient",
                  {
                    id: "c",
                    x1: -1027.165,
                    x2: -997.482,
                    y1: 147.642,
                    y2: 68.561,
                    gradientTransform: "matrix(1 0 0 -1 1075 158)",
                    gradientUnits: "userSpaceOnUse",
                  },
                  c.createElement("stop", { offset: 0, stopColor: "#3ccbf4" }),
                  c.createElement("stop", { offset: 1, stopColor: "#2892df" })
                )
              )),
            n ||
              (n = c.createElement("path", {
                fill: 'url("#a")',
                d: "M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z",
              })),
            l ||
              (l = c.createElement("path", {
                fill: "#0078D4",
                d: "M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.38z",
              })),
            s ||
              (s = c.createElement("path", {
                fill: 'url("#b")',
                d: "M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z",
              })),
            o ||
              (o = c.createElement("path", {
                fill: 'url("#c")',
                d: "M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z",
              }))
          );
        },
        h = {
          title: "Azure",
          sidebar_class_name: "azure",
          hide_table_of_contents: !0,
          custom_edit_url: null,
          pagination_next: null,
          pagination_prev: null,
        },
        y = "<Icon/> Azure",
        g = {
          unversionedId: "portals/azure",
          id: "portals/azure",
          title: "Azure",
          description: "<CommandsTable",
          source: "@site/docs/portals/azure.md",
          sourceDirName: "portals",
          slug: "/portals/azure",
          permalink: "/portals/azure",
          draft: !1,
          editUrl: null,
          tags: [],
          version: "current",
          frontMatter: {
            title: "Azure",
            sidebar_class_name: "azure",
            hide_table_of_contents: !0,
            custom_edit_url: null,
            pagination_next: null,
            pagination_prev: null,
          },
          sidebar: "docs",
        },
        z = {},
        E = [],
        _ = { toc: E },
        x = "wrapper";
      function w(e) {
        let { components: t, ...a } = e;
        return (0, p.kt)(
          x,
          (0, i.Z)({}, _, a, { components: t, mdxType: "MDXLayout" }),
          (0, p.kt)(
            "h1",
            { id: "-azure" },
            (0, p.kt)(b, { mdxType: "Icon" }),
            " Azure"
          ),
          (0, p.kt)(u.r, {
            applyFilter: "Azure",
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
