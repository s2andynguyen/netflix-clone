'use client';
interface NavbarItemProps {
    label: string
}
import Link from 'next/link';
const NavbarItem:React.FC<NavbarItemProps> = ({label}) => {
  return (
    <div className="cursor-pointer hover:gray-300 transition duration-300">
        {label}
    </div>
  );
}

export default NavbarItem;
