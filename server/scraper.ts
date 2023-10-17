import puppeteer from "puppeteer";

export type ScrapedData = {
    name: string;
    price: string;
    img: string;
}

const scrapedArr:ScrapedData[] = [];
export const scrapData = async (): Promise<ScrapedData[]> => {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
    });
    const page = await browser.newPage();

    await page.goto('https://www.sreality.cz/hledani/prodej/byty', {
        waitUntil: "domcontentloaded"
    });

    const scrap = async (): Promise<ScrapedData[]> => {
        await page.waitForSelector('.property')
            .then(() => true);

        return await page.evaluate(() => {
            const list = document.querySelectorAll(".property");
            return Array.from(list).map((quote: any, i: number) => {
                const name = quote.querySelector(".name").innerText;
                const price = quote.querySelector(".norm-price").innerText;
                const img = quote.querySelector("img").src;
                return { name, price, img };
            });
        });
    }

    // 20 items per page
    const numberOfPages = 25;
    for(let i = 0; i < numberOfPages; i++){
        const list = await scrap();
        scrapedArr.push(...list);
        await page.click(".paging-next");
    }

    await browser.close();
    return scrapedArr
};
