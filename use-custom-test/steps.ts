import { createBdd, expect, test } from 'custom-test';

const { Given, When, Then } = createBdd(test);

Given('I open url {string}', async ({ page }, url) => {
  await page.goto(url);
});

When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});

Then('I see value A be {string}', async({ valueA }, v) => {
  expect(v).toBe(valueA);
});

Then('I see value B be {string}', async({ valueB }, v) => {
  expect(v).toBe(valueB);
});

Then('I see value C be {string}', async({ valueC }, v) => {
  expect(v).toBe(valueC);
});
