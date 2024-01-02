import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth';

export async function GET() {
    try {
        const { currentUser } = await serverAuth();
        if(!currentUser) return Response.json({message: 'User not login'})

        const favoriteMovies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: currentUser?.favoriteIds
                }
            }
        });
        
        return Response.json(favoriteMovies)
    } catch (error) {
        console.log('error :>> ', error);
        return Response.json(error)
    }
}

