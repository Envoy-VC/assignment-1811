import React, { type ComponentProps } from 'react';

import { cn } from '~/lib/utils';

import { Button } from './ui/button';

import { Heart } from 'lucide-react';

type GenerateButtonProps = ComponentProps<'button'>;

export const GenerateButton = ({
  className,
  ...props
}: GenerateButtonProps) => {
  return (
    <Button
      className={cn(
        'font-display bg-brand text-2xl flex h-12 items-center gap-5 rounded-full tracking-wide text-white sm:h-16 sm:text-[2rem]',
        className
      )}
      {...props}
    >
      <Heart fill='#fff' size={16} />
      Generate one for me
      <Heart fill='#fff' size={16} />
    </Button>
  );
};
