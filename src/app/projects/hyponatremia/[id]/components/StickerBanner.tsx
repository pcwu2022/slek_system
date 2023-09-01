import React, { useState } from 'react';
import { StyledTitle } from './StyledComponents';
import Image from 'next/image';

import * as enums from '../../ram_db/enums';

const VS = (props: {
  children: JSX.Element | string | null
}) => {
  return (
    <div className='bg-white rounded-lg p-2 pl-4 pr-4 m-2 mr-12 font-semibold text-blue-800 inline-block relative self-end'>
      {props.children}
    </div>
  )
}

const StickerBanner = (props: { 
  title: string, 
  imageFile: string, 
  vs: {[key: string]: string}
  children: JSX.Element | string | null 
}) => {
  const [shield, setShield] = useState<boolean>(false);
  return (
    <div className="w-full">

      {/* Banner Title */}
      <div className='w-10/12 text-center inline-block align-middle'>
        <StyledTitle>{props.title}</StyledTitle>
      </div>

      {/* Sticker Image */}
      <div className='w-2/12 text-right inline-block align-middle animate-pulse'>
        <div 
          className='w-16 h-16 float-right rounded-full bg-white flex justify-center hover:scale-95 duration-100'
          onClick={
            () => {
              setShield(!shield);
            }
          }
        >
          <Image
            src = {`/hyponatremia/${props.imageFile.replaceAll(' ', '')}`}
            alt = "Image of Patient"
            height = {40}
            width = {40}
            className = "object-contain"
          />
        </div>
      </div>

      {/* Shield */}
      <div 
        className={"fixed w-screen h-screen top-0 left-0 z-40 duration-300 " + (shield?"block ":"hidden ")}
        style={{
          backgroundColor: "rgba(230,230,230,0.8)"
        }} 
      >
        <div className='flex flex-col w-full'>
          <div 
            className='w-16 h-16 m-8 mr-12 self-end rounded-full bg-white flex justify-center hover:scale-95 duration-100'
            onClick={
              () => {
                setShield(!shield);
              }
            }
          >
            <Image
              src = {`/hyponatremia/${props.imageFile.replaceAll(' ', '')}`}
              alt = "Image of Patient"
              height = {40}
              width = {40}
              className = "object-contain"
            />
          </div>
          {
            Object.keys(props.vs).map((key) => (
              <VS key={key}>
                <>
                  {enums.Main[key as keyof typeof enums.Main]} &nbsp;:&nbsp; {props.vs[key]}
                </>
              </VS>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default StickerBanner;
