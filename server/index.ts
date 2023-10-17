import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { client, createTable } from "./db";
import { routes } from "./routes";
import { filldb } from "./filldb";

dotenv.config();
client.connect();
createTable();
filldb(client);

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "*"}));


routes(app, client)

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is Run at http://localhost:${port}`);
});