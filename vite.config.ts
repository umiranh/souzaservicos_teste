import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Nitro's Vercel preset emits to `.vercel/output/` (Vercel Build Output API v3).
// The Lovable wrapper otherwise forces `dist/` which Vercel won't auto-detect,
// causing a 404 on the deployed site even though the build succeeds.
export default defineConfig({
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
      publicDir: ".vercel/output/static",
      serverDir: ".vercel/output/functions/__nitro.func",
    },
  },
});
