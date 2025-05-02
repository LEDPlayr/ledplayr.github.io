import type { UserConfig } from "vite";

import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import { kitRoutes } from "vite-plugin-kit-routes";

const cfg: UserConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte",
    }),
    kitRoutes({
      post_update_run: "pnpm exec prettier -w ./src/lib/ROUTES.ts",
    }),
    tailwindcss(),
  ],
};

export default defineConfig(cfg);
