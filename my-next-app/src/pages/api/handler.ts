import { createClient } from '@vercel/postgres';

 
export async function queryvideo() {

  const connectionString = process.env.POSTGRES_URL_NON_POOLING;
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