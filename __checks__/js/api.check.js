const { constructs } = require('@checkly/cli')
const { ApiCheck } = constructs
const { defaults } = require('./defaults')

new ApiCheck('hello-api', {
  name: 'Hello API',
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
