import serverAuth from '@/lib/serverAuth';
import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb'
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { currentUser } =  await serverAuth();
    if(!currentUser) return redirect('/auth')
    const movieId = params.slug;

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId
      }
    })
    if(!movie) throw new Error('movieId invalid')
    
    return Response.json(movie);
  } catch (error) {
    console.log('error :>> ', error);
    return Response.json(error)
  }

}
