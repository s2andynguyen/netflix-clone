import prismadb from '@/lib/prismadb'
import { getServerSession } from "next-auth";
import { authOption } from '@/app/utils/auth'
import { NextApiRequest } from 'next';
import serverAuth from '@/lib/serverAuth';
import { without } from 'lodash';

export async function POST(request: Request) {
    try {
        const { currentUser } = await serverAuth();
        if(!currentUser) return Response.json({message: 'User not login'})

        const res = await request.json()
        const { movieId } = res;

        console.log('**favorite movieId :>> ', movieId);

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })
        if(!existingMovie) throw new Error('Movie ID invalid')

        const user = await prismadb.user.update({
            where: {
                email: currentUser.email || ''
            },
            data: {
                favoriteIds: {
                    push: movieId
                }
            }
        })
        return Response.json([{message: 'Adding movieId Success'},{movieId}])
    } catch (error) {
        console.log('error :>> ', error);
        return Response.json(error)
    }
}

export async function DELETE(request: Request) {
    try {
        const { currentUser } = await serverAuth();
        if(!currentUser) return Response.json({message: 'User not login'})

        const res = await request.json();
        const { movieId } = res;

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })
        if(!existingMovie) {
            throw new Error('Movie ID invalid')
        } 
        const updatedFavoriteIds = without(currentUser.favoriteIds, movieId)
        const updateUser = await prismadb.user.update({
            where: {
                email: currentUser.email || ''
            },
            data: {
                favoriteIds: updatedFavoriteIds
            }
        })
        return Response.json([{message: 'Remove movieID success!'}, {updateUser}])
    } catch (error) {
        console.log('error :>> ', error);
        return Response.json({error})
    }
}
