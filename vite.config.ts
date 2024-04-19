import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      polyfills: true,
      additionalLegacyPolyfills: ["core-js/modules/es.symbol.js"],
      // for ie11
      targets: ["ie >= 11"],
    }),
  ],
});
