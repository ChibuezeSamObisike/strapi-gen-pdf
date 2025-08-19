/* eslint-disable @next/next/no-img-element */
import ArticleCountRatioChart, {
  IArticleRatioData,
} from '@/component/article-count-ratio';
import React from 'react';

export const AnnualReturns = ({ data }: { data: IArticleRatioData[] }) => {
  return (
    <div className='w-full'>
      <div className='flex items-center mb-10'>
        <img
          src='https://strapi.io/assets/strapi-logo-dark.svg'
          height={42}
          alt=''
        />
      </div>

      <ArticleCountRatioChart data={data} />
    </div>
  );
};
