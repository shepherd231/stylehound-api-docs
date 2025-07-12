import path from "path";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Redocusaurus from "redocusaurus";

const versions = {
  current: { label: "Canary 🚧" },
  "0.0.1": { label: "Alpha" },
};

const config: Config = {
  title: "Stylehound API Docs",
  tagline: "Stylehound API Documentation: Guides, API References, and More",
  customFields: {
    meta: {
      description: "Integrate Stylehound API easily into your applications.",
    },
  },
  url: process.env.DEPLOY_PRIME_URL || "http://localhost:5000", // Your website URL
  baseUrl: process.env.DEPLOY_BASE_URL || "/", // Base URL for your project */
  favicon:
    "https://www.stylehound.xyz/wp-content/uploads/2025/03/cropped-자산-2@1x-1-32x32.png",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        theme: { customCss: [require.resolve("./src/global.css")] },
        docs: {
          path: "docs",
          routeBasePath: "guides",
          editUrl:
            "https://github.com/shepherd231/stylehound-api-docs/edit/main/",
          versions,
        },
      } satisfies Preset.Options,
    ],
    [
      "redocusaurus",
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        config: path.join(__dirname, "redocly.yaml"),
        theme: {
          /**
           * Highlight color for docs
           */
          primaryColor: "rgb(122, 74, 142)",
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],
  themeConfig: {
    announcementBar: {
      id: "announcement",
      content:
        "🚧 <strong>Stylehound API is in development. Please check back later for updates.</strong> 🚧",
      backgroundColor: "#f0f0f0", // Default background color
      textColor: "#000", // Default text color
      isCloseable: false, // Disallow closing the announcement bar
    },
    navbar: {
      logo: {
        alt: "Stylehound",
        src: "https://www.stylehound.xyz/wp-content/uploads/2025/03/cropped-%EC%9E%90%EC%82%B0-2@1x-1-192x192.png",
        style: {
          marginRight: "4px",
        },
      },
      title: "StyleHound",
      items: [
        {
          position: "left",
          label: "Guides",
          to: `
            /guides
            {{#if slug}}
              /{{slug}}
            {{/if}}
            /home
          `,
        },
        {
          position: "left",
          label: "API Reference",
          to: `
            /api
            {{#if slug}}
              /{{slug}}
            {{/if}}
            /docs
          `,
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          versions,
          className: "version-indicator",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/shepherd231/stylehound-api-docs",
          position: "right",
          className: "header-github-logo",
          "aria-label": "GitHub Repo",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About Us",
          items: [
            {
              label: "Shepherd23",
              href: "https://shepherd23.com",
            },
            {
              label: "Stylehound",
              href: "https://stylehound.xyz",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "shepherd23corp@gmail.com",
              href: "mailto:shepherd23corp@gmail.com",
            },
          ],
        },
      ],
      copyright: `
        © ${new Date().getFullYear()} Stylehound. Built with Docusaurus.
      `,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
