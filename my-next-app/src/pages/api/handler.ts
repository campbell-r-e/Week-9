import { createClient } from '@vercel/postgres';

 
export async function queryvideo() {
  const connectionString = "postgres://default:RkmTvCKx9h3L@ep-curly-block-a4vx6vd3.us-east-1.aws.neon.tech/verceldb?sslmode=require";
  const client = createClient({connectionString});
  await client.connect();
 
  try {
    const {rows} =
      await client.sql`SELECT * FROM Video`;
      return rows;
  } finally {
    await client.end();
  }
}

// from online resource