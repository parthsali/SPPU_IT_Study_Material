import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Footer from "./components/Footer";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <img src="/logo.png" alt="LearnVerse Logo" width="30" height="30" />
      <span style={{ marginLeft: "10px", fontSize: "20px" }}>LearnVerse</span>
    </div>
  ),
  project: {
    link: "https://github.com/parthsali/SPPU_IT_Study_Material",
  },
  docsRepositoryBase:
    "https://github.com/parthsali/SPPU_IT_Study_Material/tree/main/website",
  footer: {
    component: Footer,
  },
  head: (
    <>
      <meta title="LearnVerse" />
      <meta
        name="description"
        content="LearvVerse offers comprehensive study materials for Savitribai Phule Pune University IT students, helping them excel in their studies."
      />
      <meta
        name="keywords"
        content="LearnVerse, SPPU, IT Study Hub, study materials, SPPU IT, educational resources"
      />
      <meta name="author" content="Parth Sali" />
      <link rel="icon" href="./logo.png" />
      <link rel="canonical" href="https://learnverse.live" />
      <meta property="og:title" content="LearnVerse" />

      {/* Add your actual website URL */}
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – LearnVerse",
    };
  },
  darkMode: true,
  sidebar: {
    toggleButton: true,
  },
};

export default config;
