import serverAuth from '@/lib/serverAuth';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    await serverAuth();
    const slug = params.slug;
    return Response.json(slug);
  } catch (error) {
    console.log('error :>> ', error);
    return Response.json(error)
  }

}
