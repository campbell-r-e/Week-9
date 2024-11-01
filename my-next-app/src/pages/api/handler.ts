import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async function datapuller(res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: number; name: string; url: string; votes: number; length: number; }[]): void; new(): any; }; }; }) {
  try {
    const data = await prisma.video.findMany();
    res.status(200).json(data);
  } finally {
    await prisma.$disconnect();
  }
}


// modified from onlinexz