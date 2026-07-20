import { test, expect } from '@playwright/test'
test("Dummy Form Fill", async ({ page }) => {
    test.slow()
    await page.goto("https://selectorshub.com/xpath-practice-page/"/*,{waitUntil:'domcontentloaded'}*/);
    await page.locator("//input[@placeholder='Enter email']").fill("anubhav.shri14@gmail.com");
    await page.locator("//input[@name='Password']").fill("abcdefgh")
})