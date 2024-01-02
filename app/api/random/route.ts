import { NextApiRequest } from 'next';
import prismadb from '@/lib/prismadb';
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/utils/auth';
export async function GET(req: NextApiRequest) {
  try {
    const session = await getServerSession(authOption);
    if (!session) return Response.json({ message: 'User not login' });
    
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovives = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return Response.json(randomMovives[0]);
  } catch (error) {
    console.log('error :>> ', error);
    return Response.json({ error: error });
  }
}
