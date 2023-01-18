const { test, expect } = require('@playwright/test')
const { defaults } = require('../defaults')

test('Mac Demo Product Page', async ({ page }) => {
  const response = await page.goto(defaults.pageUrl)
  expect(response.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/MaC/)
  await page.screenshot({ path: 'about.jpg' })
})
