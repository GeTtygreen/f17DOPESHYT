
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('that draw button displaysthe div with id =choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw '))

    await driver.sleep(3000)

    await drawBtn.click()

    
    const choiceSection = await driver.findElement(By.id('choices'))
    
    const isDisplayed = await choiceSection.isDisplayed();
    
    await driver.sleep(3000)

    expect(isDisplayed).toBe(true)
})

test('"Add to Duo"button display the id ="player-id"',async () => {
    await driver.navigate().refresh();

    const drawBtn = await driver.findElement(By.id('draw'));

    await driver.sleep(3000)
    await drawBtn.click();
    
    const  addToDuoBtns = await driver.findElements(By.xpath('//button[text()="Add to Duo"]'));
    
    await driver.sleep(3000)
    await addToDuoBtns[1].click();
    await driver.sleep(3000)

    const isDisplayed = await driver.findElement(By.id('player-duo'))

    expect(isDisplayed).toBe(false)

})