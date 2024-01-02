import serverAuth from '@/lib/serverAuth';
export async function GET() {
  try {
    const { currentUser } = await serverAuth();
    return Response.json(currentUser);
  } catch (error) {
    console.log('error :>> ', error);
    return Response.json({ error });
  }
}
