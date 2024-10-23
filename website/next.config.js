const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: {
    renderer: "katex",
    options: {
      macros: {
        "\\RR": "\\mathbb{R}",
      },
    },
  },
});

module.exports = withNextra();
