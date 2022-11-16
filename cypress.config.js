const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://bolitj01.github.io/contact-list-react',
    experimentalStudio: true
  }
})