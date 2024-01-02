import prismadb from '@/lib/prismadb'
import { getServerSession } from "next-auth";
import { authOption } from '@/app/utils/auth'

export async function GET() {
    try {
        const session = await getServerSession(authOption);
        if(!session) return Response.json({message: 'User not login'})

        const movies = await prismadb.movie.findMany()

        return Response.json(movies)
    } catch (error) {
        console.log('error :>> ', error);
        return Response.json(error)
    }
}
