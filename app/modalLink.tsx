'use client';
import Typography from '@/components/ui/typography';
import Modal from './modal';
import { useState } from 'react';

const ModalLink = () => {
  const [openAgain, setOpenAgain] = useState(false);
  return (
    <>
      <div onClick={() => setOpenAgain(true)} className="cursor-pointer">
        <Typography variant="h4" className="uppercase">
          Akce na vstupy
        </Typography>
      </div>
      <Modal openAgain={openAgain} onClose={() => setOpenAgain(false)} />
    </>
  );
};

export default ModalLink;
