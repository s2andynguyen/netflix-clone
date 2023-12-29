import bcrypt from "bcrypt";
import prismadb from '@/lib/prismadb'

export async function POST( request:Request ) {
    try {
        const { email, name, password } = await request.json()
        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        })
        if(existingUser) {
            return Response.json({error: `eamil taken ${existingUser}`})
        }
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prismadb.user.create({
            data:{
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date,
            }
        })

        return Response.json({user})
    } catch (error) {
        console.log('error :>> ', error);
        return Response.json('404')
    }
}