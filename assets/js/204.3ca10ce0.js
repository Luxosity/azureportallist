"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [204],
  {
    4204: (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      var l = a(7294),
        n = a(5999),
        m = a(1944),
        o = a(215),
        c = a(3677),
        s = a(8570),
        r = a(7626);
      function i() {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(m.d, {
            title: (0, n.I)({
              id: "theme.NotFound.title",
              message: "Page Not Found",
            }),
          }),
          l.createElement(
            o.Z,
            null,
            l.createElement(
              "main",
              { className: "container margin-vert--xl" },
              l.createElement(
                "div",
                { className: "row" },
                l.createElement(
                  "div",
                  { className: "col col--6 col--offset-0" },
                  l.createElement(
                    "h1",
                    { className: "hero__title" },
                    l.createElement(
                      n.Z,
                      {
                        id: "theme.NotFound.title",
                        description: "The title of the 404 page",
                      },
                      "Command Not Found"
                    )
                  ),
                  l.createElement(
                    "p",
                    null,
                    l.createElement(
                      n.Z,
                      {
                        id: "theme.NotFound.p1",
                        description: "The first paragraph of the 404 page",
                      },
                      "Use the table below to look up the command."
                    )
                  ),
                  l.createElement(
                    "p",
                    null,
                    "If the command you want is not yet available in ",
                    l.createElement("b", null, "itjak.io"),
                    " ",
                    "you can use the ",
                    " ",
                    l.createElement(
                      "a",
                      {
                        href: "https://github.com/Luxosity/azureportallist/issues/new?assignees=&labels=enhancement&template=new-command-request.md&title=",
                      },
                      "Propose New Command form"
                    ),
                    " to make a request."
                  )
                ),
                l.createElement(
                  "div",
                  { className: "col col--offset-0" },
                  l.createElement(c.r, {
                    columns: r.z,
                    data: s.C,
                    applyFilter: "",
                  })
                )
              )
            )
          )
        );
      }
    },
  },
]);
