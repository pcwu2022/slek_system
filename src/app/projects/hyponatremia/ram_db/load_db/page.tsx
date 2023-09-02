'use client';

import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const page = () => {
  const [state, setState] = useState<boolean>(false)
  return (
    <div>
      <>This Page is for Dev Mode Only <br /></>
      {(state)?(
        <>
        Loaded XLSX into JSON <br />
        <Link href='/'><u>Back to homepage</u></Link>
        </>
      ):(
        <div
          className='bg-neutral-300 cursor-pointer m-5 inline-block p-2 rounded-md'
          onClick={() => {
            fetch('/projects/hyponatremia/ram_db/load_db/api')
            .then((data) => {
              setState(true);
            })
            .catch((err) => {
              alert(err);
            })
          }}
        >Click to Load XLSX into JSON</div>
      )}
    </div>
  )
}

export default page;
