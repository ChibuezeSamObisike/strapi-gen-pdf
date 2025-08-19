/* eslint-disable @next/next/no-img-element */
import { AnnualReturns } from '@/component/annual-returns';
import { IArticleRatioData } from '@/component/article-count-ratio';
import { getImageUrl } from '@/lib/util';
import React from 'react';

export const ReturnDetailsPage = ({
  topStats,
  graph,
  topFeatures,
}: {
  topStats: Array<{ title: string; description: string }>;
  graph: Array<IArticleRatioData>;
  topFeatures: Array<{
    icon: {
      url: string;
    };
    title: string;
    description: string;
  }>;
}) => {
  return (
    <div>
      <AnnualReturns data={graph} />
      <h2 className='text-2xl font-bold text-blue-900 mt-8 mb-2'>Top stats</h2>
      <div className='grid grid-cols-2 gap-4'>
        {topStats?.map((item) => (
          <div
            key={item?.title}
            className='bg-white p-2 rounded-md border border-gray-100'
          >
            <h4 className='text-[#ac56f5] text-xl font-black'>
              {item?.description}
            </h4>
            <p className='text-[#666687] text-[10pt]'>{item?.title}</p>
          </div>
        ))}
      </div>
      <h2 className='text-2xl font-bold text-blue-900 mt-6 mb-2'>
        Top features
      </h2>
      <div className='grid grid-cols-3 gap-4'>
        {topFeatures?.map((feature, item) => (
          <div key={item} className='bg-white p-3 rounded-md'>
            <div className='flex gap-2 items-center mb-3'>
              <img
                src={getImageUrl(feature?.icon?.url)}
                alt=''
                width={30}
                height={30}
              />
              <h6 className='text-[12pt] text-[#292875] font-bold'>
                {feature?.title}
              </h6>
            </div>
            <p className='text-[#666687] text-[8pt]'>{feature?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
