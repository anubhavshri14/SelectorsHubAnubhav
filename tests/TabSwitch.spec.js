import { test, expect } from '@playwright/test'

test("Tab switch", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.locator("https://selectorshub.com/xpath-practice-page/")

    const [youtubePage] = Promise.all([
        
    ])
})