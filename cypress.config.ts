import { defineConfig } from 'cypress'
import cypressSplit from 'cypress-split'

const setupNodeEvents = (cypressOn, config) => {
  cypressSplit(cypressOn, config)
  // IMPORTANT: return the config object
  return config
}
module.exports = defineConfig({
  e2e: {
    // // baseUrl, etc
    // baseUrl: 'http://localhost:3000',
    // supportFile: false,
    // fixturesFolder: false,
    // video: false,
    // setupNodeEvents(on, config) {
    //   cypressSplit(on, config)
    //   // IMPORTANT: return the config object
    //   return config
    // },
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,
    // reporter: 'mochawesome',
    // reporterOptions: {
    //   html: true,
    //   json: true,
    //   overwrite: false,
    //   quiet: true,
    //   reportDir: 'cypress/reports',
    //   reportFilename: 'mocha-report',
    //   reportTitle: 'Merchant Portal - Cypress tests result',
    //   toConsole: true,
    // },
    specPattern: 'cypress/**/*.cy.js',
    setupNodeEvents,
    // supportFile: 'cypress/support/e2e.ts',
    supportFile: false,
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    blockHosts: ['www.google-analytics.com', 'www.googletagmanager.com'],
  },
})
