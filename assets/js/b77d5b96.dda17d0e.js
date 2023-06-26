"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [0],
  {
    5971: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => r,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => o,
          metadata: () => s,
          toc: () => c,
        });
      var i = a(7462),
        n = (a(7294), a(3905));
      const o = { sidebar_position: 2, title: "\u270d\ufe0f Contributing" },
        l = void 0,
        s = {
          unversionedId: "docs/contributing",
          id: "docs/contributing",
          title: "\u270d\ufe0f Contributing",
          description: "Adding a new command to [itjak.io]",
          source: "@site/docs/docs/contributing.md",
          sourceDirName: "docs",
          slug: "/docs/contributing",
          permalink: "/docs/contributing",
          draft: !1,
          editUrl:
            "https://github.com/Luxosity/azureportallist/docs/docs/contributing.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: {
            sidebar_position: 2,
            title: "\u270d\ufe0f Contributing",
          },
          sidebar: "docs",
          previous: {
            title: "\ud83d\udd25 Power User Tips",
            permalink: "/docs/tips",
          },
          next: { title: "\ud83d\udc4c Related", permalink: "/docs/related" },
        },
        r = {},
        c = [
          {
            value: "Adding a new command to itjak.io",
            id: "adding-a-new-command-to-cmdms",
            level: 3,
          },
          {
            value: "Command naming convention",
            id: "command-naming-convention",
            level: 4,
          },
          { value: "Azure", id: "azure", level: 5 },
          {
            value: "App Specific Blades / Pages",
            id: "app-specific-blades--pages",
            level: 4,
          },
          { value: "PR Checklist", id: "pr-checklist", level: 4 },
        ],
        d = { toc: c },
        m = "wrapper";
      function u(e) {
        let { components: t, ...a } = e;
        return (0, n.kt)(
          m,
          (0, i.Z)({}, d, a, { components: t, mdxType: "MDXLayout" }),
          (0, n.kt)(
            "h3",
            { id: "adding-a-new-command-to-cmdms" },
            "Adding a new command to ",
            "[itjak.io]"
          ),
          (0, n.kt)(
            "p",
            null,
            "To add a new command to ",
            "[itjak.io]",
            " for your favorite Microsoft blade or portal you can either submit a form or better yet, create a pull request in GitHub."
          ),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "To submit the form please head over to ",
              (0, n.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://github.com/Luxosity/azureportallist/issues/new?assignees=&labels=enhancement&template=new-command-request.md&title=",
                },
                "Request a new command"
              )
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "The preferable option is to create a pull request which updates the ",
              (0, n.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://github.com/Luxosity/azureportallist/blob/gh-pages/config/commands.csv",
                },
                "commands.csv"
              )
            )
          ),
          (0, n.kt)(
            "h4",
            { id: "command-naming-convention" },
            "Command naming convention"
          ),
          (0, n.kt)("h5", { id: "azure" }, "Azure"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "Try to use the same name used in ",
              (0, n.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://learn.microsoft.com/cli/azure/reference-index?view=azure-cli-latest",
                },
                "Azure CLI"
              ),
              " for the resource."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "If you feel the name is too long, include an alias to the CLI name so it easily discoverable."
            )
          ),
          (0, n.kt)(
            "h4",
            { id: "app-specific-blades--pages" },
            "App Specific Blades / Pages"
          ),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "When a command is deep linking to an app specific blade (e.g. Users blade in Azure AD), include the app's two letter prefix (e.g. ",
              (0, n.kt)("strong", { parentName: "li" }, "ad"),
              "ca.itjak.io)."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "If this is a new app, you can suggest a new two letter prefix for the app."
            )
          ),
          (0, n.kt)("h4", { id: "pr-checklist" }, "PR Checklist"),
          (0, n.kt)(
            "ul",
            null,
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "Verify that your new command/alias does not already exist."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "If the app has a legacy or alternate name, include it in the Keyword column so it is searchable."
            ),
            (0, n.kt)(
              "li",
              { parentName: "ul" },
              "Only include links to Microsoft portals."
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
