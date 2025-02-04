'use client'
import { useState } from 'react';
import Link from 'next/link';
import {ChevronDownIcon} from '@heroicons/react/solid'
import clsx from 'clsx';

type StudentSidebarProps = {
  isOpen: boolean
}
const StudentSidebar = ({isOpen}: StudentSidebarProps) => {
  const [isDropOpen, setIsDropOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropOpen(!isDropOpen);
  };

  return (
    <div className="flex flex-col h-full w-64 text-black">
      <div
        className={clsx(
          isOpen ? 'w-64' : 'hidden',
          'relative h-screen  p-5 pt-8',
          ' duration-300'
        )}
      >
        <div className="flex gap-x-4">
            <p className='bg-gradient-to-r from-[#264FAD] via-[#264FAD] to-[#029AF8] text-white rounded-lg gap-x-3 text-xl'>SPTS</p>
          {/* <Image
            src="/booking.jpg"
            alt="Africa to silicon valley logo"
            width={100}
            height={100}
            className="cursor-pointer"
          /> */}
        </div>
      <div className="flex-grow overflow-y-auto">
        <ul className="px-4 py-2 text-gray-500">
          <li className="my-2">
            <Link href="/students/dashboard" legacyBehavior>
              <a className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200">
                Dashboard
              </a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/students/formGroup" legacyBehavior>
              <a className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200">
                Form Group
              </a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/students/submitTitle" legacyBehavior>
              <a className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200">
                Submit Title
              </a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/students/projectProgress" legacyBehavior>
              <a className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200">
                Project Progress
              </a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/students/uploadProject" legacyBehavior>
              <a className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200">
                Upload Project
              </a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/students/viewScoreReport" legacyBehavior>
              <a className="flex items-center justify-between p-2 rounded-md hover:bg-gray-200">
                View Score Report
              </a>
            </Link>
          </li>
          <li className="my-2">
            <button
              className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-00"
              onClick={toggleDropdown}
            > 
              <span>Course Project</span>
              <ChevronDownIcon className={`${isDropOpen ? 'transform rotate-180' : ''} h-5 w-5`} />
            </button>
            {isDropOpen && (
              <ul className="pl-4">
                <li className="my-2">
                  <Link href="/student/submitTitle" legacyBehavior>
                    <a className="p-2 rounded-md hover:bg-gray-200">Submit Title</a>
                  </Link>
                </li>
                <li className="my-2" >
                  <Link href="/student/submitProgress" legacyBehavior>
                    <a className="p-2 rounded-md hover:bg-gray-200">Submit Progress</a>
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/student/submitProject" legacyBehavior>
                    <a className="p-2 rounded-md hover:bg-gray-200">Submit Project</a>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default StudentSidebar;