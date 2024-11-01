import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async function datapuller(res) {
  try {
    const data = await prisma.video.findMany();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  } finally {
    await prisma.$disconnect();
  }
}


// modified from onlinexz