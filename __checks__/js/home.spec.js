const { test, expect } = require('@playwright/test')
const { defaults } = require('./defaults')
test('Mac Demo Home', async ({ page }) => {
  const response = await page.goto(defaults.pageUrl)
  expect(response.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/Next/)
  await page.screenshot({ path: 'homepage.jpg' })
})
