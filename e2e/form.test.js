import puppeteer from 'puppeteer';

describe('Card Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitFor('.card-form-widget');
  });

  test('Form input should add .valid class if card number is valid', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitFor('.card-form-widget');

    const form = await page.$('.card-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('2200150223920999');
    await submit.click();

    await page.waitFor('.card-form-widget .input.valid');
  });

  test('Form input should add .invalid class if card number is invalid', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    await page.waitFor('.card-form-widget');

    const form = await page.$('.card-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('2200150223920998');
    await submit.click();

    await page.waitFor('.card-form-widget .input.invalid');
  });

  afterEach(async () => {
    await browser.close();
  });
});
