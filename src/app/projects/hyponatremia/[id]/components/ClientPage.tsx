'use client';

import React, { useState } from 'react';
import { redirect, useParams } from 'next/navigation';
import { useEffect } from 'react';
import { DBJson, SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

// components
import ControlFlow from './ControlFlow';

const ClientPage = ( props: { db: DBJson } ) => {
  const params = useParams();
  const routerId = params.id as keyof typeof props.db;
  const [sheet, setSheet] = useState<SheetJson | null>(null);
  const [state, setState] = useState<enums.State>(enums.State.Entery); // game flow control
  const [prevState, setPrevState] = useState<Array<enums.State>>([enums.State.Entery]); // backtracking

  // on page load
  useEffect(() => {
    if (!props.db.hasOwnProperty(routerId)){
      // no page exist
      redirect('./');
    }
    // load data into sheet
    setSheet(props.db[routerId]);
  }, []);

  return (
    <>
      <div className='gameContainer w-full h-screen bg-blue-100'>
        {
          // (state === enums.State.Entery)?<></>:
          
        }
        <ControlFlow 
          state={state} 
          setState={setState} 
          prevState={prevState}
          setPrevState={setPrevState}
        />
      </div>
    </>
  )
};

export default ClientPage;
