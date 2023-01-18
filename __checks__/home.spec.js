const { test, expect } = require('@playwright/test')
const { defaults } = require('./defaults')

test('Mac Demo Home', async ({ page }) => {
  console.log(`Using pageUrl: ${defaults.pageUrl}`)
  const response = await page.goto(defaults.pageUrl)
  expect(response.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/MaC/)
  await page.screenshot({ path: 'homepage.jpg' })
})
