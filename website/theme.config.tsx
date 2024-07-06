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
      <img src="/logo.png" alt="logo" width="30" height="30" />
      <span style={{ marginLeft: "10px", fontSize: "20px" }}>
        SPPU IT Study Hub
      </span>
    </div>
  ),
  project: {
    link: "https://github.com/parthsali/SPPU_IT_Study_Material",
  },
  docsRepositoryBase:
    "https://github.com/parthsali/SPPU_IT_Study_Hub/tree/main/website",
  footer: {
    component: Footer,
  },
  head: (
    <>
      <meta title="SPPU IT Study Hub" />
      <meta
        name="description"
        content="SPPU IT Study Hub is a collection of study material for SPPU IT students."
      />
      <link rel="icon" href="./logo.png" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – SPPU IT Study Hub",
    };
  },
  sidebar: {
    toggleButton: true,
  },
};

export default config;
