import { Client } from "pg";
import { scrapData } from "./scraper";

export const filldb = async(client: Client): Promise<void> => {
    const { rows } = await client.query(`SELECT * FROM scraps`);
    if(rows.length === 0){
        const scrappedFreshData = await scrapData();
        scrappedFreshData.forEach(({name, img, price})=>{
            client.query(`INSERT INTO scraps(name, price, img) VALUES ('${name}','${price}', '${img}');`,(err, res) => {
                if (err) {
                    console.error(err);
                }
            })
        })
    }
}