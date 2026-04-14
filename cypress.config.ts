import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
