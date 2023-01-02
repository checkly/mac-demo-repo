import { ApiCheck } from '@checkly/cli/dist/constructs'
import defaults from './defaults'

const api : ApiCheck = new ApiCheck('hello-api', {
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
