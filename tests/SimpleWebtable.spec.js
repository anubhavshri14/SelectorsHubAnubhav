import {test,expect} from '@playwright/test'
test("Handling simple webtable",async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    const table = page.locator("//table[@id='resultTable']");
    const tableHeader = table.locator('thead');
    const numOfCols = tableHeader.locator('tr th');
    console.log(await numOfCols.count());
})