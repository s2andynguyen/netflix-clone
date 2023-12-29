import { getServerSession } from 'next-auth';
import { authOption } from '../utils/auth';
import { redirect } from 'next/navigation';
import ProfileLoginItem from '@/components/ProfileLoginItem';
async function Profiles() {
  const session = await getServerSession(authOption);

  if (!session) return redirect('/auth');

  return (
    <div className="flex items-center justify-center h-full ">
      <div className="flex flex-col items-center gap-y-3">
        <h1 className="text-3xl md:text-6xl text-white">Who is watching?</h1>
        <div className="flex items-end justify-center gap-8">
          <ProfileLoginItem />
        </div>
      </div>
    </div>
  );
}

export default Profiles;
