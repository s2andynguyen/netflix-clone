import { signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOption } from './utils/auth';
import Link from 'next/link';
import ButtonLogout from '../components/ButtonLogout'
export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <>
      <h1 className="text-4xl text-green-400">Netflix</h1>
      <hr />
      {session ? (
        <div>
          <h1 className='text-white'>Chào bạn! đăng nhập thành công</h1>
          <ButtonLogout />
        </div>
      ) : (
        <div className="flex">
          <h1 className='text-white'>Vui lòng đăng nhập để tiếp tục: </h1>
          <Link href={'/auth'} className='text-white'>Login page</Link>
        </div>
      )}
    </>
  );
}

// export const getServerSideProps = async (context: NextPageContext) => {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
