import React from 'react';
import Link from 'next/link';
import { PageData } from '../types/types';
import Image from 'next/image';

const Card = (props: {pageData: PageData}) => {
  return (
  <>
    <div
      className="inline-block w-40 sm:w-80 m-2 sm:m-10 rounded-lg bg-neutral-700">
      <Image
          className="rounded-t-lg object-cover w-80 h-28 sm:h-48"
          src={props.pageData?.imageLink || "https://tecdn.b-cdn.net/Image/new/standard/nature/184.jpg"}
          alt="" 
      />
      <div className="p-2 sm:p-6">
        <div
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.pageData.title}
        </div>
        <div className="mb-4 h-20 overflow-auto no-scrollbar text-base text-neutral-600 dark:text-neutral-200">
            {props.pageData.description}
        </div>
        <Link href={`./${props.pageData.name}`}>
          <button
            type="button"
            className="inline-block rounded bg-primary drop-shadow-lg px-6 pb-2 pt-2.5 text-xs font-medium text-white bg-neutral-600 hover:bg-neutral-500 transition duration-150 ease-in-out"
          >
              Go!
          </button>
        </Link>
      </div>
    </div>
  </>
  )
}

export default Card;
