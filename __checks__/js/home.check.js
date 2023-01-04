const path = require('path')
const { BrowserCheck } = require('@checkly/cli/constructs')

/*
* Rather than create an automatic check for `home.spec.js`, we explicitly define a check here.
* This allows us to override the check configuration.
*/
new BrowserCheck('home-check-1', {
  name: 'HomePage',
  frequency: 15,
  regions: ['ap-south-1', 'us-west-2'],
  code: {
    entrypoint: path.join(__dirname, 'home.spec.js')
  },
})
