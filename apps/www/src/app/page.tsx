import Image from 'next/image';

import React from 'react';

import BackgroundImage from 'public/background.png';
import { GenerateButton } from '~/components';

const Home = () => {
  return (
    <div className='relative'>
      <Image
        alt='Background'
        className='h-screen w-full object-cover'
        src={BackgroundImage}
      />
      {/* Can't do right-1/2 because of image unevenness */}
      <div className='absolute right-[51%] top-1/2 translate-x-1/2'>
        <GenerateButton />
      </div>
    </div>
  );
};

export default Home;
