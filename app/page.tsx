import { getServerSession } from 'next-auth';
import { authOption } from './utils/auth';
import { redirect } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieListGetData from '@/components/MovieListGetData';
import serverAuth from '@/lib/serverAuth';

export default async function Home() {

  const session = await getServerSession(authOption);
  if (!session) return redirect('/auth')
  const {currentUser} = await serverAuth()

  return (
    <div>
      <Navbar user={currentUser}/>
      <Billboard />
      <div className='pb-40'>
        <MovieListGetData/>
      </div>
    </div>
  );
}
