const { test, expect } = require('@playwright/test');

test('Privacy Policy link in modal leads to correct page', async ({ page }) => {
  // Go to the page that contains the privacy modal
  await page.goto('http://localhost:3000');

  // Click on the Agree button in the privacy modal
  await page.click('#agreeButton');

  // Verify that the privacy policy link is present in the modal body
  const privacyPolicyLink = await page.$('a[href="privacy.html"]');
  expect(privacyPolicyLink).toBeTruthy();

  // Click on the privacy policy link and wait for the page to load
  await Promise.all([
    page.waitForNavigation(),
    privacyPolicyLink.click(),
  ]);

  // Verify that the current page is the privacy policy page
  expect(page.url()).toBe('http://localhost:3000/privacy.html');
});












