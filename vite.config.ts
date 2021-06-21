import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "Ring",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: "ring",
    },
    rollupOptions: {
      output: {
        exports: "default",
      },
    },
  },
  server: {
    open: true,
    strictPort: false,
  },
  plugins: [],
});
