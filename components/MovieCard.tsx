import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import Image from 'next/image';
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/navigation';
import useInfoModal from '@/hooks/useInfoModal';
interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal()

  return (
    <div className="relative group bg-zinc-900 w-full rounded-md h-[12vw] ">
      <div className="h-full w-full">
        <Image
          className="h-full object-cover transition duration-200 
            shadow-xl rounded-md group-hover:opacity-80 
            sm:group-hover:opacity-0 delay-300 cursor-pointer"
          src={data.thumnailUrl}
          width={980}
          height={551}
          alt="thumbnail"
        />
        <div
          className="absolute top-0 transition duration-200 z-10 
            invisible sm:visible delay-200 w-full scale-0 
            group-hover:scale-110 
            group-hover:-translate-y-[6vw] 
            group-hover:translate-x-[2vw]
            group-hover:opacity-100
          "
        >
          {/* toast image */}
          <Image
            src={data.thumnailUrl}
            width={980}
            height={551}
            alt="thumbnail"
            className="cursor-pointer object-cover transition duration-200 shadow-xl
            rounded-t-md w-full h-[12vw]"
          />

          <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
            {/* film info */}
            <div className="flex items-center gap-3">
              {/* play btn */}
              <div
                onClick={() => router.push(`/watch/${data.id}`)}
                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full
              flex justify-center items-center transition hover:bg-neutral-300"
              >
                <BsFillPlayFill size={30} color={'#000'} className="ml-[2px]" />
              </div>
              <FavoriteButton movieId={data?.id} />
              <div className='cursor-pointer ml-auto group/item w-6 h-6 lg:h-10 lg:w-10
              border-2 border-white rounded-full flex justify-center items-center transition 
              hover:border-neutral-300'
              onClick={() => {openModal(data?.id)}}>
                <BiChevronDown size={23} 
                  className="group-hover/item:text-neutral-300"
                />
              </div>
            </div>

            {/* state */}
            <p className="text-green-400 font-semibold mt-4">
              New <span className="text-white">2023</span>
            </p>

            {/* duration */}
            <div className="flex mt-4 grap-2 items-center">
              <p className="text-[10px] lg:text-sm">{data.duration}</p>
            </div>

            {/* genre */}
            <div className="flex mt-4 grap-2 items-center">
              <p className="text-[10px] lg:text-sm">{data.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
