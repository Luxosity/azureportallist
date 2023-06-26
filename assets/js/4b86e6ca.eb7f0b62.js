"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [31],
  {
    2063: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => m,
          contentTitle: () => i,
          default: () => c,
          frontMatter: () => r,
          metadata: () => n,
          toc: () => d,
        });
      var s = o(7462),
        a = (o(7294), o(3905));
      const r = {
          sidebar_position: 1,
          title: "\ud83d\udd25 Power User Tips",
          description: "\ud83d\udd25 Power User Tips",
          image: "/",
        },
        i = void 0,
        n = {
          unversionedId: "docs/tips",
          id: "docs/tips",
          title: "\ud83d\udd25 Power User Tips",
          description: "\ud83d\udd25 Power User Tips",
          source: "@site/docs/tips/tips.md",
          sourceDirName: "docs",
          slug: "/tips",
          permalink: "/tips",
          draft: !1,
          editUrl:
            "https://github.com/Luxosity/azureportallist/blob/gh-pages/docs/tips/tips.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: {
            sidebar_position: 1,
            title: "\ud83d\udd25 Power User Tips",
            description: "\ud83d\udd25 Power User Tips",
            image: "/",
          },
          sidebar: "docs",
          previous: { title: "My Pages", permalink: "/portals/mypages" },
          next: {
            title: "\u270d\ufe0f Contributing",
            permalink: "/contributing",
          },
        },
        m = {},
        d = [
          {
            value: "Address bar autocomplete",
            id: "address-bar-autocomplete",
            level: 2,
          },
          { value: "itjak.io/{command}", id: "cmdmscommand", level: 2 },
        ],
        l = { toc: d },
        p = "wrapper";
      function c(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          p,
          (0, s.Z)({}, l, r, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "h2",
            { id: "address-bar-autocomplete" },
            "Address bar autocomplete"
          ),
          (0, a.kt)(
            "p",
            null,
            "You can install the ",
            "[itjak.io]",
            " browser extension to get autocomplete support for all the commands right in the address bar, plus you can avoid typing .itjak.io each time."
          ),
          (0, a.kt)("p", null, "Once the extension is installed you can:"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)("li", { parentName: "ul" }, "Open a new tab"),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Type ",
              (0, a.kt)("strong", { parentName: "li" }, "c"),
              " and press ",
              (0, a.kt)("strong", { parentName: "li" }, "SPACE"),
              " or ",
              (0, a.kt)("strong", { parentName: "li" }, "TAB")
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Type in the itjak.io shortcut. eg. ",
              (0, a.kt)("strong", { parentName: "li" }, "adusers")
            )
          ),
          (0, a.kt)(
            "admonition",
            { type: "tip" },
            (0, a.kt)(
              "p",
              { parentName: "admonition" },
              "Get the browser extension for your favorite browser from the links below."
            ),
            (0, a.kt)(
              "ul",
              { parentName: "admonition" },
              (0, a.kt)(
                "li",
                { parentName: "ul" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "li",
                    href: "https://microsoftedge.microsoft.com/addons/detail/jfkgnnmpdnoelcfmojmddglicjlagfjm",
                  },
                  "[itjak.io] Edge Add-on"
                )
              ),
              (0, a.kt)(
                "li",
                { parentName: "ul" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "li",
                    href: "https://chrome.google.com/webstore/detail/cmdms/elbjjbmcngffncifaghboopbmegjnkbi",
                  },
                  "[itjak.io] Chrome Extension"
                )
              ),
              (0, a.kt)(
                "li",
                { parentName: "ul" },
                (0, a.kt)(
                  "a",
                  {
                    parentName: "li",
                    href: "https://addons.mozilla.org/firefox/addon/cmd-ms/",
                  },
                  "[itjak.io] Firefox Add-on"
                )
              )
            )
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("img", {
              alt: "Search bar demo",
              src: o(334).Z,
              width: "800",
              height: "522",
            })
          ),
          (0, a.kt)("h2", { id: "cmdmscommand" }, "itjak.io/{command}"),
          (0, a.kt)(
            "p",
            null,
            "[itjak.io]",
            " also supports the ",
            (0, a.kt)("strong", { parentName: "p" }, "itjak.io/{command}"),
            " format for those who prefer it over ",
            (0, a.kt)("strong", { parentName: "p" }, "{command}.itjak.io"),
            "."
          ),
          (0, a.kt)(
            "p",
            null,
            "Having said that ",
            (0, a.kt)("strong", { parentName: "p" }, "{command}.itjak.io"),
            " is better in the long run due to autocomplete filling in the itjak.io suffix as soon as you type in the {command} in the browser window."
          )
        );
      }
      c.isMDXComponent = !0;
    },
    334: (e, t, o) => {
      o.d(t, { Z: () => s });
      const s =
        o.p + "assets/images/browserdemo-6e5bceed61db417d2a7fa882f75f6524.gif";
    },
  },
]);
