import Image from 'next/image';
import AuthForm from '@/components/AuthForm';
import { getServerSession } from 'next-auth';
import { authOption } from '../utils/auth';
import { NextRouter } from 'next/router';
import { redirect } from 'next/navigation';
export default async function Auth() {
  const session = await getServerSession(authOption);
  
  if(session) {
    return redirect('/')
  }
  return (
    <div className="relative h-full w-full bg-site-auth bg-no-repeat bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50 ">
        <nav className="px-12 py-5">
          <Image height={48} width={178} src={'/images/logo.png'} alt="" />
        </nav>
        <div className="flex justify-center">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
