const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //viewportHeight: 550,
    //viewportWidth: 750,
    //baseUrl: 'https://docs.cypress.io/',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
