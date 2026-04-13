import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'http://localhost:5173/Portfolio/',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
