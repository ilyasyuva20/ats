import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
    console.log("Starting browser...");
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' });
    const page = await context.newPage();

    console.log("Navigating to URL...");
    await page.goto("https://www.google.com/search?q=arrokutty+taxi+serivce&sca_esv=aa86132b60f0534c&sxsrf=ANbL-n5UHPA0YEel3Wxjzyj4rPIWK9N7uQ%3A1772022910256&ei=fuyeaZ2sD8aUseMPkeDRsA4&biw=1300&bih=649&oq=arroku&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmFycm9rdSoCCAAyBBAjGCcyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIHEC4YgAQYCjIFEAAYgAQyBRAAGIAEMgUQABiABEiMFVAAWIUIcAB4AZABAJgBwgKgAa8JqgEHMC40LjEuMbgBA8gBAPgBAZgCBqACuwrCAgoQIxiABBgnGIoFwgIKEAAYgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIQEAAYgAQYsQMYQxiDARiKBcICBRAuGIAEwgIIEC4YgAQYsQPCAggQABiABBixA8ICCxAAGIAEGJECGIoFwgINEC4YgAQYsQMYQxiKBcICDRAAGIAEGLEDGEMYigXCAg4QABiABBiRAhixAxiKBcICEBAuGIAEGLEDGEMYyQMYigWYAwCSBwcwLjMuMi4xoAeyaLIHBzAuMy4yLjG4B7sKwgcFMy00LjLIB2-ACAA&sclient=gws-wiz-serp#lrd=0x3b0871c27a0c0d5f:0x22def7090d66dd9c,1,,,,", { waitUntil: 'domcontentloaded', timeout: 60000 });

    console.log("Saving screenshot and HTML for debug...");
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'debug.png' });
    const html = await page.content();
    fs.writeFileSync('debug.html', html);

    // Cookie consent Reject all if present
    const rejectBtn = await page.$('button:has-text("Reject all")');
    if (rejectBtn) {
        console.log("Clicking reject all cookies...");
        await rejectBtn.click();
        await page.waitForTimeout(3000);
    }

    // Try to trigger the review modal if it's not open
    const reviewsLink = await page.$('a[data-async-trigger="reviewDialog"]');
    if (reviewsLink) {
        console.log("Clicking reviews link manually...");
        await reviewsLink.click();
        await page.waitForTimeout(3000);
    }

    console.log("Waiting for reviews modal...");
    await page.waitForSelector('.gws-localreviews__google-review', { timeout: 10000 }).catch(() => console.log("Reviews modal wait timed out, proceeding anyway..."));

    console.log("Scrolling to load reviews...");
    // Find the scrollable container
    const scrollableDivSelector = '.review-dialog-list'; // Try to find the correct selector visually, this usually works for google full screen modals

    // We will evaluate a script in the browser to scroll the specific div that contains reviews
    let reviewElementsHandle = await page.$$('.gws-localreviews__google-review');

    // Try scrolling a few times
    let prevCount = 0;
    for (let i = 0; i < 30; i++) {
        const divs = await page.$$('div.YpcDvf'); // The class for the "More" button sometimes
        for (const div of divs) {
            await div.click().catch(() => true); // click 'more' if it exists to expand text
        }

        // Try to scroll the specific panel that has reviews
        await page.evaluate(() => {
            const reviewPanel = document.querySelector('.review-dialog-list');
            if (reviewPanel) reviewPanel.scrollTop = reviewPanel.scrollHeight;

            // alternative scroll down strategy
            const reviews = document.querySelectorAll('.gws-localreviews__google-review');
            if (reviews.length > 0) {
                reviews[reviews.length - 1].scrollIntoView();
            }
        });

        await page.waitForTimeout(1500); // wait for load
        reviewElementsHandle = await page.$$('.gws-localreviews__google-review');
        console.log(`Found ${reviewElementsHandle.length} reviews...`);
        if (reviewElementsHandle.length >= 48) {
            console.log("Reached target of 48 reviews!");
            break;
        }
        if (reviewElementsHandle.length === prevCount) {
            console.log("No new reviews loaded, continuing to try...");
        }
        prevCount = reviewElementsHandle.length;
    }

    console.log("Extracting review details...");

    const reviewsData = await page.evaluate(() => {
        const reviewEls = Array.from(document.querySelectorAll('.gws-localreviews__google-review'));
        console.log(reviewEls);
        return reviewEls.slice(0, 48).map((el, index) => {
            const nameEl = el.querySelector('.TSgbvc');
            const name = nameEl ? nameEl.textContent.trim() : "Unknown";

            const timeEl = el.querySelector('.dehysf');
            const role = timeEl ? timeEl.textContent.trim() : "";

            // The actual review text might be in full or truncated. Since we clicked 'More' hopefully it's full.
            const contentEl = el.querySelector('.Jtu6Td');
            let content = contentEl ? contentEl.textContent.trim() : "";

            // Sometimes it leaves "More" at the end of the text. Remove it if exists.
            if (content.endsWith('More')) {
                content = content.slice(0, -4).trim();
            }

            return {
                id: index + 1,
                name: name,
                role: role,
                content: content,
                rating: 5, // We'll assume 5 stars for now or hardcode it since it's hard to parse SVG stars accurately without complex logic
                image: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
            };
        });
    });

    console.log(`Extracted ${reviewsData.length} reviews.`);

    const fileContent = `export const reviewsData = ${JSON.stringify(reviewsData, null, 4)};\n`;
    fs.writeFileSync('src/data/reviewsData.js', fileContent);
    console.log("Successfully wrote to src/data/reviewsData.js");

    await browser.close();
})();
