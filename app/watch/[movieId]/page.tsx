"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import useMovie from '@/hooks/useMovie'
import { useRouter } from 'next/navigation'
import { AiOutlineArrowLeft } from "react-icons/ai";
function Watch() {
  const param = useParams();
  const movieId = param.movieId
  const router = useRouter();
  const { data } = useMovie(movieId as string);
  return (
    <div className='h-screen w-screen bg-black'>
      <nav
        className='fixed w-full -top-[1px] p-4 z-10 flex items-center 
        gap-8 bg-black bg-opacity-70 cursor-pointer'
        onClick={() => router.push('/')}
      >
        <AiOutlineArrowLeft className="" size={40} />
        <p className='text-xl md:text-3xl font-bold'>
          <span className='font-light mr-2'>Watching:</span>
          {data?.title}
        </p>
      </nav>
    <video 
      autoPlay
      controls
      src={data?.videoUrl}
      className='h-full w-full'
    ></video>
    </div>
  )
}

export default Watch