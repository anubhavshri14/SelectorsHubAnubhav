import { test, expect } from '@playwright/test'
test("Youtube Page Automation",
    async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://selectorshub.com/xpath-practice-page/");
        const [YoutubePage] = await Promise.all([
            context.waitForEvent('page'),
            page.locator("(//div[@class='userform']//a)[2]").click()
        ])
        await page.waitForTimeout(5000);
    }
)