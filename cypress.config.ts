import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://mkytomies.github.io/Portfolio/',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
