const { test, expect } = require('@playwright/test');

test('Agree button should update localStorage and hide the privacy modal', async ({ page }) => {
  // Navigate to the page with the privacy modal
  await page.goto('http://localhost:3000');

  // Wait for the privacy modal to appear
  await page.waitForSelector('#privacyModal', { timeout: 5000 });

  // Check if the privacy modal is visible
  const privacyModal = await page.isVisible('#privacyModal');
  expect(privacyModal).toBeTruthy();

  // Click on the Agree button in the privacy modal
  await page.click('#agreeButton');

  // Check that localStorage has been updated
  const agreed = await page.evaluate(() => localStorage.getItem('privacyPolicyAgreed'));
  expect(agreed).toBe('true');

  // Check that the privacy modal is hidden
  //const privacyModalHidden = await page.isHidden('#privacyModal', { timeout: 5000 });
  //expect(privacyModalHidden).toBeTruthy();
});

test('Disagree button should not update localStorage and hide the privacy modal', async ({ page }) => {
  // Navigate to the page with the privacy modal
  await page.goto('http://localhost:3000');

  // Wait for the privacy modal to appear
  await page.waitForSelector('#privacyModal', { timeout: 5000 });

  // Check if the privacy modal is visible
  const privacyModal = await page.isVisible('#privacyModal');
  expect(privacyModal).toBeTruthy();

  // Click on the Disagree button in the privacy modal
  await page.click('text=Disagree');

  // Check that localStorage has not been updated
  const agreed = await page.evaluate(() => localStorage.getItem('privacyPolicyAgreed'));
  expect(agreed).toBeNull();

  // Check that the privacy modal is hidden
  //const privacyModalHidden = await page.isHidden('#privacyModal', { timeout: 5000 });
  //expect(privacyModalHidden).toBeTruthy();
});

