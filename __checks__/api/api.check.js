const { ApiCheck } = require('@checkly/cli/constructs')
const path = require('path')
const { readFileSync } = require('fs')
const { webhookChannel } = require('../alert-channels')
const { defaults } = require('../defaults')

new ApiCheck('hello-api-1', {
  name: 'Hello API',
  localSetupScript: readFileSync(path.join(__dirname, 'setup.js'), 'utf-8'),
  localTearDownScript: readFileSync(path.join(__dirname, 'teardown.js'), 'utf-8'),
  alertChannels: [webhookChannel],
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

new ApiCheck('product-api-2', {
  name: 'Product API',
  localSetupScript: readFileSync(path.join(__dirname, 'setup.js'), 'utf-8'),
  localTearDownScript: readFileSync(path.join(__dirname, 'teardown.js'), 'utf-8'),
  alertChannels: [webhookChannel],
  request: {
    method: 'GET',
    url: `${defaults.pageUrl}/api/products`,
    skipSsl: false,
    followRedirects: true,
    assertions: [
      { source: 'STATUS_CODE', regex: '', property: '', comparison: 'EQUALS', target: '200' },
      { source: 'JSON_BODY', regex: '', property: '$.length', comparison: 'GREATER_THAN', target: '0' },
      { source: 'JSON_BODY', regex: '', property: '$[0].name', comparison: 'NOT_EMPTY', target: '' }
    ]
  }
})

