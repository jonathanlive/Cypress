const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h6j2it',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
  responseTimeout: 10000,
  defaultCommandTimeout: 10000,
  env: {
    
    SeleniumPracticeUrl: "https://rahulshettyacademy.com/seleniumPractise/#/"
  }
});
