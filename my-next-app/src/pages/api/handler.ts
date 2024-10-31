import dotenv from 'dotenv';
dotenv.config();
//const connectionString = process.env.POSTGRES_URL_NON_POOLING;
import { createClient } from '@vercel/postgres';



 
export async function queryvideo() {
  
  const connectionString = "postgres://default:RkmTvCKx9h3L@ep-curly-block-a4vx6vd3.us-east-1.aws.neon.tech/verceldb?sslmode=require";
  const client = createClient({
    connectionString,
    ssl: {
      rejectUnauthorized: true,
    },
  });
  await client.connect();
  console.log(client)
 
  try {
    const {rows} =
      await client.sql`SELECT * FROM Video`;
      console.log(rows)
      return rows;
  } finally {
    await client.end();
  }
}

// from online resource