import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="bg-blue-950 w-screen h-20 relative">
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
      </div>
    </>
  )
}

export default Header;
