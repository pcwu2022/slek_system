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
          (sheet === null) ? <></> : // check if null
          (state === enums.State.Entry) ? <Entry data={sheet} /> :
          (state === enums.State.CC) ? <CC data={sheet} /> : 
          (state === enums.State.MedHistory) ? <MedHistory data={sheet} /> : 
          (state === enums.State.PE) ? <PE data={sheet} /> : 
          (state === enums.State.Diagnosis1) ? <Diagnosis data={sheet} /> : 
          (state === enums.State.Examination) ? <Examination data={sheet} /> : 
          (state === enums.State.Diagnosis2) ? <Diagnosis data={sheet} /> : 
          (state === enums.State.Therapy) ? <Therapy data={sheet} /> : 
          (state === enums.State.DiagnosisF) ? <Diagnosis data={sheet} /> : 
          (state === enums.State.Success) ? <Success data={sheet} /> : 
          (state === enums.State.ExaminationN) ? <Examination data={sheet} /> : 
          (state === enums.State.TherapyN) ? <Therapy data={sheet} /> : 
          (state === enums.State.DiagnosisN) ? <Diagnosis data={sheet} /> : 
          (state === enums.State.Fail) ? <Fail data={sheet} /> : <></>
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