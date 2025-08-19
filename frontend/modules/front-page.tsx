/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

interface IFrontPageProps {
  title: string;
  about: {
    description: string;
    funded: boolean;
    returns: string;
    size: string;
  };
}

export const FrontPage = ({ title, about }: IFrontPageProps) => {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://strapi.io/assets/use-case/strapi5_hero.svg)',
      }}
      className='bg-[#181826] text-white w-full h-full relative overflow-hidden'
    >
      <div className='p-8'>
        <h4 className='text-[48pt] pt-[100px] font-bold leading-16'>{title}</h4>
        <p className='text-sm leading-5 mt-3 w-[80%]'>{about?.description}</p>
        <Link
          href='https://strapi.io/'
          className='cursor-pointer'
          target='_blank'
        >
          <button className='bg-[#4845fe] text-white p-2 px-4 mt-4 rounded-md font-[500]'>
            Get started
          </button>
        </Link>
      </div>
      <img
        src='https://delicate-dawn-ac25646e6d.media.strapiapp.com/Content_Management_cfd037fcc2.png'
        alt='cowry-test'
        style={{
          //  scale: 2.5,
          position: 'absolute',
          bottom: -150,
          right: 0,
        }}
      />
    </div>
  );
};
