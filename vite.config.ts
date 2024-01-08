import { defineConfig } from "vite";

// https://vitejs.dev/config/
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
});
