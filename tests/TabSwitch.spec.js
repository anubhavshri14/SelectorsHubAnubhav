import { test, expect } from '@playwright/test'

test("Tab switch", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://selectorshub.com/xpath-practice-page/")

    const [DownloadLinkPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator("//a[text()='DownLoad Link']").click()
        
    ])
})