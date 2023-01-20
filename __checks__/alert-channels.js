const {
  SmsAlertChannel,
  EmailAlertChannel,
  WebhookAlertChannel,
  SlackAlertChannel,
  OpsgenieAlertChannel,
  PagerdutyAlertChannel,
} = require('@checkly/cli/constructs')

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
}

const smsChannel = new SmsAlertChannel('sms-channel-1', {
  phoneNumber: '0031061234567890',
  ...sendDefaults
})

const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'alerts@acme.com',
  ...sendDefaults
})

const slackChannel = new SlackAlertChannel('slack-channel-1', {
  name: 'Slack channel',
  url: 'https://hooks.slack.com/services/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',
  channel: '#ops'

})

const webhookChannel = new WebhookAlertChannel('webhook-channel-1', {
  name: 'Pushover webhook',
  method: 'POST',
  url: 'https://webhook.site/ddead495-8b15-4b0d-a25d-f6cda4144dc7',
  template: `{
    "token":"FILL_IN_YOUR_SECRET_TOKEN_FROM_PUSHOVER",
    "user":"FILL_IN_YOUR_USER_FROM_PUSHOVER",
    "title":"{{ALERT_TITLE}}",
    "html":1,
    "priority":2,
    "retry":30,
    "expire":10800,
    "message":"{{ALERT_TYPE}} {{STARTED_AT}} ({{RESPONSE_TIME}}ms) {{RESULT_LINK}}"
  }`
})

const opsGenieChannel = new OpsgenieAlertChannel('opsgenie-channel-1', {
  name: 'My Ops Team',
  region: 'EU',
  priority: 'P1',
  apiKey: 'xxxx123abc'
})

const pagerdutyChannel = new PagerdutyAlertChannel('pagerduty-channel-1', {
  account: 'ACME',
  serviceName: 'ACME products',
  serviceKey: '872b9b58ff4a9n06d0dl9f20487bbqwew'
})


module.exports = {
  smsChannel,
  emailChannel,
  webhookChannel,
  slackChannel,
  opsGenieChannel,
  pagerdutyChannel
}
