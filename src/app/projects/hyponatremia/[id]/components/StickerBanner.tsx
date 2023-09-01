import React from 'react';
import { StyledTitle } from './StyledComponents';
import Image from 'next/image';

const StickerBanner = (props: { title: string, imageFile: string, children: JSX.Element | string | null }) => {
  return (
    <div className="w-full">
      <div className='w-10/12 text-center inline-block align-middle'>
        <StyledTitle>{props.title}</StyledTitle>
      </div>
      <div className='w-2/12 text-right inline-block align-middle'>
        <div className='w-16 h-16 float-right rounded-full bg-white flex justify-center'>
          <Image
            src = {`/hyponatremia/${props.imageFile.replaceAll(' ', '')}`}
            alt = "Image of Patient"
            height = {40}
            width = {40}
            className = "object-contain"
          />
        </div>
      </div>
    </div>
  )
};

export default StickerBanner;
