"use client"
import React from 'react'
import InfoModal from './InfoModal';
import useInfoModal from '@/hooks/useInfoModal';

function InfoModalControl() {
    const {isOpen, closeModal} = useInfoModal()

  return (
    <InfoModal visible={isOpen} onClose={closeModal} />
  )
}

export default InfoModalControl