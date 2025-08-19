/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export const LastPage = () => {
  return (
    <div className='h-full w-full bg-[#f6f6ff] relative overflow-hidden'>
      <div className='p-8'>
        <img
          src='https://strapi.io/assets/strapi-logo-dark.svg'
          height={42}
          alt=''
        />
        <div
          style={{
            backgroundImage:
              'url(https://strapi.io/assets/use-case/strapi5_hero.svg)',

            backgroundColor: '#181826',
          }}
          className='text-white my-8 p-4 rounded-md'
        >
          <h4 className='text-[25pt] font-bold leading-normal'>
            Build modern websites with the most customizable Headless CMS
          </h4>
          <p className='text-sm leading-5 mt-3 w-[90%]'>
            Open-source Headless CMS for developers that makes API creation
            easy, and supports your favorite frameworks. Customize and host your
            projects in the cloud or on your own servers.
          </p>
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
        <div>
          {[
            {
              title: 'Improved Productivity',
              description:
                'An intuitive interface simplifies content creation, so your marketing team can work more efficiently, freeing up your time for more complex development tasks.',
            },
            {
              title: 'Simplify Content Editing and Layouts',
              description:
                'Dynamic zones allow marketers to create adaptable and creative designs. This means less back-and-forth with developers for frontend changes.',
            },
            {
              title: 'Internatioanlization and Media Management',
              description:
                'Publish content in multiple languages with I18N and organize media files using the Media Library.',
            },
          ].map((item) => (
            <div
              key={item?.title}
              className='bg-[#fff] border border-[#e9e9ff] mb-3 p-6 rounded-md'
            >
              <div className='flex gap-2'>
                <img
                  src='https://delicate-dawn-ac25646e6d.media.strapiapp.com/Check_5f2ef36f5a.svg'
                  alt=''
                />
                <h4 className='text-[#292875] text-[15pt] font-bold'>
                  {item?.title}
                </h4>
              </div>
              <p className='text-[10pt] text-[#292875]'>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>

      <img
        src='https://delicate-dawn-ac25646e6d.media.strapiapp.com/Customization_6abc7697f5.png'
        alt=''
        className='absolute'
        style={{ bottom: -370 }}
      />
    </div>
  );
};
