import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/lit-code-editor/",
  build: {
    lib: {
      entry: "src/code-editor.ts",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
