import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: 2,
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
    html: true,
    json: true,
    reportDir: 'reports'
  },
  videoCompression: false,
  video: true,
  defaultCommandTimeout: 30000,
  e2e: {
    baseUrl: 'https://www.amazon.com/',
    watchForFileChanges: false,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
