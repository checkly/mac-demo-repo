const { ApiCheck } = require('@checkly/cli/constructs')
const { defaults } = require('./defaults')
const path = require('path')
const { readFileSync } = require('fs')
const { smsChannel, emailChannel } = require('./alert-channels')

new ApiCheck('hello-api-1', {
  name: 'Hello API',
  localSetupScript: readFileSync(path.join(__dirname, 'setup.js'), 'utf-8'),
  localTearDownScript: readFileSync(path.join(__dirname, 'teardown.js'), 'utf-8'),
  alertChannels: [smsChannel, emailChannel],
  request: {
    method: 'GET',
    url: `${defaults.pageUrl}/api/hello`,
    skipSsl: false,
    followRedirects: true,
    assertions: [
      { source: 'STATUS_CODE', regex: '', property: '', comparison: 'EQUALS', target: '201' },
      { source: 'JSON_BODY', regex: '', property: '$.name', comparison: 'NOT_EMPTY', target: '' }
    ]
  }
})
