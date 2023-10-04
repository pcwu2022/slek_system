import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const HeaderDropdown = (props: {
  display: boolean
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const loggedIn = (status === "authenticated");
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
        <Link href={loggedIn?"../api/auth/signout":"../api/auth/signin"}>
          <div className={'bg-blue-800 m-2 p-2 text-center cursor-pointer text-white hover:bg-blue-600 ' + ((props.display || hover)?"block":"hidden")}>
            {loggedIn?"Log Out":"Log In"}
          </div>
        </Link>
        {
          loggedIn?
          <>
            <Link href={"../profile"}>
              <div className={'bg-blue-800 m-2 p-2 text-center cursor-pointer text-white hover:bg-blue-600 ' + ((props.display || hover)?"block":"hidden")}>
                My Profile
              </div>
            </Link>
            <Link href={"../projects"}>
              <div className={'bg-blue-800 m-2 p-2 text-center cursor-pointer text-white hover:bg-blue-600 ' + ((props.display || hover)?"block":"hidden")}>
                Home
              </div>
            </Link>
          </>:""
        }
      </div>
    </div>
  )
}

export default HeaderDropdown;
