'use client';
import { useCallback, useEffect, useState } from 'react';
import { BsChevronDown , BsSearch, BsBell } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const TOP_OFFSET = 66;
interface NavbarProps {
  user: any
}
const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((prev) => !prev);
  }, []);
  return (
    <div className="w-full fixed top-0 left-0 z-10">
      <nav
        className={`flex flex-row items-center px-4 md:px-16 py-6 
        transition duration-500 select-none ${
          showBackground ? ' bg-zinc-900 bg-opacity-90' : ''
        }`}
      >
        {/* logo */}
        <div className='h-4 lg:h-7'>
          <Image src={'/images/logo.png'} 
            width={178} height={48} alt='logo-netflix'
          />
        </div>

        {/* nav item */}
        <div className="ml-8 gap-7 lg:flex hidden">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>

        {/* mobile browse */}
        <div
          className="flex relative flex-row lg:hidden items-center gap-2 ml-8 cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <p className="text-sm select-none">Browse</p>
          <BsChevronDown className={`transition duration-200 ${showMobileMenu? 'rotate-180': ''}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row  ml-auto gap-7 items-center">

          {/* search */}
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>

          {/* notice */}
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>

          {/* avatar */}
          <div 
            className='flex flex-row items-center gap-2 justify-center cursor-pointer relative'
            onClick={toggleAccountMenu}
          >
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
              <Image src={user?.image} width={40} height={40} alt={'avatar-img'}/>
            </div>
            <BsChevronDown className={`transition duration-200 ${showAccountMenu? 'rotate-180': ''}`} />
            <AccountMenu visible={showAccountMenu} imageUrl={user?.image} name={user.name}/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
