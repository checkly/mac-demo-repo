import { test, expect } from '@playwright/test';
// import defaults from './defaults'

test('Mac Demo Home', async ({ page }) => {
  const response = await page.goto('https://mac-demo-repo.vercel.app')
  expect(response.status()).toBeLessThan(400)
  expect(page).toHaveTitle(/Next/)
  await page.screenshot({ path: 'homepage.jpg' })
})
