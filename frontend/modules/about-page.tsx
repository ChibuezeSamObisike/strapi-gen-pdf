/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { DetailsCard } from '@/component/details-card';
import { PortfolioAbout } from '@/component/portfolio-about';
import { getImageUrl } from '@/lib/util';
import React from 'react';

export const AboutPage = ({
  articles,
  about,
}: {
  articles: Array<{
    title: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  about: {
    description: string;
    funded: boolean;
    returns: string;
    size: string;
  };
}) => {
  return (
    <div>
      <div className='flex items-center'>
        <img
          src='https://strapi.io/assets/strapi-logo-dark.svg'
          height={28}
          alt=''
        />
      </div>
      <PortfolioAbout about={about} />
      <h2 className='text-2xl font-bold text-blue-900 mt-8 my-4'>
        Top articles last year
      </h2>
      <div className='grid grid-cols-1'>
        {articles?.map((details: any, item) => (
          <DetailsCard
            img={getImageUrl(details?.picture?.url as string)}
            {...details}
            key={item}
          />
        ))}
      </div>
    </div>
  );
};
