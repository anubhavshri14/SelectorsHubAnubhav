import { test, expect } from '@playwright/test'
test("Dummy Form Fill", async ({ page }) => {
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.getByPlaceholder("Enter email").fill("anubhav.shri14@gmail.com")
})