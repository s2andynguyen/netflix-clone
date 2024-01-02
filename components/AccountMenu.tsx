'use client';
import { signOut } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';
interface AccountMenuProps {
  visible?: boolean
  imageUrl?:string
  name?:string
}
const AccountMenu:React.FC<AccountMenuProps>= ({visible, imageUrl, name}) => {
  if(!visible) return null
  console.log('imageUrl :>> ', imageUrl);
  return (
    <div className='absolute top-8 right-0 bg-black w-56 py-5 border-2 
    border-gray-800 flex flex-col'>
      <div className="flex flex-col gap-2">
        {/* info */}
        <div className='px-3 flex gap-3 group/item items-center w-full'>
          <div className='w-8 rounded-md'>
            <Image className='rounded-md' src={`${imageUrl}`} width={40} height={40} alt={'avatar-img'}/>
          </div>
          <p className='text-sm group-hover/item:underline'>
            {name}
          </p>
        </div>
        <hr className='bg-gray-600 border-0 h-px my-2' />
        <div className='px-3 text-center text-sm hover:underline'
          onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
}

export default AccountMenu;
