import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://oscartorres.io",
  integrations: [tailwind()],
  redirects: {
    "/posts/[...slug]": "/blog/[...slug]"
  }
});
