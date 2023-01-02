const path = require('path')
const { constructs } = require('@checkly/cli')
const { BrowserCheck } = constructs

/*
* Rather than create an automatic check for `search-service.spec.js`, we explicitly define a check here.
* This allows us to override the check configuration.
*/
new BrowserCheck('home-check-again', {
  name: 'HomePage again',
  code: {
    entrypoint: path.join(__dirname, 'home.spec.ts')
  },
})
