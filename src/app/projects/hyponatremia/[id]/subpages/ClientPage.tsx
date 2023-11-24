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
import Transition from './Transition';

const ClientPage = ( props: { db: DBJson } ) => {
  const params = useParams();
  const routerId = params.id as keyof typeof props.db;
  const [sheet, setSheet] = useState<SheetJson | null>(null);
  const [state, setState] = useState<enums.State>(enums.State.Entry); // game flow control
  const [prevState, setPrevState] = useState<Array<enums.State>>([enums.State.Entry]); // backtracking
  const [inquiryHistory, setInquiryHistory] = useState<Array<string>>([]);
  const [diagnosisHistory, setDiagnosisHistory] = useState<Array<Array<string>>>([]);
  const [therapyHistory, setTherapyHistory] = useState<Array<Array<[string|null, string|null, string|null]>>>([]);
  const [dayCounter, setDayCounter] = useState<number>(0);

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
    <div className='w-full relative bg-blue-100 p-8'>
      <div className='gameContainer min-h-screen -mb-36 pb-48'>
        {
          // switch display in the page
          (sheet === null) ? <></> : // check if null
          (state === enums.State.Entry) ? <Entry data={sheet} state={state} setState={setState} /> :
          (state === enums.State.CC) ? <CC data={sheet} /> : 
          (state === enums.State.MedHistory) ? <MedHistory data={sheet} /> : 
          (state === enums.State.PE) ? <PE data={sheet} inquiryHistory={inquiryHistory} setInquiryHistory={setInquiryHistory} /> : 
          (state === enums.State.Diagnosis1) ? <Diagnosis final={false} data={sheet} diagnosisHistory={diagnosisHistory} setDiagnosisHistory={setDiagnosisHistory} dayCounter={dayCounter} /> : 
          (state === enums.State.Examination) ? <Examination data={sheet} dayCounter={dayCounter} /> : 
          (state === enums.State.Diagnosis2) ? <Diagnosis final={false} data={sheet} diagnosisHistory={diagnosisHistory} setDiagnosisHistory={setDiagnosisHistory} dayCounter={dayCounter} /> : 
          (state === enums.State.Therapy) ? <Therapy data={sheet} dayCounter={dayCounter} therapyHistory={therapyHistory} setTherapyHistory={setTherapyHistory} /> : 
          (state === enums.State.DiagnosisF) ? <Diagnosis final={true} data={sheet} diagnosisHistory={diagnosisHistory} setDiagnosisHistory={setDiagnosisHistory} dayCounter={dayCounter} /> : 
          (state === enums.State.Transition) ? <Transition data={sheet} dayCounter={dayCounter} state={state} setState={setState} /> : 
          (state === enums.State.Success) ? <Success data={sheet} /> : 
          (state === enums.State.ExaminationN) ? <Examination data={sheet} dayCounter={dayCounter} /> : 
          (state === enums.State.TherapyN) ? <Therapy data={sheet} dayCounter={dayCounter} therapyHistory={therapyHistory} setTherapyHistory={setTherapyHistory} /> : 
          (state === enums.State.DiagnosisN) ? <Diagnosis final={false} data={sheet} diagnosisHistory={diagnosisHistory} setDiagnosisHistory={setDiagnosisHistory} dayCounter={dayCounter} /> : 
          (state === enums.State.Fail) ? <Fail data={sheet} /> : <></>
        }
      </div>
      <ControlFlow 
        state={state} 
        setState={setState} 
        prevState={prevState}
        setPrevState={setPrevState}
        dayCounter={dayCounter}
        setDayCounter={setDayCounter}
        data={sheet}
      />
    </div>
  )
};

export default ClientPage;
