import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProfileImage from './ProfileImage';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  return (
    <>
      <div className="bg-blue-950 w-full h-20 relative">
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
        <ProfileDropdown></ProfileDropdown>
        <ProfileImage imageLink='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
      </div>
    </>
  )
}

export default Header;
