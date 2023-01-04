const { ApiCheck } = require('@checkly/cli/constructs')
const { defaults } = require('./defaults')
const path = require('path')
const { readFileSync } = require('fs')


new ApiCheck('hello-api-1', {
  name: 'Hello API',
  onSetup: async ({ request }) => {
    request.headers['X-something'] = 'TOKEN'
    return { request }
  },
  localSetupScript: readFileSync(path.join(__dirname, 'setup.js'), 'utf-8'),
  localTearDownScript: readFileSync(path.join(__dirname, 'teardown.js'), 'utf-8'),
  request: {
    method: 'GET',
    url: `${defaults.pageUrl}/api/hello`,
    skipSsl: false,
    followRedirects: true,
    assertions: [
      { source: 'STATUS_CODE', regex: '', property: '', comparison: 'EQUALS', target: '200' },
      { source: 'JSON_BODY', regex: '', property: '$.name', comparison: 'NOT_EMPTY', target: '' }
    ]
  }
})
