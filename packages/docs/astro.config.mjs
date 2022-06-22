import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), // Enable Preact to support Preact JSX components.
  preact(), // Enable React for the Algolia search component.
  react(), turbolinks()]
});