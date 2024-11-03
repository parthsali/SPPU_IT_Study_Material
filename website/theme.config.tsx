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
        content="LearnVerse offers comprehensive study materials for Savitribai Phule Pune University IT students, helping them excel in their studies."
      />
      <meta
        name="keywords"
        content="LearnVerse, SPPU, IT Study Hub, study materials, SPPU IT, educational resources, SPPU IT study materials GitHub, SE Study Materials, TE Study Materials, BE Study Materials"
      />

      <meta name="language" content="English" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LearnVerse" />
      <meta
        property="og:description"
        content="LearnVerse offers comprehensive study materials for Savitribai Phule Pune University IT students, helping them excel in their studies."
      />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://learnverse.live" />

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
  banner: {
    key: "whatsapp-community",
    dismissible: false,
    text: (
      <>
        <a
          href="https://chat.whatsapp.com/HDIaRQ0JcT9AbQAbUinKif"
          target="_blank"
        >
          📢 Join our SPPU IT WhatsApp Community!
        </a>
      </>
    ),
  },
};

export default config;
