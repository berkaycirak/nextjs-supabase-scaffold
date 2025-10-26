// @ts-expect-error - Prisma client will be generated after running migrations
import { PrismaClient } from '@/generated/prisma/client';

// Singleton pattern to avoid creating a brand new instance again and again during the hotload of nextjs
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
