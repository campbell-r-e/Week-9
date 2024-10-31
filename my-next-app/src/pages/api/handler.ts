import { createClient } from '@vercel/postgres';
 
export async function queryvideo() {
  const client = createClient();
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