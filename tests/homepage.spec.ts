import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('homepage', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});
	test('page has title', async ({ page }) => {
		await expect(page).toHaveTitle(/Pat McGhen | Full Stack Developer/);
	});

	test('should not have automatically detectable accessibility issues', async ({ page }) => {
		const accessibilityScanResults = await new AxeBuilder({page}).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});

