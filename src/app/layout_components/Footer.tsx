import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
  <>
    <div className="bg-blue-950 w-screen h-48 columns-3 p-4 pt-5">
      <div className="text-center h-36">
        <p className="text-sm my-4 text-white">| 完全人才股份有限公司 |</p>
        <p className="text-sm my-4 text-white">統編：83594582</p>
        <p className="text-sm my-4 text-white">
          信箱：
          <a href="mailto:slekmed@gmail.com" className="text-blue-600">slekmed@gmail.com</a>
        </p>
      </div>

      <div className="h-36 relative">
        <a href="https://www.slekmed.com" target="_self" className="">
          <Image 
            src = "/slek_image.webp"
            alt = "slek image"
            width = {90}
            height = {61}
            className="absolute top-6"
          />
        </a>

        <a href="https://www.slekmed.com" target="_self" className="">
        <Image 
          src = "/slek_logo.webp"
          alt = "slek logo"
          width = {188}
          height = {43}
          className="absolute left-10 top-8"
        />
        </a>
      </div>

      <div className="relative">
        <div className="text-center m-2">
          <Link href="https://www.instagram.com/slekmed/?hl=zh-tw">
            <button className="bg-gray-100 m-2 p-2 text-black" >IG 官方帳號</button>
          </Link>
        </div>
        
        <div className="text-center m-2">
          <Link href="https://www.facebook.com/slekmed">
            <button className="bg-gray-100 m-2 p-2 text-black" >FB 粉絲專頁</button>
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Footer;
