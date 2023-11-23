'use client';

import React, { useEffect, useState } from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

// components
import { StyledTitle } from '../components/StyledComponents';
import StickerBanner from '../components/StickerBanner';

const ChoiceBox = (props: {
  selected: boolean,
  onSelect: () => void,
  onUp: () => void,
  onDown: () => void,
  children: JSX.Element | string | null
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className=''>
      {
        (props.selected)?(
          <div
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
          >
            <div className={" align-middle " + ((hover)?" inline-block ":" hidden ")}>
              <div className=''>
                <div 
                  className='text-xs text-white pl-1 pr-1 align-middle bg-yellow-400 block hover:bg-yellow-500  cursor-pointer duration-200'
                  onClick={props.onUp}
                >▲</div>
                <div 
                  className='text-xs text-white pl-1 pr-1 align-middle bg-yellow-400 block hover:bg-yellow-500  cursor-pointer duration-200'
                  onClick={props.onDown}
                >▼</div>
              </div>
            </div>
            <div 
              className='bg-red-100 m-2 p-2 align-middle duration-200 inline-block cursor-pointer'
            >
              {props.children}
            </div>
            <div 
              className='remove font-extrabold rounded-full pl-2 pr-2 align-middle bg-red-200 inline-block hover:bg-red-700 hover:text-white cursor-pointer duration-200'
              onClick={props.onSelect}
            >-</div>
          </div>
        ):(
          <div 
            className='bg-blue-200 m-2 p-2 hover:bg-blue-300 duration-200 inline-block cursor-pointer'
            onClick={props.onSelect}
          >
            {props.children}
          </div>
        )
      }
    </div>
  )
};

const Diagnosis = (props: {
  data: SheetJson,
  diagnosisHistory: Array<Array<string>>,
  setDiagnosisHistory: React.Dispatch<React.SetStateAction<Array<Array<string>>>>,
  dayCounter: number,
  final: boolean
}) => {

  const [diagnosisArray, setDiagnosisArray] = useState<Array<string>>(
    Object.keys(enums.Diagnosis)
  );

  let dayCounter:number = props.dayCounter;

  // on start
  useEffect(() => {
    dayCounter = props.dayCounter;
    if (props.diagnosisHistory.length <= props.dayCounter){
      props.setDiagnosisHistory([...props.diagnosisHistory, []]);
    }
  }, []);

  return (
    <div className='w-full'>
      {/* Banner */}
      <StickerBanner
        title={
          (props.dayCounter === 0)?( // first day
            "初步診斷"
          ):(props.dayCounter === 1)?( // second day
            "二度診斷"
          ):(props.final)?( // final diagnosis
            "最終診斷"
          ):(
            `診斷：入院第${props.dayCounter}天`
          )
        }
        imageFile={props.data.Main.Image}
        vs={{
          GCS: props.data.Main.GCS,
          Respiration: props.data.Main.Respiration,
          Temperature: props.data.Main.Temperature,
          Heartbeat: props.data.Main.Heartbeat,
          Pressure: props.data.Main.Pressure
        }}
      >{"stickerbanner"}</StickerBanner>
      <div className='m-6'></div>
      <div className='main-container flex items-stretch w-full h-full'>
        <div className='w-1/2 align-top h-full'>
          <div className='m-8 p-4 bg-blue-50'>
            <div className='font-semibold'>診斷選項</div>
            <div>
              {
                diagnosisArray.map((key) => (
                  <ChoiceBox
                    key={key}
                    selected={false}
                    onSelect={() => {
                      // remove from diagnosisArray
                      let tempDA = [...diagnosisArray];
                      tempDA.splice(tempDA.indexOf(key), 1);
                      setDiagnosisArray(tempDA);

                      // insert into diagnosisHistory
                      let tempDH = [...props.diagnosisHistory];
                      tempDH[dayCounter].push(key);
                      props.setDiagnosisHistory(tempDH);
                    }}
                    onUp={() => {}}
                    onDown={() => {}}
                  >
                    {enums.Diagnosis[key as keyof typeof enums.Diagnosis]}
                  </ChoiceBox>
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-1/2 align-top h-full'>
          <div className='m-8 p-4 bg-white'>
            <div className='font-semibold'>患者可能患有疾病排序</div>
            <div>
              {
                props.diagnosisHistory[dayCounter]?.map((key) => (
                  <ChoiceBox
                    key={key}
                    selected={true}
                    onSelect={() => {
                      // remove from diagnosisHistory
                      let tempDH = [...props.diagnosisHistory];
                      tempDH[dayCounter].splice(tempDH[dayCounter].indexOf(key), 1);
                      props.setDiagnosisHistory(tempDH);

                      // insert into diagnosisArray
                      let tempDA = [...diagnosisArray];
                      tempDA.push(key);
                      setDiagnosisArray(tempDA);
                    }}
                    onUp={() => {
                      let tempDH = [...props.diagnosisHistory];
                      let index: number = tempDH[dayCounter].indexOf(key);
                      let spliced: string = tempDH[dayCounter].splice(index, 1)[0];
                      tempDH[dayCounter].splice(Math.max(index-1, 0), 0, spliced);
                      props.setDiagnosisHistory(tempDH);
                    }}
                    onDown={() => {
                      let tempDH = [...props.diagnosisHistory];
                      let index: number = tempDH[dayCounter].indexOf(key);
                      let spliced: string = tempDH[dayCounter].splice(index, 1)[0];
                      tempDH[dayCounter].splice(Math.min(index+1, tempDH[dayCounter].length), 0, spliced);
                      props.setDiagnosisHistory(tempDH);
                    }}
                  >
                    {enums.Diagnosis[key as keyof typeof enums.Diagnosis]}
                  </ChoiceBox>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diagnosis
