// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://example.com", // update when domain is set — must match src/config/site.ts

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],

  markdown: {
    // Light theme keeps code blocks readable without a dark panel
    shikiConfig: {
      theme: "github-light",
      wrap: false,
    },
  },
});
