'use client';

import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const page = () => {
  const [state, setState] = useState<boolean>(false)
  return (
    <div>
      {(state)?(
        <>
        Loaded XLSX into JSON <br />
        <Link href='/'><u>Back to homepage</u></Link>
        </>
      ):(
        <button
          onClick={() => {
            fetch('/projects/hyponatremia/ram_db/load_db/api')
            .then((data) => {
              setState(true);
            })
            .catch((err) => {
              alert(err);
            })
          }}
        >Click to Load XLSX into JSON</button>
      )}
    </div>
  )
}

export default page;
