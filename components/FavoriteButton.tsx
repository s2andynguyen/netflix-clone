'use client';
import React, { useCallback, useMemo } from 'react';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';
import useFavorites from '@/hooks/useFavorites';
import useCurrentUser from '@/hooks/useCurrentUser';
import axios from 'axios';

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorite = useCallback(async () => {
    let response;
    // console.log('isFavorite :>> ', isFavorite);
    if (isFavorite) {
      response = await axios.delete('/api/favorite', { data: { movieId } });
    } else {
      response = await axios.post('/api/favorite', { movieId })
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    // cập nhật SWR cache mà không cần send request mới
    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds
    })
    mutateFavorites();

  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div onClick={toggleFavorite}
      className="cursor-pointer group/item 
    w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full
    flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon size={23} />
    </div>
  );
};

export default FavoriteButton;
