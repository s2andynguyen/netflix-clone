'use client';
import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import useBillboard from '@/hooks/useBillboard';
import PlayButton from './PlayButton';
const Billboard = () => {
  const { data } = useBillboard();
  return (
    <div className="relative h-[56.25vw]">
      <video
        src={data?.videoUrl}
        poster={data?.thumnailUrl}
        autoPlay
        muted
        loop
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
      ></video>
      <div className="absolute top-[35%] md:top-[40%] ml-4 md:ml-16">
        <p className='text-xl md:text-5xl font-bold h-full w-[50%] lg:text-6xl drop-shadow-xl'>
          {data?.title}
          {/* Elephent&#39;s Dream */}
        </p>
        <p className='text-[8px] md:text-lg mt-3 md:mt-8 
        w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
          {data?.description}
        </p>
        {/* see more */}
        <div className='flex items-center mt-3 md:mt-4 gap-3'>
          <PlayButton movieId={data?.id}/>
          <button className='bg-white bg-opacity-30 rounded-md 
          py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg 
          flex items-center hover:bg-opacity-20 transition duration-300'>
            <AiOutlineInfoCircle  className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
