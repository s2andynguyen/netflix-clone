import { NextApiRequest } from 'next';
import serverAuth from "@/lib/serverAuth";

export default async function GET(req: NextApiRequest) {
    try {
        const { currentUser } = await serverAuth(req)

        return Response.json(currentUser)
    } catch (error) {
        console.log('error :>> ', error);
        return Response.json({error})
    }
}