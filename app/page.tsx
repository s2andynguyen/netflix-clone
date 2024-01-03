import { getServerSession } from 'next-auth';
import { authOption } from './utils/auth';
import { redirect } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieListGetData from '@/components/MovieListGetData';
import InfoModalControl from '@/components/InfoModalControl';

export default async function Home() {

  const session = await getServerSession(authOption);
  if (!session) return redirect('/auth')

  return (
    <div>
      <InfoModalControl />
      <Navbar/>
      <Billboard />
      <div className='pb-40'>
        <MovieListGetData/>
      </div>
    </div>
  );
}
