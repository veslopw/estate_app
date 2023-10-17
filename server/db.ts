import pg from 'pg';
const { Client } = pg;

export const client = new Client("postgres://tmaypucv:JvDkZC0xCrWpHbYQFwFwvj_VwOQAOZua@cornelius.db.elephantsql.com/tmaypucv");

export const createTable = async () => {
    await client.query(`CREATE TABLE IF NOT EXISTS scraps 
  (id serial PRIMARY KEY, name VARCHAR (255), 
  price VARCHAR (255), img VARCHAR (255));`)
};
