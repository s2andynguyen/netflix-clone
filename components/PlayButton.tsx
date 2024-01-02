import React from 'react';
import { useRouter } from 'next/navigation';
import { BsFillPlayFill } from 'react-icons/bs';

interface PlayButtonProps {
  movieId: string
}
const PlayButton:React.FC<PlayButtonProps> = ({movieId}) => {
  const router = useRouter()
  return (
    <button 
    className="bg-white text-black py-1 md:py-2 px-2 md:px-4 w-auto
    text-xs lg:text-lg font-semibold flex items-center gap-1 rounded-md 
    cursor-pointer hover:bg-opacity-80 transition-all duration-200" 
    onClick={() => router.push(`/watch/${movieId}`)}>
      <BsFillPlayFill size={25}/>
      Play
    </button>
  );
};

export default PlayButton;
