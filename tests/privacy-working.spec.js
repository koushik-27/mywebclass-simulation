const { test, expect } = require('@playwright/test');

test('Privacy Policy modal test', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Check that the Privacy Policy modal appears
  const privacyModalExists = await page.$('#privacyModal');
  expect(privacyModalExists).toBeTruthy();

  // Click the Disagree button
  await page.click('#privacyModal .modal-footer .btn-secondary');

  // Wait for the Privacy Policy modal to disappear
  await page.waitForSelector('#privacyModal', { state: 'hidden' });

  // Check that the Privacy Policy modal is hidden
  const privacyModalHidden = await page.isHidden('#privacyModal', { timeout: 5000 });
  expect(privacyModalHidden).toBeTruthy();

  // Reload the page to start fresh
  await page.reload();

  // Check that the Privacy Policy modal appears again
  const privacyModalExists2 = await page.$('#privacyModal');
  expect(privacyModalExists2).toBeTruthy();

  // Click the Agree button
  await page.click('#agreeButton');

  // Wait for the Privacy Policy modal to disappear
  await page.waitForSelector('#privacyModal', { state: 'hidden' });

  // Check that the Privacy Policy modal is hidden
  const privacyModalHidden2 = await page.isHidden('#privacyModal', { timeout: 5000 });
  expect(privacyModalHidden2).toBeTruthy();

});







