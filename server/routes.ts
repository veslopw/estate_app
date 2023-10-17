import {Application, Request, Response} from 'express';
import { Client } from "pg";

export const routes = (app: Application, client: Client)=>{
    app.get('/api/items', async (req: Request, res: Response) => {
        const { page } = req.query;
        const itemsPerPage = 24;
        const pageNum = page as unknown as number;

        try {
            const offset = (pageNum - 1) * itemsPerPage;
            const response = await client.query(
                'SELECT * FROM scraps ORDER BY id OFFSET $1 LIMIT $2',
                [offset, itemsPerPage]
            );

            if(response){
                res.status(200).send(response.rows);
            }
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    })
}
