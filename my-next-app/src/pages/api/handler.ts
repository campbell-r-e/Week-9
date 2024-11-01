import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async function datapuller(req,res) {
  try {
    const data = await prisma.video.findMany();
    res.status(200).json(data);
  }
   finally {
    await prisma.$disconnect();
  }
}


// modified from online