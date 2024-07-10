import Image from 'next/image';

import React from 'react';

import BackgroundImage from 'public/background.png';

import { PromptForm, SignOut } from './_components';

const Generate = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 h-screen w-full bg-white/90' />
      <Image
        alt='Background'
        className='h-screen w-full object-cover'
        src={BackgroundImage}
      />
      <div className='absolute top-0 h-full w-full border'>
        <div className='flex justify-end p-4'>
          <SignOut />
        </div>
        <div className='w-full max-w-2xl mx-auto px-3'>
          <PromptForm />
        </div>
      </div>
    </div>
  );
};

export default Generate;
