import { doesNotReject } from "assert";

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/home');
  });

  it('should be titled "Books App"', async () => {
    await expect(page.title()).resolves.toMatch('Books App');
  });

  it('should produce a list of results on a search', async () => {
    await page.focus('input');
    await page.keyboard.type('Dogs');
    await page.click('button');

    page.waitForSelector('li');
  });
});
