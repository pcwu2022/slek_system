'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProfileImage from './ProfileImage';
import HeaderDropdown from './HeaderDropdown';

const Header = () => {
  const [hover, setHover] = useState<boolean>(true);
  const [stickerHover, setStickerHover] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setHover(false);
    }, 1000);
  }, []);
  return (
    <div
      className='z-40 relative'
      onMouseEnter={(e) => {
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setHover(false);
      }}
    >
      <div className={"bg-blue-950 w-full h-20 duration-500 " + (hover?"mt-0":"-mt-20")}>
        <Link href="../../">
          <Image 
            src = "/slek_image.webp"
            alt = "slek image"
            width = {65}
            height = {43}
            className="absolute mt-3 ml-12"
          />
          <Image 
            src = "/slek_logo.webp"
            alt = "slek logo"
            width = {141}
            height = {32}
            className="absolute mt-5 ml-20"
          />
        </Link>
        <ProfileImage 
          imageLink='https://cdn-icons-png.flaticon.com/512/149/149071.png'
          onMouseOver={(e) => {
            setStickerHover(true);
          }}
          onMouseLeave={(e) => {
            setTimeout(() => {
              setStickerHover(false);
            }, 1000);
          }}
        />
        
      </div>
      {
        <HeaderDropdown 
          display={stickerHover}
          loggedIn={true}
        />
      }
      <div className='h-10 relative -mb-10'></div>
    </div>
  )
}

export default Header;
