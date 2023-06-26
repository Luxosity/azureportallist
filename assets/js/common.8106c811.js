(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [592],
  {
    3905: (e, t, r) => {
      "use strict";
      r.d(t, { Zo: () => l, kt: () => g });
      var o = r(7294);
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (r = a[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (r = a[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      var c = o.createContext({}),
        u = function (e) {
          var t = o.useContext(c),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        l = function (e) {
          var t = u(e.components);
          return o.createElement(c.Provider, { value: t }, e.children);
        },
        d = "mdxType",
        m = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        p = o.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            l = s(e, ["components", "mdxType", "originalType", "parentName"]),
            d = u(r),
            p = n,
            g = d["".concat(c, ".").concat(p)] || d[p] || m[p] || a;
          return r
            ? o.createElement(g, i(i({ ref: t }, l), {}, { components: r }))
            : o.createElement(g, i({ ref: t }, l));
        });
      function g(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ("string" == typeof e || n) {
          var a = r.length,
            i = new Array(a);
          i[0] = p;
          var s = {};
          for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e),
            (s[d] = "string" == typeof e ? e : n),
            (i[1] = s);
          for (var u = 2; u < a; u++) i[u] = r[u];
          return o.createElement.apply(null, i);
        }
        return o.createElement.apply(null, r);
      }
      p.displayName = "MDXCreateElement";
    },
    3677: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => d });
      var o = r(7462),
        n = r(7294),
        a = r(9521);
      r(5666);
      function i(e) {
        let { className: t } = e;
        return n.createElement(
          "svg",
          {
            className: t,
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 320 512",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement("path", {
            d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z",
          })
        );
      }
      function s(e) {
        let { className: t } = e;
        return n.createElement(
          "svg",
          {
            className: t,
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 320 512",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement("path", {
            d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z",
          })
        );
      }
      function c(e) {
        let { className: t } = e;
        return n.createElement(
          "svg",
          {
            className: t,
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 320 512",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement("path", {
            d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z",
          })
        );
      }
      const u = () => ({});
      function l(e) {
        let {
          preGlobalFilteredRows: t,
          globalFilter: r,
          setGlobalFilter: o,
          applyFilter: i,
        } = e;
        t.length;
        const [s, c] = n.useState(r),
          u = (0, a.useAsyncDebounce)((e) => {
            o(e || void 0);
          }, 1);
        return n.createElement(
          "label",
          {
            className:
              "flex items-baseline w-96 " + (0 === i.length ? "gap-x-2" : ""),
          },
          n.createElement("span", null),
          n.createElement("input", {
            type: "text",
            autoFocus: !0,
            class:
              "mt-1 block w-full rounded-md border-gray-300  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-gray-700 searchbox",
            value: s || "",
            onChange: (e) => {
              c(e.target.value), u(e.target.value);
            },
            placeholder: "Search commands...",
          })
        );
      }
      const d = (e) => {
        let {
          columns: t,
          data: r,
          applyFilter: d = "",
          columnsToHide: m = [""],
          getHeaderProps: p = u,
          getColumnProps: g = u,
        } = e;
        const {
          getTableProps: f,
          getTableBodyProps: y,
          headerGroups: h,
          rows: v,
          prepareRow: w,
          state: S,
          preGlobalFilteredRows: z,
          setGlobalFilter: A,
        } = (0, a.useTable)(
          {
            columns: t,
            data: r,
            applyFilter: d,
            columnsToHide: m,
            initialState: {
              hiddenColumns: m.concat(["keywords"]),
              filters: [{ id: "category", value: d }],
            },
          },
          a.useFilters,
          a.useGlobalFilter,
          a.useSortBy
        );
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: "flex gap-x-2" },
            h.map((e) =>
              e.headers.map((e) =>
                e.Filter && 0 === d.length
                  ? n.createElement("div", { key: e.id }, e.render("Filter"))
                  : null
              )
            ),
            n.createElement(l, {
              preGlobalFilteredRows: z,
              globalFilter: S.globalFilter,
              setGlobalFilter: A,
              applyFilter: d,
            })
          ),
          n.createElement(
            "div",
            { className: "py-2 " },
            n.createElement(
              "div",
              { className: "overflow-x-auto" },
              n.createElement(
                "table",
                (0, o.Z)({}, f(), {
                  className: "min-w-full divide-y divide-gray-200 table-fixed",
                }),
                n.createElement(
                  "thead",
                  { className: "" },
                  h.map((e) =>
                    n.createElement(
                      "tr",
                      e.getHeaderGroupProps(),
                      e.headers.map((e) =>
                        n.createElement(
                          "th",
                          (0, o.Z)(
                            {
                              scope: "col",
                              className:
                                "group px-6 py-2 text-left text-xs font-medium uppercase tracking-wider",
                            },
                            e.getHeaderProps(e.getSortByToggleProps())
                          ),
                          n.createElement(
                            "div",
                            { className: "flex items-center justify-between" },
                            e.render("Header"),
                            n.createElement(
                              "span",
                              null,
                              e.isSorted
                                ? e.isSortedDesc
                                  ? n.createElement(c, {
                                      className: "w-4 h-4 text-gray-400",
                                    })
                                  : n.createElement(s, {
                                      className: "w-4 h-4 text-gray-400",
                                    })
                                : n.createElement(i, {
                                    className:
                                      "w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100",
                                  })
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                n.createElement(
                  "tbody",
                  (0, o.Z)({}, y(), { className: "divide-y divide-gray-200" }),
                  v.map(
                    (e, t) => (
                      w(e),
                      n.createElement(
                        "tr",
                        (0, o.Z)(
                          { class: "hover:bg-gray-50 dark:hover:bg-gray-600" },
                          e.getRowProps()
                        ),
                        e.cells.map((e) =>
                          n.createElement(
                            "td",
                            e.getCellProps({ className: e.column.className }),
                            e.render("Cell")
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    7626: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => n });
      var o = r(7294);
      const n = [
        {
          Header: "",
          accessor: "category",
          className: "commands-data-table",
          Filter: function (e) {
            let {
              column: {
                filterValue: t,
                setFilter: r,
                preFilteredRows: n,
                id: a,
              },
            } = e;
            const i = o.useMemo(() => {
              const e = new Set();
              return (
                n.forEach((t) => {
                  e.add(t.values[a]);
                }),
                [...e.values()]
              );
            }, [a, n]);
            return o.createElement(
              "label",
              { className: "flex gap-x-2 items-baseline" },
              o.createElement(
                "select",
                {
                  className:
                    "mt-1 block rounded-md border-gray-300  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  dark:bg-zinc-800 dark:border-gray-700",
                  "aria-label": "Select category",
                  name: a,
                  id: a,
                  value: t || "All",
                  onChange: (e) => {
                    r(e.target.value || void 0);
                  },
                },
                o.createElement(
                  "option",
                  { value: "" },
                  "All Microsoft Portals"
                ),
                i.map((e, t) =>
                  o.createElement("option", { key: t, value: e }, e)
                )
              )
            );
          },
          filter: (e, t, r) =>
            e.filter((e) => {
              const o = e.values[t];
              return console.log(o, r), "" === r || r === o;
            }),
          Cell: (e) => {
            let {
              cell: { value: t },
              row: { original: r },
            } = e;
            return o.createElement("img", {
              alt: "{value}",
              class: `cat-${r.categoryShortName}`,
            });
          },
        },
        {
          Header: "Name",
          accessor: "description",
          className: "commands-data-table whitespace-nowrap left",
          Cell: (e) => {
            let {
              cell: { value: t },
              row: { original: r },
            } = e;
            return o.createElement(
              "a",
              { href: `${r.url}`, target: "blank", rel: "noreferrer noopener" },
              t
            );
          },
        },
        {
          Header: "Command",
          accessor: "command",
          className: "commands-data-table right",
          Cell: (e) => {
            let {
              cell: { value: t },
              row: { original: r },
            } = e;
            return o.createElement(
              "a",
              {
                href: `https://${t}.itjak.io`,
                target: "blank",
                rel: "noreferrer noopener",
              },
              o.createElement("b", null, t),
              ".itjak.io"
            );
          },
        },
        {
          Header: "Alias",
          accessor: "alias",
          className: "commands-data-table left",
        },
        {
          Header: "Keywords",
          accessor: "keywords",
          className: "commands-data-table left",
        },
        {
          Header: "Url",
          accessor: "url",
          className: "commands-data-table left col-url",
          Cell: (e) => {
            let {
              cell: { value: t },
              row: { original: r },
            } = e;
            return o.createElement(
              "a",
              { href: t, target: "blank", rel: "noreferrer noopener" },
              t
            );
          },
        },
      ];
    },
    8570: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => o });
      const o = [
        {
          command: "ad",
          alias: "aad,entra",
          description: "Azure Active Directory (Entra)",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com",
        },
        {
          command: "azad",
          alias: "",
          description: "Azure Active Directory",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview?",
        },
        {
          command: "admin",
          alias: "",
          description: "Microsoft 365 Admin",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://admin.microsoft.com",
        },
        {
          command: "az",
          alias: "azure",
          description: "Azure",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com",
        },
        {
          command: "azp",
          alias: "azurepreview",
          description: "Azure Preview Portal",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://preview.portal.azure.com/",
        },
        {
          command: "in",
          alias: "intune,endpoint",
          description: "Intune",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com",
        },
        {
          command: "defender",
          alias: "def,security",
          description: "Defender",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com",
        },
        {
          command: "azsentinel",
          alias: "sentinel",
          description: "Sentinel",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#blade/Microsoft_Azure_Security_Insights/WorkspaceSelectorBlade?",
        },
        {
          command: "ex",
          alias: "exo,exchange",
          description: "Exchange",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://admin.exchange.microsoft.com",
        },
        {
          command: "sp",
          alias: "spo,sharepoint",
          description: "SharePoint",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://admin.microsoft.com/sharepoint",
        },
        {
          command: "teams",
          alias: "team",
          description: "Teams",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://admin.teams.microsoft.com/",
        },
        {
          command: "one",
          alias: "onedrive",
          description: "OneDrive",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://admin.onedrive.com",
        },
        {
          command: "pbi",
          alias: "powerbi",
          description: "Power BI",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://app.powerbi.com/admin-portal",
        },
        {
          command: "pp",
          alias: "ppa,power",
          description: "Power Platform",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://admin.powerplatform.microsoft.com",
        },
        {
          command: "yam",
          alias: "yammer",
          description: "Yammer",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://www.yammer.com/office365/admin",
        },
        {
          command: "ge",
          alias: "",
          description: "Graph Explorer",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://developer.microsoft.com/en-us/graph/graph-explorer",
        },
        {
          command: "arg",
          alias: "arge",
          description: "Azure Resource Graph Explorer",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/ArgQueryBlade?",
        },
        {
          command: "mail",
          alias: "outlook",
          description: "Outlook",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://outlook.office365.com/mail/",
        },
        {
          command: "puudg",
          alias: "purviewudg,purview",
          description: "Purview Unified Data Governance",
          keywords: "Azure Purview portal",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://web.purview.azure.com",
        },
        {
          command: "puperms",
          alias: "",
          description: "Purview Permissions manager",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/permissions",
        },
        {
          command: "pucmgr",
          alias: "decm",
          description: "Purview Compliance manager",
          keywords: "Microsoft Compliance Manager",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/compliancemanager",
        },
        {
          command: "pucloudgov",
          alias: "",
          description: "Purview App Governance",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/cloudapps/app-governance",
        },
        {
          command: "puaudit",
          alias: "",
          description: "Purview Audit",
          keywords: "Microsoft 365 Advanced Audit",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/auditlogsearch",
        },
        {
          command: "pucomms",
          alias: "",
          description: "Purview Communication Compliance",
          keywords: "Microsoft 365 Communication Compliance",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/supervisoryreview",
        },
        {
          command: "pudlp",
          alias: "dlp",
          description: "Purview Data Loss Prevention",
          keywords: "Microsoft Endpoint DLP",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/datalossprevention",
        },
        {
          command: "puedisc",
          alias: "ediscovery",
          description: "Purview eDiscovery",
          keywords: "Office 365 Advanced eDiscovery",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/advancedediscovery",
        },
        {
          command: "pudlm",
          alias: "",
          description: "Purview Data Lifecycle Management",
          keywords: "Microsoft Information Governance",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/informationgovernance",
        },
        {
          command: "purecmon",
          alias: "",
          description: "Purview Records Management",
          keywords: "Records Management in Microsoft 365",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/recordsmanagement",
        },
        {
          command: "puinfoprot",
          alias: "",
          description: "Purview Information Protection",
          keywords: "Microsoft Information Protection",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/informationprotection",
        },
        {
          command: "puirm",
          alias: "",
          description: "Purview Insider Risk Management",
          keywords: "Microsoft 365 Insider Risk Management",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/insiderriskmgmt",
        },
        {
          command: "puprivaprm",
          alias: "",
          description: "Purview Priva Privacy Risk Management",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/privacymgmtoverview",
        },
        {
          command: "puprivasrr",
          alias: "",
          description: "Purview Priva Subject Rights Requests",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://compliance.microsoft.com/privacymgmtsrm",
        },
        {
          command: "deincidents",
          alias: "deinc",
          description: "Incidents",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/incidents",
        },
        {
          command: "dehunting",
          alias: "dehunt",
          description: "Hunting",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/v2/advanced-hunting",
        },
        {
          command: "deactions",
          alias: "",
          description: "Action centre",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/action-center",
        },
        {
          command: "deexplorer",
          alias: "",
          description: "Explorer",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/threatexplorer",
        },
        {
          command: "dere",
          alias: "",
          description: "Restricted entities",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/restrictedentities",
        },
        {
          command: "adappreg",
          alias: "",
          description: "App registrations",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM",
        },
        {
          command: "adentapp",
          alias: "adapp,adapps",
          description: "Enterprise applications",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview",
        },
        {
          command: "adgroups",
          alias: "",
          description: "Groups",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/GroupsManagementMenuBlade/~/AllGroups/menuId/AllGroups",
        },
        {
          command: "adusers",
          alias: "",
          description: "Users",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/UserManagementMenuBlade/~/AllUsers/menuId/AllUsers",
        },
        {
          command: "addevices",
          alias: "",
          description: "Devices",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_Devices/DevicesMenuBlade/~/Devices/menuId/Devices",
        },
        {
          command: "addevicesettings",
          alias: "",
          description: "Device settings",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_Devices/DevicesMenuBlade/~/DeviceSettings/menuId/Devices/Microsoft_AAD_Devices/DevicesMenuBlade",
        },
        {
          command: "adguests",
          alias: "adext",
          description: "External Identities",
          keywords: "guests",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/CompanyRelationshipsMenuBlade/~/Settings/menuId/ExternalIdentitiesGettingStarted",
        },
        {
          command: "adca",
          alias: "",
          description: "Conditional Access",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/Policies?",
        },
        {
          command: "adctas",
          alias: "adxtap",
          description: "Cross-tenant access settings",
          keywords: "external",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/CompanyRelationshipsMenuBlade/~/CrossTenantAccessSettings/menuId/CrossTenantAccessSettings",
        },
        {
          command: "adadfslog",
          alias: "",
          description: "ADFS services",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_Azure_ADHybridHealth/AadHealthMenuBlade/~/AdfsServicesList",
        },
        {
          command: "adauth",
          alias: "",
          description: "Authentication methods",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/~/AdminAuthMethods",
        },
        {
          command: "adconsent",
          alias: "",
          description: "Consent and permissions",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/ConsentPoliciesMenuBlade/~/UserSettings",
        },
        {
          command: "adlegacymfa",
          alias: "",
          description: "Legacy MFA",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://account.activedirectory.windowsazure.com/UserManagement/MfaSettings.aspx",
        },
        {
          command: "adlicense",
          alias: "",
          description: "Licenses",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/LicensesMenuBlade/~/Products",
        },
        {
          command: "adsign",
          alias: "adlogs",
          description: "Sign-in logs",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/SignInEventsV3Blade/timeRangeType/last24hours/showApplicationSignIns~/true",
        },
        {
          command: "admfaunblock",
          alias: "",
          description: "MFA unblock",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/MultifactorAuthenticationMenuBlade/~/BlockedUsers/fromProviders~/false",
        },
        {
          command: "adpim",
          alias: "",
          description: "Privileged Identity Management",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_Azure_PIMCommon/CommonMenuBlade/~/quickStart",
        },
        {
          command: "adpimr",
          alias: "",
          description: "Privileged Identity Management for Roles",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_Azure_PIMCommon/ActivationMenuBlade/~/aadmigratedroles?",
        },
        {
          command: "adpimg",
          alias: "",
          description: "Privileged Identity Management for Groups",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_Azure_PIMCommon/ActivationMenuBlade/~/aadgroup?",
        },
        {
          command: "adpimz",
          alias: "adpimaz",
          description: "Privileged Identity Management for Azure resources",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_Azure_PIMCommon/CommonMenuBlade/~/azurerbac?",
        },
        {
          command: "adreviews",
          alias: "adar",
          description: "Access reviews",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_ERM/DashboardBlade/~/Controls",
        },
        {
          command: "adroles",
          alias: "",
          description: "Roles and administrators",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/RolesManagementMenuBlade/~/AllRoles",
        },
        {
          command: "adpa",
          alias: "",
          description: "Protected actions",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/RolesManagementMenuBlade/~/ProtectedActions",
        },
        {
          command: "adac",
          alias: "",
          description: "Authentication context",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/AuthenticationContext",
        },
        {
          command: "adscore",
          alias: "",
          description: "Secure score",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/SecurityMenuBlade/~/IdentitySecureScore/menuId/IdentitySecureScore",
        },
        {
          command: "adsecurity",
          alias: "",
          description: "Security",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/SecurityMenuBlade/~/GettingStarted/menuId/SecurityCenter",
        },
        {
          command: "adpassword",
          alias: "adsspr",
          description: "Password reset",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/PasswordResetMenuBlade/~/Properties",
        },
        {
          command: "adsupport",
          alias: "",
          description: "Support",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_Azure_Support/NewSupportRequestV3Blade/callerName/ActiveDirectory/issueType/technical",
        },
        {
          command: "adsynclog",
          alias: "",
          description: "AAD Connect - Sync errors",
          keywords: "aadconnect",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_Azure_ADHybridHealth/AadHealthMenuBlade/~/SyncErros/Microsoft_Azure_ADHybridHealth/AadHealthMenuBlade",
        },
        {
          command: "myaccess",
          alias: "",
          description: "My access",
          keywords: "",
          category: "My Pages",
          categoryShortName: "my-pages",
          url: "https://myaccess.microsoft.com",
        },
        {
          command: "myaccount",
          alias: "",
          description: "My account",
          keywords: "",
          category: "My Pages",
          categoryShortName: "my-pages",
          url: "https://myaccount.microsoft.com",
        },
        {
          command: "mygroups",
          alias: "mygroup",
          description: "My groups",
          keywords: "",
          category: "My Pages",
          categoryShortName: "my-pages",
          url: "https://account.activedirectory.windowsazure.com/r#/groups",
        },
        {
          command: "mysec",
          alias: "mysecurity,mysecurityinfo",
          description: "My security info",
          keywords: "my sign ins",
          category: "My Pages",
          categoryShortName: "my-pages",
          url: "https://mysignins.microsoft.com/security-info",
        },
        {
          command: "myapps",
          alias: "myapp",
          description: "My apps",
          keywords: "",
          category: "My Pages",
          categoryShortName: "my-pages",
          url: "https://myapps.microsoft.com",
        },
        {
          command: "mystaff",
          alias: "",
          description: "My staff",
          keywords: "",
          category: "My Pages",
          categoryShortName: "my-pages",
          url: "https://mystaff.microsoft.com",
        },
        {
          command: "indevices",
          alias: "",
          description: "Devices",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/overview",
        },
        {
          command: "inapps",
          alias: "",
          description: "Apps",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/AppsMenu/~/overview",
        },
        {
          command: "insecurity",
          alias: "insec",
          description: "Security",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_Workflows/SecurityManagementMenu/~/overview",
        },
        {
          command: "inusers",
          alias: "",
          description: "Users",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/UserManagementMenuBlade/~/AllUsers",
        },
        {
          command: "ingroups",
          alias: "",
          description: "Groups",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_AAD_IAM/GroupsManagementMenuBlade/~/AllGroups",
        },
        {
          command: "intenant",
          alias: "intadmin",
          description: "Tenant admin",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/TenantAdminMenu/~/tenantStatus",
        },
        {
          command: "inwin",
          alias: "",
          description: "Windows devices",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/~/windowsDevices",
        },
        {
          command: "inios",
          alias: "",
          description: "iOS/iPad devices",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesIosMenu/~/iosDevices",
        },
        {
          command: "inmacos",
          alias: "",
          description: "macOS devices",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMacOsMenu/~/macOsDevices",
        },
        {
          command: "inandroid",
          alias: "",
          description: "Android",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesAndroidMenu/~/overview",
        },
        {
          command: "inenroll",
          alias: "",
          description: "Enroll devices",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/~/windowsEnrollment",
        },
        {
          command: "incompliance",
          alias: "",
          description: "Compliance policies",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesComplianceMenu/~/policies",
        },
        {
          command: "inconfig",
          alias: "",
          description: "Configuration profiles",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/configurationProfiles",
        },
        {
          command: "inscripts",
          alias: "",
          description: "Scripts",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/powershell",
        },
        {
          command: "inappconfig",
          alias: "",
          description: "App configuration policies",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/AppsMenu/~/appConfig",
        },
        {
          command: "azautomanage",
          alias: "azam",
          description: "Automanage",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_AutoManagedVirtualMachines/AutomanageMenuBlade",
        },
        {
          command: "azavd",
          alias: "avd",
          description: "Azure Virtual Desktop",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_WVD/WvdManagerMenuBlade/~/overview",
        },
        {
          command: "azauto",
          alias: "azautomation",
          description: "Azure Automation",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Automation%2FAutomationAccounts",
        },
        {
          command: "azfn",
          alias: "",
          description: "Function App",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites/kind/functionapp",
        },
        {
          command: "azcosmos",
          alias: "",
          description: "Azure Cosmos DB",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DocumentDb%2FdatabaseAccounts",
        },
        {
          command: "azmonitor",
          alias: "",
          description: "Monitor",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade/~/overview",
        },
        {
          command: "azappinsights",
          alias: "appinsights",
          description: "Application Insights",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/microsoft.insights%2Fcomponents",
        },
        {
          command: "azloganalytics",
          alias: "la",
          description: "Log Analytics",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.OperationalInsights%2Fworkspaces",
        },
        {
          command: "azasp",
          alias: "",
          description: "App Service plans",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2FserverFarms",
        },
        {
          command: "azapps",
          alias: "azweb",
          description: "App Services",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites",
        },
        {
          command: "azsql",
          alias: "",
          description: "SQL servers",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2Fservers",
        },
        {
          command: "azsqldb",
          alias: "",
          description: "SQL databases",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2Fservers%2Fdatabases",
        },
        {
          command: "azsqlep",
          alias: "",
          description: "SQL elastic pools",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2Fservers%2Felasticpools",
        },
        {
          command: "azsqlmi",
          alias: "sqlmi",
          description: "SQL managed instance",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Sql%2FmanagedInstances",
        },
        {
          command: "azcost",
          alias: "",
          description: "Cost Management + Billing",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_GTM/ModernBillingMenuBlade/~/BillingAccounts",
        },
        {
          command: "azlb",
          alias: "lb",
          description: "Load balancing",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Network/LoadBalancingHubMenuBlade/~/overview",
        },
        {
          command: "azsa",
          alias: "storage",
          description: "Storage accounts",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Storage%2FStorageAccounts",
        },
        {
          command: "azdisks",
          alias: "",
          description: "Disks",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2Fdisks",
        },
        {
          command: "azvn",
          alias: "vnet",
          description: "Virtual networks",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FvirtualNetworks",
        },
        {
          command: "azdefender",
          alias: "",
          description: "Microsoft Defender for Cloud",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Security/SecurityMenuBlade/~/0",
        },
        {
          command: "azadf",
          alias: "",
          description: "Data factories",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DataFactory%2FdataFactories",
        },
        {
          command: "azhelp",
          alias: "",
          description: "Help + support",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Support/HelpAndSupportBlade/~/overview",
        },
        {
          command: "azsubs",
          alias: "",
          description: "Subscriptions",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Billing/SubscriptionsBlade?",
        },
        {
          command: "azrg",
          alias: "",
          description: "Resource groups",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResourceGroups?",
        },
        {
          command: "aznsg",
          alias: "",
          description: "Network security groups",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FNetworkSecurityGroups",
        },
        {
          command: "azkv",
          alias: "kv",
          description: "Key Vault",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.KeyVault%2Fvaults",
        },
        {
          command: "azkusto",
          alias: "adx",
          description: "Data Explorer",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://dataexplorer.azure.com/",
        },
        {
          command: "azvm",
          alias: "",
          description: "Virtual machines",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FVirtualMachines",
        },
        {
          command: "azaks",
          alias: "",
          description: "Kubernetes services",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerService%2FmanagedClusters",
        },
        {
          command: "azredis",
          alias: "",
          description: "Azure Cache for Redis",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Cache%2FRedis",
        },
        {
          command: "azservicebus",
          alias: "bus",
          description: "Service Bus",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ServiceBus%2Fnamespaces",
        },
        {
          command: "azappgw",
          alias: "appgw,gateway",
          description: "Application Gateway",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Network/LoadBalancingHubMenuBlade/~/applicationgateways",
        },
        {
          command: "azwaf",
          alias: "waf",
          description: "Web Application Firewall policies",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FFrontDoorWebApplicationFirewallPolicies",
        },
        {
          command: "azhybridcompute",
          alias: "",
          description: "Servers - Azure Arc",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.HybridCompute%2Fmachines",
        },
        {
          command: "azssh",
          alias: "",
          description: "SSH Keys",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FsshPublicKeys",
        },
        {
          command: "azdcr",
          alias: "",
          description: "Data Collection Rules",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Insights%2FdataCollectionRules",
        },
        {
          command: "azacr",
          alias: "",
          description: "Container Registries",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerRegistry%2Fregistries",
        },
        {
          command: "azcontainer",
          alias: "",
          description: "Container Instances",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerInstance%2FcontainerGroups",
        },
        {
          command: "azpolicy",
          alias: "",
          description: "Azure Policy",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Policy/PolicyMenuBlade/~/overview",
        },
        {
          command: "azshell",
          alias: "shell",
          description: "Azure Cloud Shell",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#cloudshell/",
        },
        {
          command: "adinvite",
          alias: "",
          description: "Azure B2B Invitations",
          keywords: "b2b",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/UserCreateBlade/initialMode~/1/b2cEnabled~/false",
        },
        {
          command: "adelm",
          alias: "",
          description: "Azure AD Entitlement Management",
          keywords: "elm",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_ERM/DashboardBlade/~/elmEntitlement",
        },
        {
          command: "azfwmg",
          alias: "",
          description: "Azure Firewall Manager",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_HybridNetworking/FirewallManagerMenuBlade",
        },
        {
          command: "azpip",
          alias: "",
          description: "Public IP Addresses",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FPublicIpAddresses",
        },
        {
          command: "azmg",
          alias: "",
          description: "Azure Management Groups",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_ManagementGroups/ManagementGroupBrowseBlade?",
        },
        {
          command: "azumc",
          alias: "",
          description: "Azure Update Management Center",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Automation/UpdateCenterMenuBlade/~/overview?",
        },
        {
          command: "synapse",
          alias: "",
          description: "Azure Synapse Studio",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://web.azuresynapse.net/",
        },
        {
          command: "partner",
          alias: "",
          description: "Microsoft Partner Center",
          keywords: "",
          category: "General",
          categoryShortName: "general",
          url: "https://partner.microsoft.com/dashboard",
        },
        {
          command: "powerapps",
          alias: "",
          description: "PowerApps",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://make.powerapps.com/",
        },
        {
          command: "myvs",
          alias: "",
          description: "Visual Studio Subscriptions",
          keywords: "",
          category: "My Pages",
          categoryShortName: "my-pages",
          url: "https://my.visualstudio.com/",
        },
        {
          command: "training",
          alias: "",
          description: "Training",
          keywords: "",
          category: "General",
          categoryShortName: "general",
          url: "https://learn.microsoft.com/training/",
        },
        {
          command: "docs",
          alias: "",
          description: "Technical documentation",
          keywords: "",
          category: "General",
          categoryShortName: "general",
          url: "https://learn.microsoft.com/docs/",
        },
        {
          command: "vlsc",
          alias: "",
          description: "Volume Licensing Service Center",
          keywords: "",
          category: "General",
          categoryShortName: "general",
          url: "https://www.microsoft.com/Licensing/servicecenter",
        },
        {
          command: "lcs",
          alias: "",
          description: "Microsoft Dynamics Lifecycle Services",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://lcs.dynamics.com/v2",
        },
        {
          command: "deqre",
          alias: "deq",
          description: "Quarantined Emails",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/quarantine",
        },
        {
          command: "azapim",
          alias: "",
          description: "API Management services",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ApiManagement%2Fservice?",
        },
        {
          command: "azfdcdn",
          alias: "",
          description: "Azure Front Door and CDN profiles",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/microsoft.cdn%2Fprofiles?",
        },
        {
          command: "azmi",
          alias: "",
          description: "Azure Managed Identities",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ManagedIdentity%2FuserAssignedIdentities?",
        },
        {
          command: "azhealth",
          alias: "",
          description: "Azure Service Health",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Health/ServiceIssuesBlade?",
        },
        {
          command: "azcreate",
          alias: "",
          description: "Azure - Create a Resource",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#create/hub?",
        },
        {
          command: "aznwatch",
          alias: "netwatch",
          description: "Network Watcher",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Network/NetworkWatcherMenuBlade/~/overview?",
        },
        {
          command: "azadvisor",
          alias: "",
          description: "Azure Advisor",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_Expert/AdvisorMenuBlade/~/score?",
        },
        {
          command: "azvmas",
          alias: "",
          description: "Availability Sets",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Compute%2FavailabilitySets?",
        },
        {
          command: "azvmss",
          alias: "",
          description: "Scale Sets",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Compute%2FvirtualMachineScaleSets?",
        },
        {
          command: "azml",
          alias: "",
          description: "Azure Machine Learning Studio",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://ml.azure.com/",
        },
        {
          command: "detallow",
          alias: "",
          description: "Defender Tenant Allow/Block List",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/tenantAllowBlockList",
        },
        {
          command: "azpg",
          alias: "",
          description: "Azure Database for PostgreSQL servers",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DBforPostgreSQL%2Fservers?",
        },
        {
          command: "azpgfs",
          alias: "",
          description: "Azure Database for PostgreSQL flexible servers",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DBforPostgreSQL%2FflexibleServers?",
        },
        {
          command: "azpgh",
          alias: "",
          description: "Azure Database for PostgreSQL Hyperscale (Citus)",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.DBforPostgreSQL%2FserverGroupsv2?",
        },
        {
          command: "azpgaa",
          alias: "",
          description: "PostgreSQL servers - Azure Arc",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.AzureArcData%2FpostgresInstances?",
        },
        {
          command: "dess",
          alias: "",
          description: "Microsoft Secure Score",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/securescore",
        },
        {
          command: "azdatabricks",
          alias: "",
          description: "Azure Databricks",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Databricks%2Fworkspaces?",
        },
        {
          command: "decacat",
          alias: "",
          description: "Cloud app catalog",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/cloudapps/app-catalog",
        },
        {
          command: "decaoauth",
          alias: "",
          description: "Manage OAuth apps",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://security.microsoft.com/cloudapps/oauth-apps",
        },
        {
          command: "teamsweb",
          alias: "",
          description: "Teams Web Client",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://teams.microsoft.com",
        },
        {
          command: "teamsrooms",
          alias: "",
          description: "Teams Rooms Pro Management",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://portal.rooms.microsoft.com/",
        },
        {
          command: "oct",
          alias: "",
          description: "Office Customization Tool",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://config.office.com/deploymentsettings",
        },
        {
          command: "deca",
          alias: "",
          description: "Microsoft Defender for Cloud Apps",
          keywords: "",
          category: "Defender",
          categoryShortName: "defender",
          url: "https://portal.cloudappsecurity.com/",
        },
        {
          command: "inprorem",
          alias: "",
          description: "Proactive Remediations",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_Enrollment/UXAnalyticsMenu/~/proactiveRemediations?",
        },
        {
          command: "inwur",
          alias: "",
          description: "Windows Update Rings",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/windows10UpdateRings?",
        },
        {
          command: "azsynapse",
          alias: "",
          description: "Azure Synapse Analytics",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Synapse%2Fworkspaces?",
        },
        {
          command: "aztemp",
          alias: "",
          description: "Templates",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Gallery%2Fmyareas%2Fgalleryitems?",
        },
        {
          command: "azsd",
          alias: "",
          description: "Shared dashboards",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Portal%2Fdashboards?",
        },
        {
          command: "m365apps",
          alias: "",
          description: "Microsoft 365 Apps admin center",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://config.office.com/officeSettings",
        },
        {
          command: "adauthstrength",
          alias: "",
          description: "Authentication strengths",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/~/AuthStrengths/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade?",
        },
        {
          command: "print",
          alias: "upc",
          description: "Universal Print Console",
          keywords: "Azure",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Universal_Print/MainMenuBlade/~/Printers?#blade/Microsoft_Azure_Security_Insights/WorkspaceSelectorBlade?",
        },
        {
          command: "dev",
          alias: "devops",
          description: "Azure DevOps Portal",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://dev.azure.com",
        },
        {
          command: "adf",
          alias: "",
          description: "Azure Data Factory",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://adf.azure.com/",
        },
        {
          command: "adauthmethodsactivity",
          alias: "authactivity",
          description: "Authentication methods activity",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade/~/AuthMethodsActivity/Microsoft_AAD_IAM/AuthenticationMethodsMenuBlade?",
        },
        {
          command: "azprice",
          alias: "price",
          description: "Azure Price Calculator",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://azure.microsoft.com/pricing/calculator/",
        },
        {
          command: "aderror",
          alias: "",
          description: "Login error lookup",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://login.microsoftonline.com/error",
        },
        {
          command: "l",
          alias: "",
          description: "Login page",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://login.microsoftonline.com/",
        },
        {
          command: "dl",
          alias: "",
          description: "Device login",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://microsoft.com/devicelogin",
        },
        {
          command: "introubleshoot",
          alias: "",
          description: "Troubleshooting",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/SupportMenu/~/troubleshooting",
        },
        {
          command: "forms",
          alias: "frm",
          description: "Microsoft Forms",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://forms.office.com/",
        },
        {
          command: "loop",
          alias: "lp",
          description: "Microsoft Loop",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://loop.microsoft.com/",
        },
        {
          command: "pbigcc",
          alias: "",
          description: "Power BI GCC",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://app.powerbigov.us/",
        },
        {
          command: "ppgcc",
          alias: "",
          description: "Power Platform GCC",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://gcc.admin.powerplatform.microsoft.us",
        },
        {
          command: "pappsgcc",
          alias: "",
          description: "PowerApps GCC",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://make.gov.powerapps.us/",
        },
        {
          command: "pflowgcc",
          alias: "",
          description: "PowerAutomate GCC",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://make.gov.powerautomate.us/",
        },
        {
          command: "ppagegcc",
          alias: "",
          description: "PowerPages GCC",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://make.gov.powerpages.microsoft.us/",
        },
        {
          command: "adidp",
          alias: "",
          description: "Azure AD Identity Protection",
          keywords: "",
          category: "Azure Active Directory",
          categoryShortName: "azure-active-directory",
          url: "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/IdentityProtectionMenuBlade/~/Overview",
        },
        {
          command: "azlogic",
          alias: "",
          description: "Azure Logic Apps",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Logic%2Fworkflows",
        },
        {
          command: "azpim",
          alias: "",
          description: "Azure Resources Privileged Identity Management",
          keywords: "",
          category: "Azure",
          categoryShortName: "azure",
          url: "https://portal.azure.com/#view/Microsoft_Azure_PIMCommon/CommonMenuBlade/~/azurerbac",
        },
        {
          command: "inwfu",
          alias: "",
          description: "Feature updates for Windows",
          keywords: "",
          category: "Intune",
          categoryShortName: "intune",
          url: "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/featureUpdateDeployments",
        },
        {
          command: "pbigcch",
          alias: "",
          description: "Power BI GCC High",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://app.high.powerbigov.us/",
        },
        {
          command: "ppgcch",
          alias: "",
          description: "Power Platform GCC High",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://high.admin.powerplatform.microsoft.us/",
        },
        {
          command: "pappsgcch",
          alias: "",
          description: "PowerApps GCC High",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://make.high.powerapps.us/",
        },
        {
          command: "pflowgcch",
          alias: "",
          description: "PowerAutomate GCC High",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://high.flow.microsoft.us/",
        },
        {
          command: "ppagegcch",
          alias: "",
          description: "PowerPages GCC High",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://make.high.powerpages.microsoft.us/",
        },
        {
          command: "pbidod",
          alias: "",
          description: "Power BI DoD",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://app.mil.powerbigov.us/",
        },
        {
          command: "ppdod",
          alias: "",
          description: "Power Platform DoD",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://admin.appsplatform.us/",
        },
        {
          command: "pappsdod",
          alias: "",
          description: "PowerApps DoD",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://make.apps.appsplatform.us/",
        },
        {
          command: "pflowdod",
          alias: "",
          description: "PowerAutomate DoD",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://flow.appsplatform.us/",
        },
        {
          command: "ppagedod",
          alias: "",
          description: "PowerPages DoD",
          keywords: "",
          category: "Microsoft 365",
          categoryShortName: "microsoft-365",
          url: "https://make.powerpages.microsoft.appsplatform.us/",
        },
        {
          command: "aka",
          alias: "",
          description: "AkaSearch",
          keywords: "",
          category: "General",
          categoryShortName: "general",
          url: "https://akaSearch.net",
        },
      ];
    },
    217: function (e, t, r) {
      !(function (e, t) {
        "use strict";
        function r(e, t, r, o, n, a, i) {
          try {
            var s = e[a](i),
              c = s.value;
          } catch (e) {
            return void r(e);
          }
          s.done ? t(c) : Promise.resolve(c).then(o, n);
        }
        function o(e) {
          return function () {
            var t = this,
              o = arguments;
            return new Promise(function (n, a) {
              var i = e.apply(t, o);
              function s(e) {
                r(i, n, a, s, c, "next", e);
              }
              function c(e) {
                r(i, n, a, s, c, "throw", e);
              }
              s(void 0);
            });
          };
        }
        function n() {
          return (n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
              return e;
            }).apply(this, arguments);
        }
        function a(e, t) {
          if (null == e) return {};
          var r,
            o,
            n = {},
            a = Object.keys(e);
          for (o = 0; o < a.length; o++)
            (r = a[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
          return n;
        }
        function i(e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, t || "default");
              if ("object" != typeof o) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        }
        t =
          t && Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
        var s = { init: "init" },
          c = function (e) {
            var t = e.value;
            return void 0 === t ? "" : t;
          },
          u = function () {
            return t.createElement(t.Fragment, null, "\xa0");
          },
          l = {
            Cell: c,
            width: 150,
            minWidth: 0,
            maxWidth: Number.MAX_SAFE_INTEGER,
          };
        function d() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.reduce(function (e, t) {
            var r = t.style,
              o = t.className;
            return (
              (e = n({}, e, {}, a(t, ["style", "className"]))),
              r && (e.style = e.style ? n({}, e.style || {}, {}, r || {}) : r),
              o && (e.className = e.className ? e.className + " " + o : o),
              "" === e.className && delete e.className,
              e
            );
          }, {});
        }
        var m = function (e, t) {
            return (
              void 0 === t && (t = {}),
              function (r) {
                return (
                  void 0 === r && (r = {}),
                  [].concat(e, [r]).reduce(function (e, o) {
                    return (function e(t, r, o) {
                      return "function" == typeof r
                        ? e({}, r(t, o))
                        : Array.isArray(r)
                        ? d.apply(void 0, [t].concat(r))
                        : d(t, r);
                    })(e, o, n({}, t, { userProps: r }));
                  }, {})
                );
              }
            );
          },
          p = function (e, t, r, o) {
            return (
              void 0 === r && (r = {}),
              e.reduce(function (e, t) {
                return t(e, r);
              }, t)
            );
          },
          g = function (e, t, r) {
            return (
              void 0 === r && (r = {}),
              e.forEach(function (e) {
                e(t, r);
              })
            );
          };
        function f(e, t, r, o) {
          e.findIndex(function (e) {
            return e.pluginName === r;
          }),
            t.forEach(function (t) {
              e.findIndex(function (e) {
                return e.pluginName === t;
              });
            });
        }
        function y(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function h(e) {
          var r = t.useRef();
          return (
            (r.current = e),
            t.useCallback(function () {
              return r.current;
            }, [])
          );
        }
        var v =
          "undefined" != typeof document ? t.useLayoutEffect : t.useEffect;
        function w(e, r) {
          var o = t.useRef(!1);
          v(function () {
            o.current && e(), (o.current = !0);
          }, r);
        }
        function S(e, t, r) {
          return (
            void 0 === r && (r = {}),
            function (o, a) {
              void 0 === a && (a = {});
              var i = "string" == typeof o ? t[o] : o;
              if (void 0 === i)
                throw (
                  (console.info(t), new Error("Renderer Error \u261d\ufe0f"))
                );
              return z(i, n({}, e, { column: t }, r, {}, a));
            }
          );
        }
        function z(e, r) {
          return (function (e) {
            return (
              "function" == typeof e &&
              (t = Object.getPrototypeOf(e)).prototype &&
              t.prototype.isReactComponent
            );
            var t;
          })((o = e)) ||
            "function" == typeof o ||
            (function (e) {
              return (
                "object" == typeof e &&
                "symbol" == typeof e.$$typeof &&
                ["react.memo", "react.forward_ref"].includes(
                  e.$$typeof.description
                )
              );
            })(o)
            ? t.createElement(e, r)
            : e;
          var o;
        }
        function A(e, t, r) {
          return (
            void 0 === r && (r = 0),
            e.map(function (e) {
              return (
                R((e = n({}, e, { parent: t, depth: r }))),
                e.columns && (e.columns = A(e.columns, e, r + 1)),
                e
              );
            })
          );
        }
        function b(e) {
          return N(e, "columns");
        }
        function R(e) {
          var t = e.id,
            r = e.accessor,
            o = e.Header;
          if ("string" == typeof r) {
            t = t || r;
            var n = r.split(".");
            r = function (e) {
              return (function (e, t, r) {
                if (!t) return e;
                var o,
                  n = "function" == typeof t ? t : JSON.stringify(t),
                  a =
                    C.get(n) ||
                    (function () {
                      var e = (function (e) {
                        return (function e(t, r) {
                          if ((void 0 === r && (r = []), Array.isArray(t)))
                            for (var o = 0; o < t.length; o += 1) e(t[o], r);
                          else r.push(t);
                          return r;
                        })(e)
                          .map(function (e) {
                            return String(e).replace(".", "_");
                          })
                          .join(".")
                          .replace(_, ".")
                          .replace(G, "")
                          .split(".");
                      })(t);
                      return C.set(n, e), e;
                    })();
                try {
                  o = a.reduce(function (e, t) {
                    return e[t];
                  }, e);
                } catch (e) {}
                return void 0 !== o ? o : r;
              })(e, n);
            };
          }
          if ((!t && "string" == typeof o && o && (t = o), !t && e.columns))
            throw (
              (console.error(e),
              new Error('A column ID (or unique "Header" value) is required!'))
            );
          if (!t)
            throw (
              (console.error(e),
              new Error("A column ID (or string accessor) is required!"))
            );
          return Object.assign(e, { id: t, accessor: r }), e;
        }
        function M(e, t) {
          if (!t) throw new Error();
          return (
            Object.assign(e, n({ Header: u, Footer: u }, l, {}, t, {}, e)),
            Object.assign(e, { originalWidth: e.width }),
            e
          );
        }
        function k(e, t, r) {
          void 0 === r &&
            (r = function () {
              return {};
            });
          for (
            var o = [],
              a = e,
              i = 0,
              s = function () {
                return i++;
              },
              c = function () {
                var e = { headers: [] },
                  i = [],
                  c = a.some(function (e) {
                    return e.parent;
                  });
                a.forEach(function (o) {
                  var a,
                    u = [].concat(i).reverse()[0];
                  c &&
                    ((a = o.parent
                      ? n(
                          {},
                          o.parent,
                          {
                            originalId: o.parent.id,
                            id: o.parent.id + "_" + s(),
                            headers: [o],
                          },
                          r(o)
                        )
                      : M(
                          n(
                            {
                              originalId: o.id + "_placeholder",
                              id: o.id + "_placeholder_" + s(),
                              placeholderOf: o,
                              headers: [o],
                            },
                            r(o)
                          ),
                          t
                        )),
                    u && u.originalId === a.originalId
                      ? u.headers.push(o)
                      : i.push(a)),
                    e.headers.push(o);
                }),
                  o.push(e),
                  (a = i);
              };
            a.length;

          )
            c();
          return o.reverse();
        }
        var C = new Map();
        function P() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          for (var o = 0; o < t.length; o += 1)
            if (void 0 !== t[o]) return t[o];
        }
        function x(e) {
          if ("function" == typeof e) return e;
        }
        function N(e, t) {
          var r = [];
          return (
            (function e(o) {
              o.forEach(function (o) {
                o[t] ? e(o[t]) : r.push(o);
              });
            })(e),
            r
          );
        }
        function B(e, t) {
          var r = t.manualExpandedKey,
            o = t.expanded,
            n = t.expandSubRows,
            a = void 0 === n || n,
            i = [];
          return (
            e.forEach(function (e) {
              return (function e(t, n) {
                void 0 === n && (n = !0),
                  (t.isExpanded = (t.original && t.original[r]) || o[t.id]),
                  (t.canExpand = t.subRows && !!t.subRows.length),
                  n && i.push(t),
                  t.subRows &&
                    t.subRows.length &&
                    t.isExpanded &&
                    t.subRows.forEach(function (t) {
                      return e(t, a);
                    });
              })(e);
            }),
            i
          );
        }
        function E(e, t, r) {
          return x(e) || t[e] || r[e] || r.text;
        }
        function I(e, t, r) {
          return e ? e(t, r) : void 0 === t;
        }
        function D() {
          throw new Error(
            "React-Table: You have not called prepareRow(row) one or more rows you are attempting to render."
          );
        }
        var F = null,
          _ = /\[/g,
          G = /\]/g,
          H = function (e) {
            return n({ role: "table" }, e);
          },
          T = function (e) {
            return n({ role: "rowgroup" }, e);
          },
          O = function (e, t) {
            var r = t.column;
            return n(
              {
                key: "header_" + r.id,
                colSpan: r.totalVisibleHeaderCount,
                role: "columnheader",
              },
              e
            );
          },
          L = function (e, t) {
            var r = t.column;
            return n(
              { key: "footer_" + r.id, colSpan: r.totalVisibleHeaderCount },
              e
            );
          },
          W = function (e, t) {
            return n({ key: "headerGroup_" + t.index, role: "row" }, e);
          },
          j = function (e, t) {
            return n({ key: "footerGroup_" + t.index }, e);
          },
          V = function (e, t) {
            return n({ key: "row_" + t.row.id, role: "row" }, e);
          },
          q = function (e, t) {
            var r = t.cell;
            return n(
              { key: "cell_" + r.row.id + "_" + r.column.id, role: "cell" },
              e
            );
          };
        function U() {
          return {
            useOptions: [],
            stateReducers: [],
            useControlledState: [],
            columns: [],
            columnsDeps: [],
            allColumns: [],
            allColumnsDeps: [],
            accessValue: [],
            materializedColumns: [],
            materializedColumnsDeps: [],
            useInstanceAfterData: [],
            visibleColumns: [],
            visibleColumnsDeps: [],
            headerGroups: [],
            headerGroupsDeps: [],
            useInstanceBeforeDimensions: [],
            useInstance: [],
            prepareRow: [],
            getTableProps: [H],
            getTableBodyProps: [T],
            getHeaderGroupProps: [W],
            getFooterGroupProps: [j],
            getHeaderProps: [O],
            getFooterProps: [L],
            getRowProps: [V],
            getCellProps: [q],
            useFinalInstance: [],
          };
        }
        (s.resetHiddenColumns = "resetHiddenColumns"),
          (s.toggleHideColumn = "toggleHideColumn"),
          (s.setHiddenColumns = "setHiddenColumns"),
          (s.toggleHideAllColumns = "toggleHideAllColumns");
        var X = function (e) {
          (e.getToggleHiddenProps = [K]),
            (e.getToggleHideAllColumnsProps = [Q]),
            e.stateReducers.push($),
            e.useInstanceBeforeDimensions.push(Z),
            e.headerGroupsDeps.push(function (e, t) {
              var r = t.instance;
              return [].concat(e, [r.state.hiddenColumns]);
            }),
            e.useInstance.push(Y);
        };
        X.pluginName = "useColumnVisibility";
        var K = function (e, t) {
            var r = t.column;
            return [
              e,
              {
                onChange: function (e) {
                  r.toggleHidden(!e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: r.isVisible,
                title: "Toggle Column Visible",
              },
            ];
          },
          Q = function (e, t) {
            var r = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  r.toggleHideAllColumns(!e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: !r.allColumnsHidden && !r.state.hiddenColumns.length,
                title: "Toggle All Columns Hidden",
                indeterminate:
                  !r.allColumnsHidden && r.state.hiddenColumns.length,
              },
            ];
          };
        function $(e, t, r, o) {
          if (t.type === s.init) return n({ hiddenColumns: [] }, e);
          if (t.type === s.resetHiddenColumns)
            return n({}, e, {
              hiddenColumns: o.initialState.hiddenColumns || [],
            });
          if (t.type === s.toggleHideColumn) {
            var a = (
              void 0 !== t.value
                ? t.value
                : !e.hiddenColumns.includes(t.columnId)
            )
              ? [].concat(e.hiddenColumns, [t.columnId])
              : e.hiddenColumns.filter(function (e) {
                  return e !== t.columnId;
                });
            return n({}, e, { hiddenColumns: a });
          }
          return t.type === s.setHiddenColumns
            ? n({}, e, { hiddenColumns: y(t.value, e.hiddenColumns) })
            : t.type === s.toggleHideAllColumns
            ? n({}, e, {
                hiddenColumns: (
                  void 0 !== t.value ? t.value : !e.hiddenColumns.length
                )
                  ? o.allColumns.map(function (e) {
                      return e.id;
                    })
                  : [],
              })
            : void 0;
        }
        function Z(e) {
          var r = e.headers,
            o = e.state.hiddenColumns;
          t.useRef(!1).current;
          var n = 0;
          r.forEach(function (e) {
            return (n += (function e(t, r) {
              t.isVisible = r && !o.includes(t.id);
              var n = 0;
              return (
                t.headers && t.headers.length
                  ? t.headers.forEach(function (r) {
                      return (n += e(r, t.isVisible));
                    })
                  : (n = t.isVisible ? 1 : 0),
                (t.totalVisibleHeaderCount = n),
                n
              );
            })(e, !0));
          });
        }
        function Y(e) {
          var r = e.columns,
            o = e.flatHeaders,
            n = e.dispatch,
            a = e.allColumns,
            i = e.getHooks,
            c = e.state.hiddenColumns,
            u = e.autoResetHiddenColumns,
            l = void 0 === u || u,
            d = h(e),
            p = a.length === c.length,
            g = t.useCallback(
              function (e, t) {
                return n({ type: s.toggleHideColumn, columnId: e, value: t });
              },
              [n]
            ),
            f = t.useCallback(
              function (e) {
                return n({ type: s.setHiddenColumns, value: e });
              },
              [n]
            ),
            y = t.useCallback(
              function (e) {
                return n({ type: s.toggleHideAllColumns, value: e });
              },
              [n]
            ),
            v = m(i().getToggleHideAllColumnsProps, { instance: d() });
          o.forEach(function (e) {
            (e.toggleHidden = function (t) {
              n({ type: s.toggleHideColumn, columnId: e.id, value: t });
            }),
              (e.getToggleHiddenProps = m(i().getToggleHiddenProps, {
                instance: d(),
                column: e,
              }));
          });
          var S = h(l);
          w(
            function () {
              S() && n({ type: s.resetHiddenColumns });
            },
            [n, r]
          ),
            Object.assign(e, {
              allColumnsHidden: p,
              toggleHideColumn: g,
              setHiddenColumns: f,
              toggleHideAllColumns: y,
              getToggleHideAllColumnsProps: v,
            });
        }
        var J = {},
          ee = {},
          te = function (e, t, r) {
            return e;
          },
          re = function (e, t) {
            return e.subRows || [];
          },
          oe = function (e, t, r) {
            return "" + (r ? [r.id, t].join(".") : t);
          },
          ne = function (e) {
            return e;
          };
        function ae(e) {
          var t = e.initialState,
            r = void 0 === t ? J : t,
            o = e.defaultColumn,
            i = void 0 === o ? ee : o,
            s = e.getSubRows,
            c = void 0 === s ? re : s,
            u = e.getRowId,
            l = void 0 === u ? oe : u,
            d = e.stateReducer,
            m = void 0 === d ? te : d,
            p = e.useControlledState,
            g = void 0 === p ? ne : p;
          return n(
            {},
            a(e, [
              "initialState",
              "defaultColumn",
              "getSubRows",
              "getRowId",
              "stateReducer",
              "useControlledState",
            ]),
            {
              initialState: r,
              defaultColumn: i,
              getSubRows: c,
              getRowId: l,
              stateReducer: m,
              useControlledState: g,
            }
          );
        }
        function ie(e, t) {
          void 0 === t && (t = 0);
          var r = 0,
            o = 0,
            n = 0,
            a = 0;
          return (
            e.forEach(function (e) {
              var i = e.headers;
              if (((e.totalLeft = t), i && i.length)) {
                var s = ie(i, t),
                  c = s[0],
                  u = s[1],
                  l = s[2],
                  d = s[3];
                (e.totalMinWidth = c),
                  (e.totalWidth = u),
                  (e.totalMaxWidth = l),
                  (e.totalFlexWidth = d);
              } else (e.totalMinWidth = e.minWidth), (e.totalWidth = Math.min(Math.max(e.minWidth, e.width), e.maxWidth)), (e.totalMaxWidth = e.maxWidth), (e.totalFlexWidth = e.canResize ? e.totalWidth : 0);
              e.isVisible &&
                ((t += e.totalWidth),
                (r += e.totalMinWidth),
                (o += e.totalWidth),
                (n += e.totalMaxWidth),
                (a += e.totalFlexWidth));
            }),
            [r, o, n, a]
          );
        }
        function se(e) {
          var t = e.data,
            r = e.rows,
            o = e.flatRows,
            n = e.rowsById,
            a = e.column,
            i = e.getRowId,
            s = e.getSubRows,
            c = e.accessValueHooks,
            u = e.getInstance;
          t.forEach(function (e, l) {
            return (function e(r, l, d, m, g) {
              void 0 === d && (d = 0);
              var f = r,
                y = i(r, l, m),
                h = n[y];
              if (h)
                h.subRows &&
                  h.originalSubRows.forEach(function (t, r) {
                    return e(t, r, d + 1, h);
                  });
              else if (
                (((h = {
                  id: y,
                  original: f,
                  index: l,
                  depth: d,
                  cells: [{}],
                }).cells.map = D),
                (h.cells.filter = D),
                (h.cells.forEach = D),
                (h.cells[0].getCellProps = D),
                (h.values = {}),
                g.push(h),
                o.push(h),
                (n[y] = h),
                (h.originalSubRows = s(r, l)),
                h.originalSubRows)
              ) {
                var v = [];
                h.originalSubRows.forEach(function (t, r) {
                  return e(t, r, d + 1, h, v);
                }),
                  (h.subRows = v);
              }
              a.accessor && (h.values[a.id] = a.accessor(r, l, h, g, t)),
                (h.values[a.id] = p(c, h.values[a.id], {
                  row: h,
                  column: a,
                  instance: u(),
                }));
            })(e, l, 0, void 0, r);
          });
        }
        (s.resetExpanded = "resetExpanded"),
          (s.toggleRowExpanded = "toggleRowExpanded"),
          (s.toggleAllRowsExpanded = "toggleAllRowsExpanded");
        var ce = function (e) {
          (e.getToggleAllRowsExpandedProps = [ue]),
            (e.getToggleRowExpandedProps = [le]),
            e.stateReducers.push(de),
            e.useInstance.push(me),
            e.prepareRow.push(pe);
        };
        ce.pluginName = "useExpanded";
        var ue = function (e, t) {
            var r = t.instance;
            return [
              e,
              {
                onClick: function (e) {
                  r.toggleAllRowsExpanded();
                },
                style: { cursor: "pointer" },
                title: "Toggle All Rows Expanded",
              },
            ];
          },
          le = function (e, t) {
            var r = t.row;
            return [
              e,
              {
                onClick: function () {
                  r.toggleRowExpanded();
                },
                style: { cursor: "pointer" },
                title: "Toggle Row Expanded",
              },
            ];
          };
        function de(e, t, r, o) {
          if (t.type === s.init) return n({ expanded: {} }, e);
          if (t.type === s.resetExpanded)
            return n({}, e, { expanded: o.initialState.expanded || {} });
          if (t.type === s.toggleAllRowsExpanded) {
            var c = t.value,
              u = o.rowsById,
              l = Object.keys(u).length === Object.keys(e.expanded).length;
            if (void 0 !== c ? c : !l) {
              var d = {};
              return (
                Object.keys(u).forEach(function (e) {
                  d[e] = !0;
                }),
                n({}, e, { expanded: d })
              );
            }
            return n({}, e, { expanded: {} });
          }
          if (t.type === s.toggleRowExpanded) {
            var m,
              p = t.id,
              g = t.value,
              f = e.expanded[p],
              y = void 0 !== g ? g : !f;
            if (!f && y)
              return n({}, e, {
                expanded: n({}, e.expanded, ((m = {}), (m[p] = !0), m)),
              });
            if (f && !y) {
              var h = e.expanded;
              return h[p], n({}, e, { expanded: a(h, [p].map(i)) });
            }
            return e;
          }
        }
        function me(e) {
          var r = e.data,
            o = e.rows,
            n = e.rowsById,
            a = e.manualExpandedKey,
            i = void 0 === a ? "expanded" : a,
            c = e.paginateExpandedRows,
            u = void 0 === c || c,
            l = e.expandSubRows,
            d = void 0 === l || l,
            p = e.autoResetExpanded,
            g = void 0 === p || p,
            y = e.getHooks,
            v = e.plugins,
            S = e.state.expanded,
            z = e.dispatch;
          f(
            v,
            ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"],
            "useExpanded"
          );
          var A = h(g),
            b = Boolean(Object.keys(n).length && Object.keys(S).length);
          b &&
            Object.keys(n).some(function (e) {
              return !S[e];
            }) &&
            (b = !1),
            w(
              function () {
                A() && z({ type: s.resetExpanded });
              },
              [z, r]
            );
          var R = t.useCallback(
              function (e, t) {
                z({ type: s.toggleRowExpanded, id: e, value: t });
              },
              [z]
            ),
            M = t.useCallback(
              function (e) {
                return z({ type: s.toggleAllRowsExpanded, value: e });
              },
              [z]
            ),
            k = t.useMemo(
              function () {
                return u
                  ? B(o, {
                      manualExpandedKey: i,
                      expanded: S,
                      expandSubRows: d,
                    })
                  : o;
              },
              [u, o, i, S, d]
            ),
            C = t.useMemo(
              function () {
                return (function (e) {
                  var t = 0;
                  return (
                    Object.keys(e).forEach(function (e) {
                      var r = e.split(".");
                      t = Math.max(t, r.length);
                    }),
                    t
                  );
                })(S);
              },
              [S]
            ),
            P = h(e),
            x = m(y().getToggleAllRowsExpandedProps, { instance: P() });
          Object.assign(e, {
            preExpandedRows: o,
            expandedRows: k,
            rows: k,
            expandedDepth: C,
            isAllRowsExpanded: b,
            toggleRowExpanded: R,
            toggleAllRowsExpanded: M,
            getToggleAllRowsExpandedProps: x,
          });
        }
        function pe(e, t) {
          var r = t.instance.getHooks,
            o = t.instance;
          (e.toggleRowExpanded = function (t) {
            return o.toggleRowExpanded(e.id, t);
          }),
            (e.getToggleRowExpandedProps = m(r().getToggleRowExpandedProps, {
              instance: o,
              row: e,
            }));
        }
        var ge = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var o = e.values[t];
              return String(o).toLowerCase().includes(String(r).toLowerCase());
            });
          });
        };
        ge.autoRemove = function (e) {
          return !e;
        };
        var fe = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var o = e.values[t];
              return (
                void 0 === o ||
                String(o).toLowerCase() === String(r).toLowerCase()
              );
            });
          });
        };
        fe.autoRemove = function (e) {
          return !e;
        };
        var ye = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var o = e.values[t];
              return void 0 === o || String(o) === String(r);
            });
          });
        };
        ye.autoRemove = function (e) {
          return !e;
        };
        var he = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t].includes(r);
            });
          });
        };
        he.autoRemove = function (e) {
          return !e || !e.length;
        };
        var ve = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var o = e.values[t];
              return (
                o &&
                o.length &&
                r.every(function (e) {
                  return o.includes(e);
                })
              );
            });
          });
        };
        ve.autoRemove = function (e) {
          return !e || !e.length;
        };
        var we = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var o = e.values[t];
              return (
                o &&
                o.length &&
                r.some(function (e) {
                  return o.includes(e);
                })
              );
            });
          });
        };
        we.autoRemove = function (e) {
          return !e || !e.length;
        };
        var Se = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var o = e.values[t];
              return r.includes(o);
            });
          });
        };
        Se.autoRemove = function (e) {
          return !e || !e.length;
        };
        var ze = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t] === r;
            });
          });
        };
        ze.autoRemove = function (e) {
          return void 0 === e;
        };
        var Ae = function (e, t, r) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t] == r;
            });
          });
        };
        Ae.autoRemove = function (e) {
          return null == e;
        };
        var be = function (e, t, r) {
          var o = r || [],
            n = o[0],
            a = o[1];
          if (
            (n = "number" == typeof n ? n : -1 / 0) >
            (a = "number" == typeof a ? a : 1 / 0)
          ) {
            var i = n;
            (n = a), (a = i);
          }
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return r >= n && r <= a;
            });
          });
        };
        be.autoRemove = function (e) {
          return !e || ("number" != typeof e[0] && "number" != typeof e[1]);
        };
        var Re = Object.freeze({
          __proto__: null,
          text: ge,
          exactText: fe,
          exactTextCase: ye,
          includes: he,
          includesAll: ve,
          includesSome: we,
          includesValue: Se,
          exact: ze,
          equals: Ae,
          between: be,
        });
        (s.resetFilters = "resetFilters"),
          (s.setFilter = "setFilter"),
          (s.setAllFilters = "setAllFilters");
        var Me = function (e) {
          e.stateReducers.push(ke), e.useInstance.push(Ce);
        };
        function ke(e, t, r, o) {
          if (t.type === s.init) return n({ filters: [] }, e);
          if (t.type === s.resetFilters)
            return n({}, e, { filters: o.initialState.filters || [] });
          if (t.type === s.setFilter) {
            var a = t.columnId,
              i = t.filterValue,
              c = o.allColumns,
              u = o.filterTypes,
              l = c.find(function (e) {
                return e.id === a;
              });
            if (!l)
              throw new Error(
                "React-Table: Could not find a column with id: " + a
              );
            var d = E(l.filter, u || {}, Re),
              m = e.filters.find(function (e) {
                return e.id === a;
              }),
              p = y(i, m && m.value);
            return I(d.autoRemove, p, l)
              ? n({}, e, {
                  filters: e.filters.filter(function (e) {
                    return e.id !== a;
                  }),
                })
              : n(
                  {},
                  e,
                  m
                    ? {
                        filters: e.filters.map(function (e) {
                          return e.id === a ? { id: a, value: p } : e;
                        }),
                      }
                    : { filters: [].concat(e.filters, [{ id: a, value: p }]) }
                );
          }
          if (t.type === s.setAllFilters) {
            var g = t.filters,
              f = o.allColumns,
              h = o.filterTypes;
            return n({}, e, {
              filters: y(g, e.filters).filter(function (e) {
                var t = f.find(function (t) {
                  return t.id === e.id;
                });
                return !I(E(t.filter, h || {}, Re).autoRemove, e.value, t);
              }),
            });
          }
        }
        function Ce(e) {
          var r = e.data,
            o = e.rows,
            n = e.flatRows,
            a = e.rowsById,
            i = e.allColumns,
            c = e.filterTypes,
            u = e.manualFilters,
            l = e.defaultCanFilter,
            d = void 0 !== l && l,
            m = e.disableFilters,
            p = e.state.filters,
            g = e.dispatch,
            f = e.autoResetFilters,
            y = void 0 === f || f,
            v = t.useCallback(
              function (e, t) {
                g({ type: s.setFilter, columnId: e, filterValue: t });
              },
              [g]
            ),
            S = t.useCallback(
              function (e) {
                g({ type: s.setAllFilters, filters: e });
              },
              [g]
            );
          i.forEach(function (e) {
            var t = e.id,
              r = e.accessor,
              o = e.defaultCanFilter,
              n = e.disableFilters;
            (e.canFilter = r
              ? P(!0 !== n && void 0, !0 !== m && void 0, !0)
              : P(o, d, !1)),
              (e.setFilter = function (t) {
                return v(e.id, t);
              });
            var a = p.find(function (e) {
              return e.id === t;
            });
            e.filterValue = a && a.value;
          });
          var z = t.useMemo(
              function () {
                if (u || !p.length) return [o, n, a];
                var e = [],
                  t = {};
                return [
                  (function r(o, n) {
                    void 0 === n && (n = 0);
                    var a = o;
                    return (
                      (a = p.reduce(function (e, t) {
                        var r = t.id,
                          o = t.value,
                          a = i.find(function (e) {
                            return e.id === r;
                          });
                        if (!a) return e;
                        0 === n && (a.preFilteredRows = e);
                        var s = E(a.filter, c || {}, Re);
                        return s
                          ? ((a.filteredRows = s(e, [r], o)), a.filteredRows)
                          : (console.warn(
                              "Could not find a valid 'column.filter' for column with the ID: " +
                                a.id +
                                "."
                            ),
                            e);
                      }, o)).forEach(function (o) {
                        e.push(o),
                          (t[o.id] = o),
                          o.subRows &&
                            (o.subRows =
                              o.subRows && o.subRows.length > 0
                                ? r(o.subRows, n + 1)
                                : o.subRows);
                      }),
                      a
                    );
                  })(o),
                  e,
                  t,
                ];
              },
              [u, p, o, n, a, i, c]
            ),
            A = z[0],
            b = z[1],
            R = z[2];
          t.useMemo(
            function () {
              i.filter(function (e) {
                return !p.find(function (t) {
                  return t.id === e.id;
                });
              }).forEach(function (e) {
                (e.preFilteredRows = A), (e.filteredRows = A);
              });
            },
            [A, p, i]
          );
          var M = h(y);
          w(
            function () {
              M() && g({ type: s.resetFilters });
            },
            [g, u ? null : r]
          ),
            Object.assign(e, {
              preFilteredRows: o,
              preFilteredFlatRows: n,
              preFilteredRowsById: a,
              filteredRows: A,
              filteredFlatRows: b,
              filteredRowsById: R,
              rows: A,
              flatRows: b,
              rowsById: R,
              setFilter: v,
              setAllFilters: S,
            });
        }
        (Me.pluginName = "useFilters"),
          (s.resetGlobalFilter = "resetGlobalFilter"),
          (s.setGlobalFilter = "setGlobalFilter");
        var Pe = function (e) {
          e.stateReducers.push(xe), e.useInstance.push(Ne);
        };
        function xe(e, t, r, o) {
          if (t.type === s.resetGlobalFilter)
            return n({}, e, {
              globalFilter: o.initialState.globalFilter || void 0,
            });
          if (t.type === s.setGlobalFilter) {
            var i = t.filterValue,
              c = o.userFilterTypes,
              u = E(o.globalFilter, c || {}, Re),
              l = y(i, e.globalFilter);
            return I(u.autoRemove, l)
              ? (e.globalFilter, a(e, ["globalFilter"]))
              : n({}, e, { globalFilter: l });
          }
        }
        function Ne(e) {
          var r = e.data,
            o = e.rows,
            n = e.flatRows,
            a = e.rowsById,
            i = e.allColumns,
            c = e.filterTypes,
            u = e.globalFilter,
            l = e.manualGlobalFilter,
            d = e.state.globalFilter,
            m = e.dispatch,
            p = e.autoResetGlobalFilter,
            g = void 0 === p || p,
            f = e.disableGlobalFilter,
            y = t.useCallback(
              function (e) {
                m({ type: s.setGlobalFilter, filterValue: e });
              },
              [m]
            ),
            v = t.useMemo(
              function () {
                if (l || void 0 === d) return [o, n, a];
                var e = [],
                  t = {},
                  r = E(u, c || {}, Re);
                if (!r)
                  return (
                    console.warn(
                      "Could not find a valid 'globalFilter' option."
                    ),
                    o
                  );
                i.forEach(function (e) {
                  var t = e.disableGlobalFilter;
                  e.canFilter = P(!0 !== t && void 0, !0 !== f && void 0, !0);
                });
                var s = i.filter(function (e) {
                  return !0 === e.canFilter;
                });
                return [
                  (function o(n) {
                    return (
                      (n = r(
                        n,
                        s.map(function (e) {
                          return e.id;
                        }),
                        d
                      )).forEach(function (r) {
                        e.push(r),
                          (t[r.id] = r),
                          (r.subRows =
                            r.subRows && r.subRows.length
                              ? o(r.subRows)
                              : r.subRows);
                      }),
                      n
                    );
                  })(o),
                  e,
                  t,
                ];
              },
              [l, d, u, c, i, o, n, a, f]
            ),
            S = v[0],
            z = v[1],
            A = v[2],
            b = h(g);
          w(
            function () {
              b() && m({ type: s.resetGlobalFilter });
            },
            [m, l ? null : r]
          ),
            Object.assign(e, {
              preGlobalFilteredRows: o,
              preGlobalFilteredFlatRows: n,
              preGlobalFilteredRowsById: a,
              globalFilteredRows: S,
              globalFilteredFlatRows: z,
              globalFilteredRowsById: A,
              rows: S,
              flatRows: z,
              rowsById: A,
              setGlobalFilter: y,
              disableGlobalFilter: f,
            });
        }
        function Be(e, t) {
          return t.reduce(function (e, t) {
            return e + ("number" == typeof t ? t : 0);
          }, 0);
        }
        Pe.pluginName = "useGlobalFilter";
        var Ee = Object.freeze({
            __proto__: null,
            sum: Be,
            min: function (e) {
              var t = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e && (t = Math.min(t, e));
                }),
                t
              );
            },
            max: function (e) {
              var t = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e && (t = Math.max(t, e));
                }),
                t
              );
            },
            minMax: function (e) {
              var t = e[0] || 0,
                r = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e &&
                    ((t = Math.min(t, e)), (r = Math.max(r, e)));
                }),
                t + ".." + r
              );
            },
            average: function (e) {
              return Be(0, e) / e.length;
            },
            median: function (e) {
              if (!e.length) return null;
              var t = Math.floor(e.length / 2),
                r = [].concat(e).sort(function (e, t) {
                  return e - t;
                });
              return e.length % 2 != 0 ? r[t] : (r[t - 1] + r[t]) / 2;
            },
            unique: function (e) {
              return Array.from(new Set(e).values());
            },
            uniqueCount: function (e) {
              return new Set(e).size;
            },
            count: function (e) {
              return e.length;
            },
          }),
          Ie = [],
          De = {};
        (s.resetGroupBy = "resetGroupBy"),
          (s.setGroupBy = "setGroupBy"),
          (s.toggleGroupBy = "toggleGroupBy");
        var Fe = function (e) {
          (e.getGroupByToggleProps = [_e]),
            e.stateReducers.push(Ge),
            e.visibleColumnsDeps.push(function (e, t) {
              var r = t.instance;
              return [].concat(e, [r.state.groupBy]);
            }),
            e.visibleColumns.push(He),
            e.useInstance.push(Oe),
            e.prepareRow.push(Le);
        };
        Fe.pluginName = "useGroupBy";
        var _e = function (e, t) {
          var r = t.header;
          return [
            e,
            {
              onClick: r.canGroupBy
                ? function (e) {
                    e.persist(), r.toggleGroupBy();
                  }
                : void 0,
              style: { cursor: r.canGroupBy ? "pointer" : void 0 },
              title: "Toggle GroupBy",
            },
          ];
        };
        function Ge(e, t, r, o) {
          if (t.type === s.init) return n({ groupBy: [] }, e);
          if (t.type === s.resetGroupBy)
            return n({}, e, { groupBy: o.initialState.groupBy || [] });
          if (t.type === s.setGroupBy) return n({}, e, { groupBy: t.value });
          if (t.type === s.toggleGroupBy) {
            var a = t.columnId,
              i = t.value,
              c = void 0 !== i ? i : !e.groupBy.includes(a);
            return n(
              {},
              e,
              c
                ? { groupBy: [].concat(e.groupBy, [a]) }
                : {
                    groupBy: e.groupBy.filter(function (e) {
                      return e !== a;
                    }),
                  }
            );
          }
        }
        function He(e, t) {
          var r = t.instance.state.groupBy,
            o = r
              .map(function (t) {
                return e.find(function (e) {
                  return e.id === t;
                });
              })
              .filter(Boolean),
            n = e.filter(function (e) {
              return !r.includes(e.id);
            });
          return (
            (e = [].concat(o, n)).forEach(function (e) {
              (e.isGrouped = r.includes(e.id)),
                (e.groupedIndex = r.indexOf(e.id));
            }),
            e
          );
        }
        var Te = {};
        function Oe(e) {
          var r = e.data,
            o = e.rows,
            a = e.flatRows,
            i = e.rowsById,
            c = e.allColumns,
            u = e.flatHeaders,
            l = e.groupByFn,
            d = void 0 === l ? We : l,
            p = e.manualGroupBy,
            g = e.aggregations,
            y = void 0 === g ? Te : g,
            v = e.plugins,
            S = e.state.groupBy,
            z = e.dispatch,
            A = e.autoResetGroupBy,
            b = void 0 === A || A,
            R = e.disableGroupBy,
            M = e.defaultCanGroupBy,
            k = e.getHooks;
          f(v, ["useColumnOrder", "useFilters"], "useGroupBy");
          var C = h(e);
          c.forEach(function (t) {
            var r = t.accessor,
              o = t.defaultGroupBy,
              n = t.disableGroupBy;
            (t.canGroupBy = r
              ? P(t.canGroupBy, !0 !== n && void 0, !0 !== R && void 0, !0)
              : P(t.canGroupBy, o, M, !1)),
              t.canGroupBy &&
                (t.toggleGroupBy = function () {
                  return e.toggleGroupBy(t.id);
                }),
              (t.Aggregated = t.Aggregated || t.Cell);
          });
          var x = t.useCallback(
              function (e, t) {
                z({ type: s.toggleGroupBy, columnId: e, value: t });
              },
              [z]
            ),
            B = t.useCallback(
              function (e) {
                z({ type: s.setGroupBy, value: e });
              },
              [z]
            );
          u.forEach(function (e) {
            e.getGroupByToggleProps = m(k().getGroupByToggleProps, {
              instance: C(),
              header: e,
            });
          });
          var E = t.useMemo(
              function () {
                if (p || !S.length) return [o, a, i, Ie, De, a, i];
                var e = S.filter(function (e) {
                    return c.find(function (t) {
                      return t.id === e;
                    });
                  }),
                  t = [],
                  r = {},
                  s = [],
                  u = {},
                  l = [],
                  m = {},
                  g = (function o(a, i, p) {
                    if ((void 0 === i && (i = 0), i === e.length))
                      return a.map(function (e) {
                        return n({}, e, { depth: i });
                      });
                    var g = e[i],
                      f = d(a, g);
                    return Object.entries(f).map(function (n, a) {
                      var d = n[0],
                        f = n[1],
                        h = g + ":" + d,
                        v = o(f, i + 1, (h = p ? p + ">" + h : h)),
                        w = i ? N(f, "leafRows") : f,
                        S = (function (t, r, o) {
                          var n = {};
                          return (
                            c.forEach(function (a) {
                              if (e.includes(a.id))
                                n[a.id] = r[0] ? r[0].values[a.id] : null;
                              else {
                                var i =
                                  "function" == typeof a.aggregate
                                    ? a.aggregate
                                    : y[a.aggregate] || Ee[a.aggregate];
                                if (i) {
                                  var s = r.map(function (e) {
                                      return e.values[a.id];
                                    }),
                                    c = t.map(function (e) {
                                      var t = e.values[a.id];
                                      if (!o && a.aggregateValue) {
                                        var r =
                                          "function" == typeof a.aggregateValue
                                            ? a.aggregateValue
                                            : y[a.aggregateValue] ||
                                              Ee[a.aggregateValue];
                                        if (!r)
                                          throw (
                                            (console.info({ column: a }),
                                            new Error(
                                              "React Table: Invalid column.aggregateValue option for column listed above"
                                            ))
                                          );
                                        t = r(t, e, a);
                                      }
                                      return t;
                                    });
                                  n[a.id] = i(c, s);
                                } else {
                                  if (a.aggregate)
                                    throw (
                                      (console.info({ column: a }),
                                      new Error(
                                        "React Table: Invalid column.aggregate option for column listed above"
                                      ))
                                    );
                                  n[a.id] = null;
                                }
                              }
                            }),
                            n
                          );
                        })(w, f, i),
                        z = {
                          id: h,
                          isGrouped: !0,
                          groupByID: g,
                          groupByVal: d,
                          values: S,
                          subRows: v,
                          leafRows: w,
                          depth: i,
                          index: a,
                        };
                      return (
                        v.forEach(function (e) {
                          t.push(e),
                            (r[e.id] = e),
                            e.isGrouped
                              ? (s.push(e), (u[e.id] = e))
                              : (l.push(e), (m[e.id] = e));
                        }),
                        z
                      );
                    });
                  })(o);
                return (
                  g.forEach(function (e) {
                    t.push(e),
                      (r[e.id] = e),
                      e.isGrouped
                        ? (s.push(e), (u[e.id] = e))
                        : (l.push(e), (m[e.id] = e));
                  }),
                  [g, t, r, s, u, l, m]
                );
              },
              [p, S, o, a, i, c, y, d]
            ),
            I = E[0],
            D = E[1],
            F = E[2],
            _ = E[3],
            G = E[4],
            H = E[5],
            T = E[6],
            O = h(b);
          w(
            function () {
              O() && z({ type: s.resetGroupBy });
            },
            [z, p ? null : r]
          ),
            Object.assign(e, {
              preGroupedRows: o,
              preGroupedFlatRow: a,
              preGroupedRowsById: i,
              groupedRows: I,
              groupedFlatRows: D,
              groupedRowsById: F,
              onlyGroupedFlatRows: _,
              onlyGroupedRowsById: G,
              nonGroupedFlatRows: H,
              nonGroupedRowsById: T,
              rows: I,
              flatRows: D,
              rowsById: F,
              toggleGroupBy: x,
              setGroupBy: B,
            });
        }
        function Le(e) {
          e.allCells.forEach(function (t) {
            var r;
            (t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID),
              (t.isPlaceholder = !t.isGrouped && t.column.isGrouped),
              (t.isAggregated =
                !t.isGrouped &&
                !t.isPlaceholder &&
                (null == (r = e.subRows) ? void 0 : r.length));
          });
        }
        function We(e, t) {
          return e.reduce(function (e, r, o) {
            var n = "" + r.values[t];
            return (e[n] = Array.isArray(e[n]) ? e[n] : []), e[n].push(r), e;
          }, {});
        }
        var je = /([0-9]+)/gm;
        function Ve(e, t) {
          return e === t ? 0 : e > t ? 1 : -1;
        }
        function qe(e, t, r) {
          return [e.values[r], t.values[r]];
        }
        function Ue(e) {
          return "number" == typeof e
            ? isNaN(e) || e === 1 / 0 || e === -1 / 0
              ? ""
              : String(e)
            : "string" == typeof e
            ? e
            : "";
        }
        var Xe = Object.freeze({
          __proto__: null,
          alphanumeric: function (e, t, r) {
            var o = qe(e, t, r),
              n = o[0],
              a = o[1];
            for (
              n = Ue(n),
                a = Ue(a),
                n = n.split(je).filter(Boolean),
                a = a.split(je).filter(Boolean);
              n.length && a.length;

            ) {
              var i = n.shift(),
                s = a.shift(),
                c = parseInt(i, 10),
                u = parseInt(s, 10),
                l = [c, u].sort();
              if (isNaN(l[0])) {
                if (i > s) return 1;
                if (s > i) return -1;
              } else {
                if (isNaN(l[1])) return isNaN(c) ? -1 : 1;
                if (c > u) return 1;
                if (u > c) return -1;
              }
            }
            return n.length - a.length;
          },
          datetime: function (e, t, r) {
            var o = qe(e, t, r),
              n = o[0],
              a = o[1];
            return Ve((n = n.getTime()), (a = a.getTime()));
          },
          basic: function (e, t, r) {
            var o = qe(e, t, r);
            return Ve(o[0], o[1]);
          },
          string: function (e, t, r) {
            var o = qe(e, t, r),
              n = o[0],
              a = o[1];
            for (
              n = n.split("").filter(Boolean), a = a.split("").filter(Boolean);
              n.length && a.length;

            ) {
              var i = n.shift(),
                s = a.shift(),
                c = i.toLowerCase(),
                u = s.toLowerCase();
              if (c > u) return 1;
              if (u > c) return -1;
              if (i > s) return 1;
              if (s > i) return -1;
            }
            return n.length - a.length;
          },
          number: function (e, t, r) {
            var o = qe(e, t, r),
              n = o[0],
              a = o[1],
              i = /[^0-9.]/gi;
            return Ve(
              (n = Number(String(n).replace(i, ""))),
              (a = Number(String(a).replace(i, "")))
            );
          },
        });
        (s.resetSortBy = "resetSortBy"),
          (s.setSortBy = "setSortBy"),
          (s.toggleSortBy = "toggleSortBy"),
          (s.clearSortBy = "clearSortBy"),
          (l.sortType = "alphanumeric"),
          (l.sortDescFirst = !1);
        var Ke = function (e) {
          (e.getSortByToggleProps = [Qe]),
            e.stateReducers.push($e),
            e.useInstance.push(Ze);
        };
        Ke.pluginName = "useSortBy";
        var Qe = function (e, t) {
          var r = t.instance,
            o = t.column,
            n = r.isMultiSortEvent,
            a =
              void 0 === n
                ? function (e) {
                    return e.shiftKey;
                  }
                : n;
          return [
            e,
            {
              onClick: o.canSort
                ? function (e) {
                    e.persist(),
                      o.toggleSortBy(void 0, !r.disableMultiSort && a(e));
                  }
                : void 0,
              style: { cursor: o.canSort ? "pointer" : void 0 },
              title: o.canSort ? "Toggle SortBy" : void 0,
            },
          ];
        };
        function $e(e, t, r, o) {
          if (t.type === s.init) return n({ sortBy: [] }, e);
          if (t.type === s.resetSortBy)
            return n({}, e, { sortBy: o.initialState.sortBy || [] });
          if (t.type === s.clearSortBy)
            return n({}, e, {
              sortBy: e.sortBy.filter(function (e) {
                return e.id !== t.columnId;
              }),
            });
          if (t.type === s.setSortBy) return n({}, e, { sortBy: t.sortBy });
          if (t.type === s.toggleSortBy) {
            var a,
              i = t.columnId,
              c = t.desc,
              u = t.multi,
              l = o.allColumns,
              d = o.disableMultiSort,
              m = o.disableSortRemove,
              p = o.disableMultiRemove,
              g = o.maxMultiSortColCount,
              f = void 0 === g ? Number.MAX_SAFE_INTEGER : g,
              y = e.sortBy,
              h = l.find(function (e) {
                return e.id === i;
              }).sortDescFirst,
              v = y.find(function (e) {
                return e.id === i;
              }),
              w = y.findIndex(function (e) {
                return e.id === i;
              }),
              S = null != c,
              z = [];
            return (
              "toggle" !=
                (a =
                  !d && u
                    ? v
                      ? "toggle"
                      : "add"
                    : w !== y.length - 1 || 1 !== y.length
                    ? "replace"
                    : v
                    ? "toggle"
                    : "replace") ||
                m ||
                S ||
                (u && p) ||
                !((v && v.desc && !h) || (!v.desc && h)) ||
                (a = "remove"),
              "replace" === a
                ? (z = [{ id: i, desc: S ? c : h }])
                : "add" === a
                ? (z = [].concat(y, [{ id: i, desc: S ? c : h }])).splice(
                    0,
                    z.length - f
                  )
                : "toggle" === a
                ? (z = y.map(function (e) {
                    return e.id === i ? n({}, e, { desc: S ? c : !v.desc }) : e;
                  }))
                : "remove" === a &&
                  (z = y.filter(function (e) {
                    return e.id !== i;
                  })),
              n({}, e, { sortBy: z })
            );
          }
        }
        function Ze(e) {
          var r = e.data,
            o = e.rows,
            n = e.flatRows,
            a = e.allColumns,
            i = e.orderByFn,
            c = void 0 === i ? Ye : i,
            u = e.sortTypes,
            l = e.manualSortBy,
            d = e.defaultCanSort,
            p = e.disableSortBy,
            g = e.flatHeaders,
            y = e.state.sortBy,
            v = e.dispatch,
            S = e.plugins,
            z = e.getHooks,
            A = e.autoResetSortBy,
            b = void 0 === A || A;
          f(
            S,
            ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"],
            "useSortBy"
          );
          var R = t.useCallback(
              function (e) {
                v({ type: s.setSortBy, sortBy: e });
              },
              [v]
            ),
            M = t.useCallback(
              function (e, t, r) {
                v({ type: s.toggleSortBy, columnId: e, desc: t, multi: r });
              },
              [v]
            ),
            k = h(e);
          g.forEach(function (e) {
            var t = e.accessor,
              r = e.canSort,
              o = e.disableSortBy,
              n = e.id,
              a = t
                ? P(!0 !== o && void 0, !0 !== p && void 0, !0)
                : P(d, r, !1);
            (e.canSort = a),
              e.canSort &&
                ((e.toggleSortBy = function (t, r) {
                  return M(e.id, t, r);
                }),
                (e.clearSortBy = function () {
                  v({ type: s.clearSortBy, columnId: e.id });
                })),
              (e.getSortByToggleProps = m(z().getSortByToggleProps, {
                instance: k(),
                column: e,
              }));
            var i = y.find(function (e) {
              return e.id === n;
            });
            (e.isSorted = !!i),
              (e.sortedIndex = y.findIndex(function (e) {
                return e.id === n;
              })),
              (e.isSortedDesc = e.isSorted ? i.desc : void 0);
          });
          var C = t.useMemo(
              function () {
                if (l || !y.length) return [o, n];
                var e = [],
                  t = y.filter(function (e) {
                    return a.find(function (t) {
                      return t.id === e.id;
                    });
                  });
                return [
                  (function r(o) {
                    var n = c(
                      o,
                      t.map(function (e) {
                        var t = a.find(function (t) {
                          return t.id === e.id;
                        });
                        if (!t)
                          throw new Error(
                            "React-Table: Could not find a column with id: " +
                              e.id +
                              " while sorting"
                          );
                        var r = t.sortType,
                          o = x(r) || (u || {})[r] || Xe[r];
                        if (!o)
                          throw new Error(
                            "React-Table: Could not find a valid sortType of '" +
                              r +
                              "' for column '" +
                              e.id +
                              "'."
                          );
                        return function (t, r) {
                          return o(t, r, e.id, e.desc);
                        };
                      }),
                      t.map(function (e) {
                        var t = a.find(function (t) {
                          return t.id === e.id;
                        });
                        return t && t.sortInverted ? e.desc : !e.desc;
                      })
                    );
                    return (
                      n.forEach(function (t) {
                        e.push(t),
                          t.subRows &&
                            0 !== t.subRows.length &&
                            (t.subRows = r(t.subRows));
                      }),
                      n
                    );
                  })(o),
                  e,
                ];
              },
              [l, y, o, n, a, c, u]
            ),
            N = C[0],
            B = C[1],
            E = h(b);
          w(
            function () {
              E() && v({ type: s.resetSortBy });
            },
            [l ? null : r]
          ),
            Object.assign(e, {
              preSortedRows: o,
              preSortedFlatRows: n,
              sortedRows: N,
              sortedFlatRows: B,
              rows: N,
              flatRows: B,
              setSortBy: R,
              toggleSortBy: M,
            });
        }
        function Ye(e, t, r) {
          return [].concat(e).sort(function (e, o) {
            for (var n = 0; n < t.length; n += 1) {
              var a = t[n],
                i = !1 === r[n] || "desc" === r[n],
                s = a(e, o);
              if (0 !== s) return i ? -s : s;
            }
            return r[0] ? e.index - o.index : o.index - e.index;
          });
        }
        (s.resetPage = "resetPage"),
          (s.gotoPage = "gotoPage"),
          (s.setPageSize = "setPageSize");
        var Je = function (e) {
          e.stateReducers.push(et), e.useInstance.push(tt);
        };
        function et(e, t, r, o) {
          if (t.type === s.init) return n({ pageSize: 10, pageIndex: 0 }, e);
          if (t.type === s.resetPage)
            return n({}, e, { pageIndex: o.initialState.pageIndex || 0 });
          if (t.type === s.gotoPage) {
            var a = o.pageCount,
              i = o.page,
              c = y(t.pageIndex, e.pageIndex),
              u = !1;
            return (
              c > e.pageIndex
                ? (u = -1 === a ? i.length >= e.pageSize : c < a)
                : c < e.pageIndex && (u = c > -1),
              u ? n({}, e, { pageIndex: c }) : e
            );
          }
          if (t.type === s.setPageSize) {
            var l = t.pageSize,
              d = e.pageSize * e.pageIndex;
            return n({}, e, { pageIndex: Math.floor(d / l), pageSize: l });
          }
        }
        function tt(e) {
          var r = e.rows,
            o = e.autoResetPage,
            n = void 0 === o || o,
            a = e.manualExpandedKey,
            i = void 0 === a ? "expanded" : a,
            c = e.plugins,
            u = e.pageCount,
            l = e.paginateExpandedRows,
            d = void 0 === l || l,
            m = e.expandSubRows,
            p = void 0 === m || m,
            g = e.state,
            y = g.pageSize,
            v = g.pageIndex,
            S = g.expanded,
            z = g.globalFilter,
            A = g.filters,
            b = g.groupBy,
            R = g.sortBy,
            M = e.dispatch,
            k = e.data,
            C = e.manualPagination;
          f(
            c,
            [
              "useGlobalFilter",
              "useFilters",
              "useGroupBy",
              "useSortBy",
              "useExpanded",
            ],
            "usePagination"
          );
          var P = h(n);
          w(
            function () {
              P() && M({ type: s.resetPage });
            },
            [M, C ? null : k, z, A, b, R]
          );
          var x = C ? u : Math.ceil(r.length / y),
            N = t.useMemo(
              function () {
                return x > 0
                  ? []
                      .concat(new Array(x))
                      .fill(null)
                      .map(function (e, t) {
                        return t;
                      })
                  : [];
              },
              [x]
            ),
            E = t.useMemo(
              function () {
                var e;
                if (C) e = r;
                else {
                  var t = y * v,
                    o = t + y;
                  e = r.slice(t, o);
                }
                return d
                  ? e
                  : B(e, {
                      manualExpandedKey: i,
                      expanded: S,
                      expandSubRows: p,
                    });
              },
              [p, S, i, C, v, y, d, r]
            ),
            I = v > 0,
            D = -1 === x ? E.length >= y : v < x - 1,
            F = t.useCallback(
              function (e) {
                M({ type: s.gotoPage, pageIndex: e });
              },
              [M]
            ),
            _ = t.useCallback(
              function () {
                return F(function (e) {
                  return e - 1;
                });
              },
              [F]
            ),
            G = t.useCallback(
              function () {
                return F(function (e) {
                  return e + 1;
                });
              },
              [F]
            ),
            H = t.useCallback(
              function (e) {
                M({ type: s.setPageSize, pageSize: e });
              },
              [M]
            );
          Object.assign(e, {
            pageOptions: N,
            pageCount: x,
            page: E,
            canPreviousPage: I,
            canNextPage: D,
            gotoPage: F,
            previousPage: _,
            nextPage: G,
            setPageSize: H,
          });
        }
        (Je.pluginName = "usePagination"),
          (s.resetPivot = "resetPivot"),
          (s.togglePivot = "togglePivot");
        var rt = function (e) {
          (e.getPivotToggleProps = [nt]),
            e.stateReducers.push(at),
            e.useInstanceAfterData.push(it),
            e.allColumns.push(st),
            e.accessValue.push(ct),
            e.materializedColumns.push(ut),
            e.materializedColumnsDeps.push(lt),
            e.visibleColumns.push(dt),
            e.visibleColumnsDeps.push(mt),
            e.useInstance.push(pt),
            e.prepareRow.push(gt);
        };
        rt.pluginName = "usePivotColumns";
        var ot = [],
          nt = function (e, t) {
            var r = t.header;
            return [
              e,
              {
                onClick: r.canPivot
                  ? function (e) {
                      e.persist(), r.togglePivot();
                    }
                  : void 0,
                style: { cursor: r.canPivot ? "pointer" : void 0 },
                title: "Toggle Pivot",
              },
            ];
          };
        function at(e, t, r, o) {
          if (t.type === s.init) return n({ pivotColumns: ot }, e);
          if (t.type === s.resetPivot)
            return n({}, e, {
              pivotColumns: o.initialState.pivotColumns || ot,
            });
          if (t.type === s.togglePivot) {
            var a = t.columnId,
              i = t.value,
              c = void 0 !== i ? i : !e.pivotColumns.includes(a);
            return n(
              {},
              e,
              c
                ? { pivotColumns: [].concat(e.pivotColumns, [a]) }
                : {
                    pivotColumns: e.pivotColumns.filter(function (e) {
                      return e !== a;
                    }),
                  }
            );
          }
        }
        function it(e) {
          e.allColumns.forEach(function (t) {
            t.isPivotSource = e.state.pivotColumns.includes(t.id);
          });
        }
        function st(e, t) {
          var r = t.instance;
          return (
            e.forEach(function (e) {
              (e.isPivotSource = r.state.pivotColumns.includes(e.id)),
                (e.uniqueValues = new Set());
            }),
            e
          );
        }
        function ct(e, t) {
          var r = t.column;
          return r.uniqueValues && void 0 !== e && r.uniqueValues.add(e), e;
        }
        function ut(e, t) {
          var r = t.instance,
            o = r.allColumns,
            a = r.state;
          if (!a.pivotColumns.length || !a.groupBy || !a.groupBy.length)
            return e;
          var i = a.pivotColumns
              .map(function (e) {
                return o.find(function (t) {
                  return t.id === e;
                });
              })
              .filter(Boolean),
            s = o.filter(function (e) {
              return (
                !e.isPivotSource &&
                !a.groupBy.includes(e.id) &&
                !a.pivotColumns.includes(e.id)
              );
            }),
            c = b(
              (function e(t, r, o) {
                void 0 === t && (t = 0), void 0 === o && (o = []);
                var a = i[t];
                return a
                  ? Array.from(a.uniqueValues)
                      .sort()
                      .map(function (i) {
                        var s = n({}, a, {
                          Header:
                            a.PivotHeader || "string" == typeof a.header
                              ? a.Header + ": " + i
                              : i,
                          isPivotGroup: !0,
                          parent: r,
                          depth: t,
                          id: r ? r.id + "." + a.id + "." + i : a.id + "." + i,
                          pivotValue: i,
                        });
                        return (
                          (s.columns = e(
                            t + 1,
                            s,
                            [].concat(o, [
                              function (e) {
                                return e.values[a.id] === i;
                              },
                            ])
                          )),
                          s
                        );
                      })
                  : s.map(function (e) {
                      return n({}, e, {
                        canPivot: !1,
                        isPivoted: !0,
                        parent: r,
                        depth: t,
                        id: "" + (r ? r.id + "." + e.id : e.id),
                        accessor: function (t, r, n) {
                          if (
                            o.every(function (e) {
                              return e(n);
                            })
                          )
                            return n.values[e.id];
                        },
                      });
                    });
              })()
            );
          return [].concat(e, c);
        }
        function lt(e, t) {
          var r = t.instance.state,
            o = r.pivotColumns,
            n = r.groupBy;
          return [].concat(e, [o, n]);
        }
        function dt(e, t) {
          var r = t.instance.state;
          return (
            (e = e.filter(function (e) {
              return !e.isPivotSource;
            })),
            r.pivotColumns.length &&
              r.groupBy &&
              r.groupBy.length &&
              (e = e.filter(function (e) {
                return e.isGrouped || e.isPivoted;
              })),
            e
          );
        }
        function mt(e, t) {
          var r = t.instance;
          return [].concat(e, [r.state.pivotColumns, r.state.groupBy]);
        }
        function pt(e) {
          var t = e.columns,
            r = e.allColumns,
            o = e.flatHeaders,
            n = e.getHooks,
            a = e.plugins,
            i = e.dispatch,
            c = e.autoResetPivot,
            u = void 0 === c || c,
            l = e.manaulPivot,
            d = e.disablePivot,
            p = e.defaultCanPivot;
          f(a, ["useGroupBy"], "usePivotColumns");
          var g = h(e);
          r.forEach(function (t) {
            var r = t.accessor,
              o = t.defaultPivot,
              n = t.disablePivot;
            (t.canPivot = r
              ? P(t.canPivot, !0 !== n && void 0, !0 !== d && void 0, !0)
              : P(t.canPivot, o, p, !1)),
              t.canPivot &&
                (t.togglePivot = function () {
                  return e.togglePivot(t.id);
                }),
              (t.Aggregated = t.Aggregated || t.Cell);
          }),
            o.forEach(function (e) {
              e.getPivotToggleProps = m(n().getPivotToggleProps, {
                instance: g(),
                header: e,
              });
            });
          var y = h(u);
          w(
            function () {
              y() && i({ type: s.resetPivot });
            },
            [i, l ? null : t]
          ),
            Object.assign(e, {
              togglePivot: function (e, t) {
                i({ type: s.togglePivot, columnId: e, value: t });
              },
            });
        }
        function gt(e) {
          e.allCells.forEach(function (e) {
            e.isPivoted = e.column.isPivoted;
          });
        }
        (s.resetSelectedRows = "resetSelectedRows"),
          (s.toggleAllRowsSelected = "toggleAllRowsSelected"),
          (s.toggleRowSelected = "toggleRowSelected"),
          (s.toggleAllPageRowsSelected = "toggleAllPageRowsSelected");
        var ft = function (e) {
          (e.getToggleRowSelectedProps = [yt]),
            (e.getToggleAllRowsSelectedProps = [ht]),
            (e.getToggleAllPageRowsSelectedProps = [vt]),
            e.stateReducers.push(wt),
            e.useInstance.push(St),
            e.prepareRow.push(zt);
        };
        ft.pluginName = "useRowSelect";
        var yt = function (e, t) {
            var r = t.instance,
              o = t.row,
              n = r.manualRowSelectedKey,
              a = void 0 === n ? "isSelected" : n;
            return [
              e,
              {
                onChange: function (e) {
                  o.toggleRowSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: !(!o.original || !o.original[a]) || o.isSelected,
                title: "Toggle Row Selected",
                indeterminate: o.isSomeSelected,
              },
            ];
          },
          ht = function (e, t) {
            var r = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  r.toggleAllRowsSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: r.isAllRowsSelected,
                title: "Toggle All Rows Selected",
                indeterminate: Boolean(
                  !r.isAllRowsSelected &&
                    Object.keys(r.state.selectedRowIds).length
                ),
              },
            ];
          },
          vt = function (e, t) {
            var r = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  r.toggleAllPageRowsSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: r.isAllPageRowsSelected,
                title: "Toggle All Current Page Rows Selected",
                indeterminate: Boolean(
                  !r.isAllPageRowsSelected &&
                    r.page.some(function (e) {
                      var t = e.id;
                      return r.state.selectedRowIds[t];
                    })
                ),
              },
            ];
          };
        function wt(e, t, r, o) {
          if (t.type === s.init) return n({ selectedRowIds: {} }, e);
          if (t.type === s.resetSelectedRows)
            return n({}, e, {
              selectedRowIds: o.initialState.selectedRowIds || {},
            });
          if (t.type === s.toggleAllRowsSelected) {
            var a = t.value,
              i = o.isAllRowsSelected,
              c = o.rowsById,
              u = o.nonGroupedRowsById,
              l = void 0 === u ? c : u,
              d = void 0 !== a ? a : !i,
              m = Object.assign({}, e.selectedRowIds);
            return (
              d
                ? Object.keys(l).forEach(function (e) {
                    m[e] = !0;
                  })
                : Object.keys(l).forEach(function (e) {
                    delete m[e];
                  }),
              n({}, e, { selectedRowIds: m })
            );
          }
          if (t.type === s.toggleRowSelected) {
            var p = t.id,
              g = t.value,
              f = o.rowsById,
              y = o.selectSubRows,
              h = void 0 === y || y,
              v = o.getSubRows,
              w = e.selectedRowIds[p],
              S = void 0 !== g ? g : !w;
            if (w === S) return e;
            var z = n({}, e.selectedRowIds);
            return (
              (function e(t) {
                var r = f[t];
                if (
                  r &&
                  (r.isGrouped || (S ? (z[t] = !0) : delete z[t]), h && v(r))
                )
                  return v(r).forEach(function (t) {
                    return e(t.id);
                  });
              })(p),
              n({}, e, { selectedRowIds: z })
            );
          }
          if (t.type === s.toggleAllPageRowsSelected) {
            var A = t.value,
              b = o.page,
              R = o.rowsById,
              M = o.selectSubRows,
              k = void 0 === M || M,
              C = o.isAllPageRowsSelected,
              P = o.getSubRows,
              x = void 0 !== A ? A : !C,
              N = n({}, e.selectedRowIds);
            return (
              b.forEach(function (e) {
                return (function e(t) {
                  var r = R[t];
                  if (
                    (r.isGrouped || (x ? (N[t] = !0) : delete N[t]), k && P(r))
                  )
                    return P(r).forEach(function (t) {
                      return e(t.id);
                    });
                })(e.id);
              }),
              n({}, e, { selectedRowIds: N })
            );
          }
          return e;
        }
        function St(e) {
          var r = e.data,
            o = e.rows,
            n = e.getHooks,
            a = e.plugins,
            i = e.rowsById,
            c = e.nonGroupedRowsById,
            u = void 0 === c ? i : c,
            l = e.autoResetSelectedRows,
            d = void 0 === l || l,
            p = e.state.selectedRowIds,
            g = e.selectSubRows,
            y = void 0 === g || g,
            v = e.dispatch,
            S = e.page,
            z = e.getSubRows;
          f(
            a,
            [
              "useFilters",
              "useGroupBy",
              "useSortBy",
              "useExpanded",
              "usePagination",
            ],
            "useRowSelect"
          );
          var A = t.useMemo(
              function () {
                var e = [];
                return (
                  o.forEach(function (t) {
                    var r = y
                      ? (function e(t, r, o) {
                          if (r[t.id]) return !0;
                          var n = o(t);
                          if (n && n.length) {
                            var a = !0,
                              i = !1;
                            return (
                              n.forEach(function (t) {
                                (i && !a) || (e(t, r, o) ? (i = !0) : (a = !1));
                              }),
                              !!a || (!!i && null)
                            );
                          }
                          return !1;
                        })(t, p, z)
                      : !!p[t.id];
                    (t.isSelected = !!r),
                      (t.isSomeSelected = null === r),
                      r && e.push(t);
                  }),
                  e
                );
              },
              [o, y, p, z]
            ),
            b = Boolean(Object.keys(u).length && Object.keys(p).length),
            R = b;
          b &&
            Object.keys(u).some(function (e) {
              return !p[e];
            }) &&
            (b = !1),
            b ||
              (S &&
                S.length &&
                S.some(function (e) {
                  var t = e.id;
                  return !p[t];
                }) &&
                (R = !1));
          var M = h(d);
          w(
            function () {
              M() && v({ type: s.resetSelectedRows });
            },
            [v, r]
          );
          var k = t.useCallback(
              function (e) {
                return v({ type: s.toggleAllRowsSelected, value: e });
              },
              [v]
            ),
            C = t.useCallback(
              function (e) {
                return v({ type: s.toggleAllPageRowsSelected, value: e });
              },
              [v]
            ),
            P = t.useCallback(
              function (e, t) {
                return v({ type: s.toggleRowSelected, id: e, value: t });
              },
              [v]
            ),
            x = h(e),
            N = m(n().getToggleAllRowsSelectedProps, { instance: x() }),
            B = m(n().getToggleAllPageRowsSelectedProps, { instance: x() });
          Object.assign(e, {
            selectedFlatRows: A,
            isAllRowsSelected: b,
            isAllPageRowsSelected: R,
            toggleRowSelected: P,
            toggleAllRowsSelected: k,
            getToggleAllRowsSelectedProps: N,
            getToggleAllPageRowsSelectedProps: B,
            toggleAllPageRowsSelected: C,
          });
        }
        function zt(e, t) {
          var r = t.instance;
          (e.toggleRowSelected = function (t) {
            return r.toggleRowSelected(e.id, t);
          }),
            (e.getToggleRowSelectedProps = m(
              r.getHooks().getToggleRowSelectedProps,
              { instance: r, row: e }
            ));
        }
        var At = function (e) {
            return {};
          },
          bt = function (e) {
            return {};
          };
        (s.setRowState = "setRowState"),
          (s.setCellState = "setCellState"),
          (s.resetRowState = "resetRowState");
        var Rt = function (e) {
          e.stateReducers.push(Mt),
            e.useInstance.push(kt),
            e.prepareRow.push(Ct);
        };
        function Mt(e, t, r, o) {
          var a = o.initialRowStateAccessor,
            i = void 0 === a ? At : a,
            c = o.initialCellStateAccessor,
            u = void 0 === c ? bt : c,
            l = o.rowsById;
          if (t.type === s.init) return n({ rowState: {} }, e);
          if (t.type === s.resetRowState)
            return n({}, e, { rowState: o.initialState.rowState || {} });
          if (t.type === s.setRowState) {
            var d,
              m = t.rowId,
              p = t.value,
              g = void 0 !== e.rowState[m] ? e.rowState[m] : i(l[m]);
            return n({}, e, {
              rowState: n({}, e.rowState, ((d = {}), (d[m] = y(p, g)), d)),
            });
          }
          if (t.type === s.setCellState) {
            var f,
              h,
              v,
              w,
              S,
              z = t.rowId,
              A = t.columnId,
              b = t.value,
              R = void 0 !== e.rowState[z] ? e.rowState[z] : i(l[z]),
              M =
                void 0 !==
                (null == R || null == (f = R.cellState) ? void 0 : f[A])
                  ? R.cellState[A]
                  : u(
                      null == (h = l[z]) || null == (v = h.cells)
                        ? void 0
                        : v.find(function (e) {
                            return e.column.id === A;
                          })
                    );
            return n({}, e, {
              rowState: n(
                {},
                e.rowState,
                ((S = {}),
                (S[z] = n({}, R, {
                  cellState: n(
                    {},
                    R.cellState || {},
                    ((w = {}), (w[A] = y(b, M)), w)
                  ),
                })),
                S)
              ),
            });
          }
        }
        function kt(e) {
          var r = e.autoResetRowState,
            o = void 0 === r || r,
            n = e.data,
            a = e.dispatch,
            i = t.useCallback(
              function (e, t) {
                return a({ type: s.setRowState, rowId: e, value: t });
              },
              [a]
            ),
            c = t.useCallback(
              function (e, t, r) {
                return a({
                  type: s.setCellState,
                  rowId: e,
                  columnId: t,
                  value: r,
                });
              },
              [a]
            ),
            u = h(o);
          w(
            function () {
              u() && a({ type: s.resetRowState });
            },
            [n]
          ),
            Object.assign(e, { setRowState: i, setCellState: c });
        }
        function Ct(e, t) {
          var r = t.instance,
            o = r.initialRowStateAccessor,
            n = void 0 === o ? At : o,
            a = r.initialCellStateAccessor,
            i = void 0 === a ? bt : a,
            s = r.state.rowState;
          e &&
            ((e.state = void 0 !== s[e.id] ? s[e.id] : n(e)),
            (e.setState = function (t) {
              return r.setRowState(e.id, t);
            }),
            e.cells.forEach(function (t) {
              e.state.cellState || (e.state.cellState = {}),
                (t.state =
                  void 0 !== e.state.cellState[t.column.id]
                    ? e.state.cellState[t.column.id]
                    : i(t)),
                (t.setState = function (o) {
                  return r.setCellState(e.id, t.column.id, o);
                });
            }));
        }
        (Rt.pluginName = "useRowState"),
          (s.resetColumnOrder = "resetColumnOrder"),
          (s.setColumnOrder = "setColumnOrder");
        var Pt = function (e) {
          e.stateReducers.push(xt),
            e.visibleColumnsDeps.push(function (e, t) {
              var r = t.instance;
              return [].concat(e, [r.state.columnOrder]);
            }),
            e.visibleColumns.push(Nt),
            e.useInstance.push(Bt);
        };
        function xt(e, t, r, o) {
          return t.type === s.init
            ? n({ columnOrder: [] }, e)
            : t.type === s.resetColumnOrder
            ? n({}, e, { columnOrder: o.initialState.columnOrder || [] })
            : t.type === s.setColumnOrder
            ? n({}, e, { columnOrder: y(t.columnOrder, e.columnOrder) })
            : void 0;
        }
        function Nt(e, t) {
          var r = t.instance.state.columnOrder;
          if (!r || !r.length) return e;
          for (
            var o = [].concat(r),
              n = [].concat(e),
              a = [],
              i = function () {
                var e = o.shift(),
                  t = n.findIndex(function (t) {
                    return t.id === e;
                  });
                t > -1 && a.push(n.splice(t, 1)[0]);
              };
            n.length && o.length;

          )
            i();
          return [].concat(a, n);
        }
        function Bt(e) {
          var r = e.dispatch;
          e.setColumnOrder = t.useCallback(
            function (e) {
              return r({ type: s.setColumnOrder, columnOrder: e });
            },
            [r]
          );
        }
        (Pt.pluginName = "useColumnOrder"),
          (l.canResize = !0),
          (s.columnStartResizing = "columnStartResizing"),
          (s.columnResizing = "columnResizing"),
          (s.columnDoneResizing = "columnDoneResizing"),
          (s.resetResize = "resetResize");
        var Et = function (e) {
            (e.getResizerProps = [It]),
              e.getHeaderProps.push({ style: { position: "relative" } }),
              e.stateReducers.push(Dt),
              e.useInstance.push(_t),
              e.useInstanceBeforeDimensions.push(Ft);
          },
          It = function (e, t) {
            var r = t.instance,
              o = t.header,
              n = r.dispatch,
              a = function (e, t) {
                var r = !1;
                if ("touchstart" === e.type) {
                  if (e.touches && e.touches.length > 1) return;
                  r = !0;
                }
                var o,
                  a,
                  i = (function (e) {
                    var t = [];
                    return (
                      (function e(r) {
                        r.columns && r.columns.length && r.columns.map(e),
                          t.push(r);
                      })(e),
                      t
                    );
                  })(t).map(function (e) {
                    return [e.id, e.totalWidth];
                  }),
                  c = r ? Math.round(e.touches[0].clientX) : e.clientX,
                  u = function () {
                    window.cancelAnimationFrame(o),
                      (o = null),
                      n({ type: s.columnDoneResizing });
                  },
                  l = function () {
                    window.cancelAnimationFrame(o),
                      (o = null),
                      n({ type: s.columnResizing, clientX: a });
                  },
                  d = function (e) {
                    (a = e), o || (o = window.requestAnimationFrame(l));
                  },
                  m = {
                    mouse: {
                      moveEvent: "mousemove",
                      moveHandler: function (e) {
                        return d(e.clientX);
                      },
                      upEvent: "mouseup",
                      upHandler: function (e) {
                        document.removeEventListener(
                          "mousemove",
                          m.mouse.moveHandler
                        ),
                          document.removeEventListener(
                            "mouseup",
                            m.mouse.upHandler
                          ),
                          u();
                      },
                    },
                    touch: {
                      moveEvent: "touchmove",
                      moveHandler: function (e) {
                        return (
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          d(e.touches[0].clientX),
                          !1
                        );
                      },
                      upEvent: "touchend",
                      upHandler: function (e) {
                        document.removeEventListener(
                          m.touch.moveEvent,
                          m.touch.moveHandler
                        ),
                          document.removeEventListener(
                            m.touch.upEvent,
                            m.touch.moveHandler
                          ),
                          u();
                      },
                    },
                  },
                  p = r ? m.touch : m.mouse,
                  g = !!(function () {
                    if ("boolean" == typeof F) return F;
                    var e = !1;
                    try {
                      var t = {
                        get passive() {
                          return (e = !0), !1;
                        },
                      };
                      window.addEventListener("test", null, t),
                        window.removeEventListener("test", null, t);
                    } catch (t) {
                      e = !1;
                    }
                    return (F = e);
                  })() && { passive: !1 };
                document.addEventListener(p.moveEvent, p.moveHandler, g),
                  document.addEventListener(p.upEvent, p.upHandler, g),
                  n({
                    type: s.columnStartResizing,
                    columnId: t.id,
                    columnWidth: t.totalWidth,
                    headerIdWidths: i,
                    clientX: c,
                  });
              };
            return [
              e,
              {
                onMouseDown: function (e) {
                  return e.persist() || a(e, o);
                },
                onTouchStart: function (e) {
                  return e.persist() || a(e, o);
                },
                style: { cursor: "col-resize" },
                draggable: !1,
                role: "separator",
              },
            ];
          };
        function Dt(e, t) {
          if (t.type === s.init)
            return n({ columnResizing: { columnWidths: {} } }, e);
          if (t.type === s.resetResize)
            return n({}, e, { columnResizing: { columnWidths: {} } });
          if (t.type === s.columnStartResizing) {
            var r = t.clientX,
              o = t.columnId,
              a = t.columnWidth,
              i = t.headerIdWidths;
            return n({}, e, {
              columnResizing: n({}, e.columnResizing, {
                startX: r,
                headerIdWidths: i,
                columnWidth: a,
                isResizingColumn: o,
              }),
            });
          }
          if (t.type === s.columnResizing) {
            var c = t.clientX,
              u = e.columnResizing,
              l = u.startX,
              d = u.columnWidth,
              m = u.headerIdWidths,
              p = (c - l) / d,
              g = {};
            return (
              (void 0 === m ? [] : m).forEach(function (e) {
                var t = e[0],
                  r = e[1];
                g[t] = Math.max(r + r * p, 0);
              }),
              n({}, e, {
                columnResizing: n({}, e.columnResizing, {
                  columnWidths: n({}, e.columnResizing.columnWidths, {}, g),
                }),
              })
            );
          }
          return t.type === s.columnDoneResizing
            ? n({}, e, {
                columnResizing: n({}, e.columnResizing, {
                  startX: null,
                  isResizingColumn: null,
                }),
              })
            : void 0;
        }
        Et.pluginName = "useResizeColumns";
        var Ft = function (e) {
          var t = e.flatHeaders,
            r = e.disableResizing,
            o = e.getHooks,
            n = e.state.columnResizing,
            a = h(e);
          t.forEach(function (e) {
            var t = P(
              !0 !== e.disableResizing && void 0,
              !0 !== r && void 0,
              !0
            );
            (e.canResize = t),
              (e.width = n.columnWidths[e.id] || e.originalWidth || e.width),
              (e.isResizing = n.isResizingColumn === e.id),
              t &&
                (e.getResizerProps = m(o().getResizerProps, {
                  instance: a(),
                  header: e,
                }));
          });
        };
        function _t(e) {
          var r = e.plugins,
            o = e.dispatch,
            n = e.autoResetResize,
            a = void 0 === n || n,
            i = e.columns;
          f(r, ["useAbsoluteLayout"], "useResizeColumns");
          var c = h(a);
          w(
            function () {
              c() && o({ type: s.resetResize });
            },
            [i]
          );
          var u = t.useCallback(
            function () {
              return o({ type: s.resetResize });
            },
            [o]
          );
          Object.assign(e, { resetResizing: u });
        }
        var Gt = { position: "absolute", top: 0 },
          Ht = function (e) {
            e.getTableBodyProps.push(Tt),
              e.getRowProps.push(Tt),
              e.getHeaderGroupProps.push(Tt),
              e.getFooterGroupProps.push(Tt),
              e.getHeaderProps.push(function (e, t) {
                var r = t.column;
                return [
                  e,
                  {
                    style: n({}, Gt, {
                      left: r.totalLeft + "px",
                      width: r.totalWidth + "px",
                    }),
                  },
                ];
              }),
              e.getCellProps.push(function (e, t) {
                var r = t.cell;
                return [
                  e,
                  {
                    style: n({}, Gt, {
                      left: r.column.totalLeft + "px",
                      width: r.column.totalWidth + "px",
                    }),
                  },
                ];
              }),
              e.getFooterProps.push(function (e, t) {
                var r = t.column;
                return [
                  e,
                  {
                    style: n({}, Gt, {
                      left: r.totalLeft + "px",
                      width: r.totalWidth + "px",
                    }),
                  },
                ];
              });
          };
        Ht.pluginName = "useAbsoluteLayout";
        var Tt = function (e, t) {
            return [
              e,
              {
                style: {
                  position: "relative",
                  width: t.instance.totalColumnsWidth + "px",
                },
              },
            ];
          },
          Ot = { display: "inline-block", boxSizing: "border-box" },
          Lt = function (e, t) {
            return [
              e,
              {
                style: {
                  display: "flex",
                  width: t.instance.totalColumnsWidth + "px",
                },
              },
            ];
          },
          Wt = function (e) {
            e.getRowProps.push(Lt),
              e.getHeaderGroupProps.push(Lt),
              e.getFooterGroupProps.push(Lt),
              e.getHeaderProps.push(function (e, t) {
                var r = t.column;
                return [
                  e,
                  { style: n({}, Ot, { width: r.totalWidth + "px" }) },
                ];
              }),
              e.getCellProps.push(function (e, t) {
                var r = t.cell;
                return [
                  e,
                  { style: n({}, Ot, { width: r.column.totalWidth + "px" }) },
                ];
              }),
              e.getFooterProps.push(function (e, t) {
                var r = t.column;
                return [
                  e,
                  { style: n({}, Ot, { width: r.totalWidth + "px" }) },
                ];
              });
          };
        function jt(e) {
          e.getTableProps.push(Vt),
            e.getRowProps.push(qt),
            e.getHeaderGroupProps.push(qt),
            e.getFooterGroupProps.push(qt),
            e.getHeaderProps.push(Ut),
            e.getCellProps.push(Xt),
            e.getFooterProps.push(Kt);
        }
        (Wt.pluginName = "useBlockLayout"), (jt.pluginName = "useFlexLayout");
        var Vt = function (e, t) {
            return [
              e,
              { style: { minWidth: t.instance.totalColumnsMinWidth + "px" } },
            ];
          },
          qt = function (e, t) {
            return [
              e,
              {
                style: {
                  display: "flex",
                  flex: "1 0 auto",
                  minWidth: t.instance.totalColumnsMinWidth + "px",
                },
              },
            ];
          },
          Ut = function (e, t) {
            var r = t.column;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: r.totalFlexWidth
                    ? r.totalFlexWidth + " 0 auto"
                    : void 0,
                  minWidth: r.totalMinWidth + "px",
                  width: r.totalWidth + "px",
                },
              },
            ];
          },
          Xt = function (e, t) {
            var r = t.cell;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: r.column.totalFlexWidth + " 0 auto",
                  minWidth: r.column.totalMinWidth + "px",
                  width: r.column.totalWidth + "px",
                },
              },
            ];
          },
          Kt = function (e, t) {
            var r = t.column;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: r.totalFlexWidth
                    ? r.totalFlexWidth + " 0 auto"
                    : void 0,
                  minWidth: r.totalMinWidth + "px",
                  width: r.totalWidth + "px",
                },
              },
            ];
          };
        function Qt(e) {
          e.stateReducers.push(Jt),
            e.getTableProps.push($t),
            e.getHeaderProps.push(Zt),
            e.getRowProps.push(Yt);
        }
        (s.columnStartResizing = "columnStartResizing"),
          (s.columnResizing = "columnResizing"),
          (s.columnDoneResizing = "columnDoneResizing"),
          (s.resetResize = "resetResize"),
          (Qt.pluginName = "useGridLayout");
        var $t = function (e, t) {
            var r = t.instance;
            return [
              e,
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: r.visibleColumns
                    .map(function (e) {
                      var t;
                      return r.state.gridLayout.columnWidths[e.id]
                        ? r.state.gridLayout.columnWidths[e.id] + "px"
                        : (
                            null == (t = r.state.columnResizing)
                              ? void 0
                              : t.isResizingColumn
                          )
                        ? r.state.gridLayout.startWidths[e.id] + "px"
                        : "number" == typeof e.width
                        ? e.width + "px"
                        : e.width;
                    })
                    .join(" "),
                },
              },
            ];
          },
          Zt = function (e, t) {
            var r = t.column;
            return [
              e,
              {
                id: "header-cell-" + r.id,
                style: {
                  position: "sticky",
                  gridColumn: "span " + r.totalVisibleHeaderCount,
                },
              },
            ];
          },
          Yt = function (e, t) {
            var r = t.row;
            return r.isExpanded
              ? [e, { style: { gridColumn: "1 / " + (r.cells.length + 1) } }]
              : [e, {}];
          };
        function Jt(e, t, r, o) {
          if (t.type === s.init)
            return n({ gridLayout: { columnWidths: {} } }, e);
          if (t.type === s.resetResize)
            return n({}, e, { gridLayout: { columnWidths: {} } });
          if (t.type === s.columnStartResizing) {
            var a = t.columnId,
              i = t.headerIdWidths,
              c = er(a);
            if (void 0 !== c) {
              var u = o.visibleColumns.reduce(function (e, t) {
                  var r;
                  return n({}, e, (((r = {})[t.id] = er(t.id)), r));
                }, {}),
                l = o.visibleColumns.reduce(function (e, t) {
                  var r;
                  return n({}, e, (((r = {})[t.id] = t.minWidth), r));
                }, {}),
                d = o.visibleColumns.reduce(function (e, t) {
                  var r;
                  return n({}, e, (((r = {})[t.id] = t.maxWidth), r));
                }, {}),
                m = i.map(function (e) {
                  var t = e[0];
                  return [t, er(t)];
                });
              return n({}, e, {
                gridLayout: n({}, e.gridLayout, {
                  startWidths: u,
                  minWidths: l,
                  maxWidths: d,
                  headerIdGridWidths: m,
                  columnWidth: c,
                }),
              });
            }
            return e;
          }
          if (t.type === s.columnResizing) {
            var p = t.clientX,
              g = e.columnResizing.startX,
              f = e.gridLayout,
              y = f.columnWidth,
              h = f.minWidths,
              v = f.maxWidths,
              w = f.headerIdGridWidths,
              S = (p - g) / y,
              z = {};
            return (
              (void 0 === w ? [] : w).forEach(function (e) {
                var t = e[0],
                  r = e[1];
                z[t] = Math.min(Math.max(h[t], r + r * S), v[t]);
              }),
              n({}, e, {
                gridLayout: n({}, e.gridLayout, {
                  columnWidths: n({}, e.gridLayout.columnWidths, {}, z),
                }),
              })
            );
          }
          return t.type === s.columnDoneResizing
            ? n({}, e, {
                gridLayout: n({}, e.gridLayout, {
                  startWidths: {},
                  minWidths: {},
                  maxWidths: {},
                }),
              })
            : void 0;
        }
        function er(e) {
          var t,
            r =
              null == (t = document.getElementById("header-cell-" + e))
                ? void 0
                : t.offsetWidth;
          if (void 0 !== r) return r;
        }
        (e._UNSTABLE_usePivotColumns = rt),
          (e.actions = s),
          (e.defaultColumn = l),
          (e.defaultGroupByFn = We),
          (e.defaultOrderByFn = Ye),
          (e.defaultRenderer = c),
          (e.emptyRenderer = u),
          (e.ensurePluginOrder = f),
          (e.flexRender = z),
          (e.functionalUpdate = y),
          (e.loopHooks = g),
          (e.makePropGetter = m),
          (e.makeRenderer = S),
          (e.reduceHooks = p),
          (e.safeUseLayoutEffect = v),
          (e.useAbsoluteLayout = Ht),
          (e.useAsyncDebounce = function (e, r) {
            void 0 === r && (r = 0);
            var n = t.useRef({}),
              a = h(e),
              i = h(r);
            return t.useCallback(
              (function () {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t,
                      r,
                      s,
                      c = arguments;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              t = c.length, r = new Array(t), s = 0;
                              s < t;
                              s++
                            )
                              r[s] = c[s];
                            return (
                              n.current.promise ||
                                (n.current.promise = new Promise(function (
                                  e,
                                  t
                                ) {
                                  (n.current.resolve = e),
                                    (n.current.reject = t);
                                })),
                              n.current.timeout &&
                                clearTimeout(n.current.timeout),
                              (n.current.timeout = setTimeout(
                                o(
                                  regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                delete n.current.timeout,
                                                (e.prev = 1),
                                                (e.t0 = n.current),
                                                (e.next = 5),
                                                a().apply(void 0, r)
                                              );
                                            case 5:
                                              (e.t1 = e.sent),
                                                e.t0.resolve.call(e.t0, e.t1),
                                                (e.next = 12);
                                              break;
                                            case 9:
                                              (e.prev = 9),
                                                (e.t2 = e.catch(1)),
                                                n.current.reject(e.t2);
                                            case 12:
                                              return (
                                                (e.prev = 12),
                                                delete n.current.promise,
                                                e.finish(12)
                                              );
                                            case 15:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[1, 9, 12, 15]]
                                    );
                                  })
                                ),
                                i()
                              )),
                              e.abrupt("return", n.current.promise)
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              [a, i]
            );
          }),
          (e.useBlockLayout = Wt),
          (e.useColumnOrder = Pt),
          (e.useExpanded = ce),
          (e.useFilters = Me),
          (e.useFlexLayout = jt),
          (e.useGetLatest = h),
          (e.useGlobalFilter = Pe),
          (e.useGridLayout = Qt),
          (e.useGroupBy = Fe),
          (e.useMountedLayoutEffect = w),
          (e.usePagination = Je),
          (e.useResizeColumns = Et),
          (e.useRowSelect = ft),
          (e.useRowState = Rt),
          (e.useSortBy = Ke),
          (e.useTable = function (e) {
            for (
              var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1;
              a < r;
              a++
            )
              o[a - 1] = arguments[a];
            (e = ae(e)), (o = [X].concat(o));
            var i = h(t.useRef({}).current);
            Object.assign(i(), n({}, e, { plugins: o, hooks: U() })),
              o.filter(Boolean).forEach(function (e) {
                e(i().hooks);
              });
            var c = h(i().hooks);
            (i().getHooks = c),
              delete i().hooks,
              Object.assign(i(), p(c().useOptions, ae(e)));
            var u = i(),
              l = u.data,
              d = u.columns,
              f = u.initialState,
              y = u.defaultColumn,
              v = u.getSubRows,
              w = u.getRowId,
              z = u.stateReducer,
              C = u.useControlledState,
              P = h(z),
              x = t.useCallback(
                function (e, t) {
                  if (!t.type)
                    throw (
                      (console.info({ action: t }),
                      new Error("Unknown Action \ud83d\udc46"))
                    );
                  return []
                    .concat(c().stateReducers, Array.isArray(P()) ? P() : [P()])
                    .reduce(function (r, o) {
                      return o(r, t, e, i()) || r;
                    }, e);
                },
                [c, P, i]
              ),
              N = t.useReducer(x, void 0, function () {
                return x(f, { type: s.init });
              }),
              B = N[0],
              E = N[1],
              I = p([].concat(c().useControlledState, [C]), B, {
                instance: i(),
              });
            Object.assign(i(), { state: I, dispatch: E });
            var D = t.useMemo(function () {
              return A(p(c().columns, d, { instance: i() }));
            }, [c, i, d].concat(p(c().columnsDeps, [], { instance: i() })));
            i().columns = D;
            var F = t.useMemo(function () {
              return p(c().allColumns, b(D), { instance: i() }).map(R);
            }, [D, c, i].concat(p(c().allColumnsDeps, [], { instance: i() })));
            i().allColumns = F;
            var _ = t.useMemo(
                function () {
                  for (
                    var e = [], t = [], r = {}, o = [].concat(F);
                    o.length;

                  ) {
                    var n = o.shift();
                    se({
                      data: l,
                      rows: e,
                      flatRows: t,
                      rowsById: r,
                      column: n,
                      getRowId: w,
                      getSubRows: v,
                      accessValueHooks: c().accessValue,
                      getInstance: i,
                    });
                  }
                  return [e, t, r];
                },
                [F, l, w, v, c, i]
              ),
              G = _[0],
              H = _[1],
              T = _[2];
            Object.assign(i(), {
              rows: G,
              initialRows: [].concat(G),
              flatRows: H,
              rowsById: T,
            }),
              g(c().useInstanceAfterData, i());
            var O = t.useMemo(function () {
              return p(c().visibleColumns, F, { instance: i() }).map(function (
                e
              ) {
                return M(e, y);
              });
            }, [c, F, i, y].concat(
              p(c().visibleColumnsDeps, [], { instance: i() })
            ));
            (F = t.useMemo(
              function () {
                var e = [].concat(O);
                return (
                  F.forEach(function (t) {
                    e.find(function (e) {
                      return e.id === t.id;
                    }) || e.push(t);
                  }),
                  e
                );
              },
              [F, O]
            )),
              (i().allColumns = F);
            var L = t.useMemo(function () {
              return p(c().headerGroups, k(O, y), i());
            }, [c, O, y, i].concat(
              p(c().headerGroupsDeps, [], { instance: i() })
            ));
            i().headerGroups = L;
            var W = t.useMemo(
              function () {
                return L.length ? L[0].headers : [];
              },
              [L]
            );
            (i().headers = W),
              (i().flatHeaders = L.reduce(function (e, t) {
                return [].concat(e, t.headers);
              }, [])),
              g(c().useInstanceBeforeDimensions, i());
            var j = O.filter(function (e) {
              return e.isVisible;
            })
              .map(function (e) {
                return e.id;
              })
              .sort()
              .join("_");
            (O = t.useMemo(
              function () {
                return O.filter(function (e) {
                  return e.isVisible;
                });
              },
              [O, j]
            )),
              (i().visibleColumns = O);
            var V = ie(W),
              q = V[0],
              K = V[1],
              Q = V[2];
            return (
              (i().totalColumnsMinWidth = q),
              (i().totalColumnsWidth = K),
              (i().totalColumnsMaxWidth = Q),
              g(c().useInstance, i()),
              [].concat(i().flatHeaders, i().allColumns).forEach(function (e) {
                (e.render = S(i(), e)),
                  (e.getHeaderProps = m(c().getHeaderProps, {
                    instance: i(),
                    column: e,
                  })),
                  (e.getFooterProps = m(c().getFooterProps, {
                    instance: i(),
                    column: e,
                  }));
              }),
              (i().headerGroups = t.useMemo(
                function () {
                  return L.filter(function (e, t) {
                    return (
                      (e.headers = e.headers.filter(function (e) {
                        return e.headers
                          ? (function e(t) {
                              return t.filter(function (t) {
                                return t.headers ? e(t.headers) : t.isVisible;
                              }).length;
                            })(e.headers)
                          : e.isVisible;
                      })),
                      !!e.headers.length &&
                        ((e.getHeaderGroupProps = m(c().getHeaderGroupProps, {
                          instance: i(),
                          headerGroup: e,
                          index: t,
                        })),
                        (e.getFooterGroupProps = m(c().getFooterGroupProps, {
                          instance: i(),
                          headerGroup: e,
                          index: t,
                        })),
                        !0)
                    );
                  });
                },
                [L, i, c]
              )),
              (i().footerGroups = [].concat(i().headerGroups).reverse()),
              (i().prepareRow = t.useCallback(
                function (e) {
                  (e.getRowProps = m(c().getRowProps, {
                    instance: i(),
                    row: e,
                  })),
                    (e.allCells = F.map(function (t) {
                      var r = e.values[t.id],
                        o = { column: t, row: e, value: r };
                      return (
                        (o.getCellProps = m(c().getCellProps, {
                          instance: i(),
                          cell: o,
                        })),
                        (o.render = S(i(), t, { row: e, cell: o, value: r })),
                        o
                      );
                    })),
                    (e.cells = O.map(function (t) {
                      return e.allCells.find(function (e) {
                        return e.column.id === t.id;
                      });
                    })),
                    g(c().prepareRow, e, { instance: i() });
                },
                [c, i, F, O]
              )),
              (i().getTableProps = m(c().getTableProps, { instance: i() })),
              (i().getTableBodyProps = m(c().getTableBodyProps, {
                instance: i(),
              })),
              g(c().useFinalInstance, i()),
              i()
            );
          }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, r(7294));
    },
    9521: (e, t, r) => {
      e.exports = r(217);
    },
    5666: (e) => {
      var t = (function (e) {
        "use strict";
        var t,
          r = Object.prototype,
          o = r.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function u(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (I) {
          u = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function l(e, t, r, o) {
          var a = t && t.prototype instanceof h ? t : h,
            i = Object.create(a.prototype),
            s = new N(o || []);
          return n(i, "_invoke", { value: k(e, r, s) }), i;
        }
        function d(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (I) {
            return { type: "throw", arg: I };
          }
        }
        e.wrap = l;
        var m = "suspendedStart",
          p = "suspendedYield",
          g = "executing",
          f = "completed",
          y = {};
        function h() {}
        function v() {}
        function w() {}
        var S = {};
        u(S, i, function () {
          return this;
        });
        var z = Object.getPrototypeOf,
          A = z && z(z(B([])));
        A && A !== r && o.call(A, i) && (S = A);
        var b = (w.prototype = h.prototype = Object.create(S));
        function R(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function M(e, t) {
          function r(n, a, i, s) {
            var c = d(e[n], e, a);
            if ("throw" !== c.type) {
              var u = c.arg,
                l = u.value;
              return l && "object" == typeof l && o.call(l, "__await")
                ? t.resolve(l.__await).then(
                    function (e) {
                      r("next", e, i, s);
                    },
                    function (e) {
                      r("throw", e, i, s);
                    }
                  )
                : t.resolve(l).then(
                    function (e) {
                      (u.value = e), i(u);
                    },
                    function (e) {
                      return r("throw", e, i, s);
                    }
                  );
            }
            s(c.arg);
          }
          var a;
          n(this, "_invoke", {
            value: function (e, o) {
              function n() {
                return new t(function (t, n) {
                  r(e, o, t, n);
                });
              }
              return (a = a ? a.then(n, n) : n());
            },
          });
        }
        function k(e, t, r) {
          var o = m;
          return function (n, a) {
            if (o === g) throw new Error("Generator is already running");
            if (o === f) {
              if ("throw" === n) throw a;
              return E();
            }
            for (r.method = n, r.arg = a; ; ) {
              var i = r.delegate;
              if (i) {
                var s = C(i, r);
                if (s) {
                  if (s === y) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === m) throw ((o = f), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = g;
              var c = d(e, t, r);
              if ("normal" === c.type) {
                if (((o = r.done ? f : p), c.arg === y)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((o = f), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function C(e, r) {
          var o = r.method,
            n = e.iterator[o];
          if (n === t)
            return (
              (r.delegate = null),
              ("throw" === o &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                C(e, r),
                "throw" === r.method)) ||
                ("return" !== o &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + o + "' method"
                  )))),
              y
            );
          var a = d(n, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), y
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                y)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              y);
        }
        function P(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(P, this),
            this.reset(!0);
        }
        function B(e) {
          if (e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function r() {
                  for (; ++n < e.length; )
                    if (o.call(e, n)) return (r.value = e[n]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: t, done: !0 };
        }
        return (
          (v.prototype = w),
          n(b, "constructor", { value: w, configurable: !0 }),
          n(w, "constructor", { value: v, configurable: !0 }),
          (v.displayName = u(w, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, w)
                : ((e.__proto__ = w), u(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          R(M.prototype),
          u(M.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = M),
          (e.async = function (t, r, o, n, a) {
            void 0 === a && (a = Promise);
            var i = new M(l(t, r, o, n), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          R(b),
          u(b, c, "Generator"),
          u(b, i, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var o in t) r.push(o);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var o = r.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = B),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    o.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function n(o, n) {
                return (
                  (s.type = "throw"),
                  (s.arg = e),
                  (r.next = o),
                  n && ((r.method = "next"), (r.arg = t)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var c = o.call(i, "catchLoc"),
                    u = o.call(i, "finallyLoc");
                  if (c && u) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (
                  n.tryLoc <= this.prev &&
                  o.call(n, "finallyLoc") &&
                  this.prev < n.finallyLoc
                ) {
                  var a = n;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), y)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                y
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), x(r), y;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var o = r.completion;
                  if ("throw" === o.type) {
                    var n = o.arg;
                    x(r);
                  }
                  return n;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, o) {
              return (
                (this.delegate = { iterator: B(e), resultName: r, nextLoc: o }),
                "next" === this.method && (this.arg = t),
                y
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = t;
      } catch (r) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = t)
          : Function("r", "regeneratorRuntime = r")(t);
      }
    },
  },
]);
