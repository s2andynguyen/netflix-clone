'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import PlayButton from './PlayButton';
import FavoriteButton from './FavoriteButton';
import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);
  useEffect(() => {
    setIsVisible(true);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);
  if (!visible) return null;

  return (
    <div
      className="z-50 transition duration-300 bg-black bg-opacity-60 flex items-center
         justify-center overflow-x-hidden overflow-y-auto fixed inset-0"
      onClick={handleClose}
    >
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
              ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} transition duration-300 relative
              flex-auto bg-zinc-900 drop-shadow-md
          `}
        >
          <div className="relative h-96">
            <video
              className="w-full brightness-[60%] object-cover h-full"
              autoPlay
              muted
              loop
              src={data?.videoUrl}
              poster={data?.thumnailUrl}
            ></video>
            {/* close brtn */}
            <div
              className="cursor-pointer absolute top-3 right-3 h-10 w-10
                  rounded-full bg-black bg-opacity-70 flex items-center justify-center"
              onClick={handleClose}
            >
              <AiOutlineClose size={20} />
            </div>

            {/* btn play + favorite */}
            <div className="absolute bottom-10 left-10">
              <p className="text-3xl md:text-4xl h-full lg:text-5xl font-bold">{data?.title}</p>
              <div className="flex gap-4 items-center mt-4">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>

          {/* state */}
          <div className="px-12 py-8">
            <div className='flex justify-between w-full'>
              <p className="text-green-400 font-semibold text-2xl">New</p>
              <p className="text-lg md:text-[16px]">{data?.duration}</p>
            </div>
              <p className="text-lg py-2">{data?.genre}</p>
              <p className="text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
