const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost/users/sign_in',
  },
  fixturesFolder: false,
  video: false,
})
