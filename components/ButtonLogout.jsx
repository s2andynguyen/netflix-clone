'use client'
import { signOut } from 'next-auth/react';

const ButtonLogout = () => {
  return (
    <button className="h-10 w-full bg-white" onClick={() => {
      signOut({ callbackUrl: `${window.location.origin}/auth` })
    }}>
      Logout
    </button>
  );
};

export default ButtonLogout;
