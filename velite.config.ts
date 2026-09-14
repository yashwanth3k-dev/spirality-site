import { defineConfig, s } from "velite";

// Kept so `pnpm build:content` still succeeds. ChadNext changelog/about
// collections were removed with those unused pages.
export default defineConfig({
  root: "./src/content",
  collections: {
    notes: {
      name: "Note",
      pattern: "notes/**/*.md",
      schema: s.object({
        title: s.string().default("placeholder"),
        content: s.markdown(),
      }),
    },
  },
});
