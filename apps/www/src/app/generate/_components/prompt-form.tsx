'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GenerateButton } from '~/components';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

import { PromptOutput } from './prompt-output';

const placeholderText = `She is a 10 but..
He likes football....`;

export const PromptForm = () => {
  'use no memo';
  
  const [output, setOutput] = useState<string[]>([]);
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormType) => {
    console.log(values);
    setOutput([
      'Write in a scholarly tone, utilising accurate, authoritative sources and citations. Ensure that your...',
      'Write in a scholarly tone, utilising accurate, authoritative sources and citations. Ensure that your...',
    ]);
  };
  return (
    <div className='flex w-full flex-col gap-6'>
      <div className='text-center font-display text-3xl text-brand sm:text-5xl'>
        Pickup line Generator
      </div>
      {output.length === 0 ? (
        <Form {...form}>
          <form
            className='space-y-8 tracking-wider'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-brandSecondary font-display text-2xl'>
                    Tell us about your crush
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className='resize-none font-display text-lg text-brand placeholder:text-lg placeholder:text-neutral-300'
                      placeholder={placeholderText}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-brandSecondary font-display text-lg' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='style'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-brandSecondary font-display text-2xl'>
                    Style
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='resize-none font-display text-lg text-brand placeholder:text-lg placeholder:text-neutral-300'
                      placeholder='Funny'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-brandSecondary font-display text-lg' />
                </FormItem>
              )}
            />
            <GenerateButton className='w-full' type='submit' />
          </form>
        </Form>
      ) : (
        <PromptOutput lines={output} setOutput={setOutput} />
      )}
    </div>
  );
};

const formSchema = z.object({
  description: z
    .string({
      required_error: 'Description must be provided',
    })
    .min(1, {
      message: 'Description must be at least 1 character long',
    }),
  style: z
    .string({
      required_error: 'Style must be provided',
    })
    .min(1, {
      message: 'Style must be at least 1 character long',
    }),
});

type FormType = z.infer<typeof formSchema>;
