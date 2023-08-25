'use client';

import React from 'react';
import Link from 'next/link';

const ProfileImage = (props: { imageLink: string }) => {
  return (
    <div className="w-12 h-12 border-r-6 float-right mt-4 mr-12">
      <Link href="./home">
        <img src={props.imageLink} alt="Profile Image" />
      </Link>
    </div>
  )
}

export default ProfileImage;
