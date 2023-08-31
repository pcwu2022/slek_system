'use client';

import React, { useState } from 'react';
import { redirect, useParams } from 'next/navigation';
import { useEffect } from 'react';
import { DBJson, SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

// components
import ControlFlow from './ControlFlow';
import Entry from './Entry';
import CC from './CC';
import MedHistory from './MedHistory';
import PE from './PE';
import Diagnosis from './Diagnosis';
import Examination from './Examination';
import Therapy from './Therapy';
import Success from './Success';
import Fail from './Fail';

const ClientPage = ( props: { db: DBJson } ) => {
  const params = useParams();
  const routerId = params.id as keyof typeof props.db;
  const [sheet, setSheet] = useState<SheetJson | null>(null);
  const [state, setState] = useState<enums.State>(enums.State.Entry); // game flow control
  const [prevState, setPrevState] = useState<Array<enums.State>>([enums.State.Entry]); // backtracking

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
          // switch display in the page
          (state === enums.State.Entry) ? <Entry /> :
          (state === enums.State.CC) ? <CC /> : 
          (state === enums.State.PE) ? <PE /> : 
          (state === enums.State.Diagnosis1) ? <Diagnosis /> : 
          (state === enums.State.Examination) ? <Examination /> : 
          (state === enums.State.Diagnosis2) ? <Diagnosis /> : 
          (state === enums.State.Therapy) ? <Therapy /> : 
          (state === enums.State.DiagnosisF) ? <Diagnosis /> : 
          (state === enums.State.Success) ? <Success /> : 
          (state === enums.State.ExaminationN) ? <Examination /> : 
          (state === enums.State.TherapyN) ? <Therapy /> : 
          (state === enums.State.DiagnosisN) ? <Diagnosis /> : 
          (state === enums.State.Fail) ? <Fail /> : <></>
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
