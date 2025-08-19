import React, { FC } from 'react';

export const PortfolioAbout: FC<{
  about: {
    description: string;
    funded: boolean;
    returns: string;
    size: string;
  };
}> = async ({ about }) => {
  return (
    <div className='mt-10 p-6 bg-white rounded-lg'>
      <h2 className='text-2xl font-bold text-blue-900 mb-4'>About</h2>
      <p className='text-gray-500 mb-6 leading-relaxed'>{about?.description}</p>

      <div className='space-y-4'>
        <Info label='Funded' value={about?.funded ? 'Yes' : 'No'} />
        <Info label='Fund Size' value={`₦ ${about?.size}`} />
        <Info label='Returns Payment' value='Quarterly' />
      </div>
    </div>
  );
};

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className='flex justify-between text-gray-500'>
    <span>{label}</span>
    <span className='text-blue-900 font-medium truncate max-w-[150px] text-right'>
      {value}
    </span>
  </div>
);
