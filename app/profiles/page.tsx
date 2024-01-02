import { redirect } from 'next/navigation';
import ProfileLoginItem from '@/components/ProfileLoginItem';
import serverAuth from '@/lib/serverAuth';
async function Profiles() {
  const { currentUser } = await serverAuth();
  if (!currentUser) return redirect('/auth');

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-3xl md:text-6xl text-white">Who is watching?</h1>
        <div className="flex items-end justify-center gap-8">
          <ProfileLoginItem user={currentUser}/>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
