// pages/api/handler.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.video.findMany(); // Fetch videos
      res.status(200).json(data); // Return data as JSON
    } catch (error) {
      console.error("Error fetching videos:", error);
      res.status(500).json({ error: 'Failed to fetch videos' });
    } finally {
      await prisma.$disconnect(); // Ensure Prisma disconnects
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
