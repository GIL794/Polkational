import { test, expect } from '@playwright/test';

test('dashboard loads and displays title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Polkadot Educational Dashboard/);
  await expect(page.getByText('Polkadot Edu')).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Learn');
  await expect(page.url()).toContain('/learn');
  await expect(page.getByText('Learn Polkadot')).toBeVisible();
});
