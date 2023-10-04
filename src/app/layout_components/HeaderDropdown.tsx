import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const HeaderDropdown = (props: {
  display: boolean,
  loggedIn: boolean
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className='w-full absolute z-50'>
      <div 
        className={'w-40 relative float-right bg-blue-950 duration-300 ' + ((hover || props.display)?"h-full":"h-0")}
        onMouseEnter={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
      >
        <Link href={props.loggedIn?"../api/auth/signout":"../api/auth/signin"}>
          <div className={'bg-blue-800 m-2 p-2 text-center cursor-pointer text-white hover:bg-blue-600 ' + ((props.display || hover)?"block":"hidden")}>
            {props.loggedIn?"Log Out":"Log In"}
          </div>
        </Link>
        {
          props.loggedIn?
          <>
            <Link href={props.loggedIn?"../profile":"../api/auth/signin"}>
              <div className={'bg-blue-800 m-2 p-2 text-center cursor-pointer text-white hover:bg-blue-600 ' + ((props.display || hover)?"block":"hidden")}>
                My Profile
              </div>
            </Link>
          </>:""
        }
      </div>
    </div>
  )
}

export default HeaderDropdown;
