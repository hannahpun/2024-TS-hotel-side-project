import { defineConfig } from "vite";

// https://vitejs.dev/config/
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "https://freyja-uj95.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
