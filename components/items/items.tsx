'use client';
import React from 'react';
import { itemData } from './itemData';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export const Items = () => {
  const router = useRouter();

  return (
    <div>
      <ul
        // className={clsx(
        //   toggle ? ' flex' : ' hidden',
        //   'flex-col justify-center items-center',
        //   'w-full first:mt-2 lg:flex-row lg:w-auto',
        //   'lg:space-x-10 lg:flex'
        // )}
        className="grid grid-cols-6 ml-5 mr-12 gap-y-9"
      >
        {itemData.map((link, index) => {
          return (
            <li key={index} className={clsx(link.cname)}>
              <div
                // onClick={showNav}
                className={
                  clsx()
                  // router.pathname == link.href && 'text-primary', 'text-black no-underline',
                }
              >
                {/* {link.image} */}
                <Image
                  src={link.image}
                  alt="image"
                  width="380"
                  height="300"
                  className="p-2"
                />

                <div className="font-semibold text-xl pl-5 pt-5">
                  {link.title}
                </div>
                <div className="text-sm text-gray-500 pl-5">{link.date}</div>

                <div>
                  {/* <Link href={link.href} className="pt-2 pl-5 text-blue-600">
                    View details
                  </Link> */}
                </div>
                {/* {router.pathname == link.href && (
                      <div className="flex justify-center">
                        <div className="border-primary w-4 border-b-4 rounded-[1.5px]"></div>
                      </div>
                    )} */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Items;