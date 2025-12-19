// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Physical AI & Humanoid Robotics",
  tagline: "A Comprehensive Textbook for the Future of Robotics",
  favicon: "img/favicon.ico",
  url: "https://physical-ai-textbook.vercel.app",
  baseUrl: "/",
  organizationName: "HassaanFisky",
  projectName: "Physical-AI-Humanoid-Robots-Textbook",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/HassaanFisky/Physical-AI-Humanoid-Robots-Textbook/tree/main/submissions/textbook-variant/book-site/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",
      navbar: {
        title: "Physical AI Textbook",
        logo: {
          alt: "Physical AI Logo",
          src: "img/dino.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Chapters",
          },
          {
            href: "https://github.com/HassaanFisky/Physical-AI-Humanoid-Robots-Textbook",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Textbook",
            items: [
              {
                label: "M1: Foundations",
                to: "/docs/module-01-foundations/what-is-physical-ai",
              },
              {
                label: "M2: Hardware",
                to: "/docs/module-02-hardware/kinematics-dynamics",
              },
              {
                label: "M3: Software",
                to: "/docs/module-03-software/ros2-concepts",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "AI Chatbot",
                to: "/chat",
              },
              {
                label: "GIAIC Hackathon",
                href: "https://giaic.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/HassaanFisky/Physical-AI-Humanoid-Robots-Textbook",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GIAIC Hackathon (HassaanFisky). Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
