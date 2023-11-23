'use client';

import React, { ReducerAction, useEffect, useState } from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';
import StickerBanner from '../components/StickerBanner';
import { StyledButtonDrill } from '../components/StyledComponents';
import CheckList from '../components/CheckList';
import template from '../../ram_db/template.json';

const ChoiceElement = (props: {
  children: JSX.Element | string | null
  state: boolean,
  onClick: (e: React.MouseEvent) => void
}) => {
  return (
    <div 
      className={'cursor-pointer hover:font-semibold ' + ((props.state)?'font-bold text-red-500':'font-medium text-blue-700')}
      onClick={(e) => {
        props.onClick(e);
      }}
    >
      {props.children}
    </div>
  )
}

const TherapyBox = (props: {
  onRemove: () => void,
  children: JSX.Element | string | null
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className=''>
      <div
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}
      >
        <div 
          className='bg-red-100 m-2 p-2 align-middle duration-200 inline-block cursor-pointer'
        >
          {props.children}
        </div>
        <div 
          className='remove font-extrabold rounded-full pl-2 pr-2 align-middle bg-red-200 inline-block hover:bg-red-700 hover:text-white cursor-pointer duration-200'
          onClick={props.onRemove}
        >-</div>
      </div>
    </div>
  )
};

const Therapy = (props: {
  dayCounter: number,
  data: SheetJson,
  therapyHistory: Array<Array<[string|null, string|null, string|null]>>,
  setTherapyHistory: React.Dispatch<React.SetStateAction<Array<Array<[string|null, string|null, string|null]>>>>
}) => {
  const [buttonIndex, setButtonIndex] = useState<string | null>(null);
  const [dosageIndex, setDosageIndex] = useState<string | null>(null);
  const [timeIndex, setTimeIndex] = useState<string | null>(null);
  const [therapyArray, setTherapyArray] = useState<Array<[string|null, string|null, string|null]>>([]);
  
  // on start
  useEffect(() => {
    if (props.therapyHistory.length <= props.dayCounter){
      props.setTherapyHistory([...props.therapyHistory, []]);
    } else {
      setTherapyArray(props.therapyHistory[props.dayCounter]);
    }
  }, []);

  return (
    <div className='w-full'>
      {/* Banner */}
      <StickerBanner
        title='治療' 
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
      
      {/* Buttons */}
      <div className='sidebar inline-block w-3/12 align-top'>
        {
          Object.keys(enums.Therapy).map((key) => (
            <StyledButtonDrill
              key={key}
              state = {buttonIndex === key}
              onClick={(e) => {
                if (buttonIndex === key){
                  setButtonIndex(null);
                } else {
                  setButtonIndex(key);
                  if (key !== "Saline" && key !== "Saline3"){
                    setTherapyArray([...therapyArray, [key, null, null]]);
                    let tempTH = [...props.therapyHistory];
                    tempTH[props.dayCounter] = [...therapyArray, [key, null, null]];
                    props.setTherapyHistory(tempTH);
                  }
                }
              }}
            >
              {enums.Therapy[key as keyof typeof enums.Therapy]}
            </StyledButtonDrill>
          ))
        }
      </div>
      <div className='selections inline-block w-4/12 align-top'>
        <div 
          className='bg-yellow-100 ml-4 mr-4 max-h-screen overflow-auto'
          style={{
            display: (buttonIndex !== "Saline" && buttonIndex !== "Saline3")?"none":"block"
          }}
        >
          {
            (buttonIndex !== "Saline" && buttonIndex !== "Saline3")?"":
            <>
              <div className='w-1/2 p-4 inline-block align-top'>
                <div className='font-semibold text-blue-800'>用量</div>
                {
                  Object.keys(enums.Dosage).map((key) => (
                    <ChoiceElement
                      key = {key}
                      state = {dosageIndex === key}
                      onClick={(e) => {
                        if (dosageIndex === key){
                          setDosageIndex(null);
                        } else {
                          setDosageIndex(key);
                        }
                      }}
                    >
                      {enums.Dosage[key as keyof typeof enums.Dosage]}
                    </ChoiceElement>
                  ))
                }
              </div>
              <div className='w-1/2 p-4 inline-block align-top'>
                <div className='font-semibold text-blue-800'>時間</div>
                {
                  Object.keys(enums.Time).map((key) => (
                    <ChoiceElement
                      key = {key}
                      state = {timeIndex === key}
                      onClick={(e) => {
                        if (timeIndex === key){
                          setTimeIndex(null);
                        } else {
                          setTimeIndex(key);
                        }
                      }}
                    >
                      {enums.Time[key as keyof typeof enums.Time]}
                    </ChoiceElement>
                  ))
                }
              </div>
              <div className='text-center'>
                <div 
                  className={'inline-block p-1 pl-8 pr-8 mb-4 bg-yellow-300 rounded-md ' + ((dosageIndex!==null && timeIndex!==null)?" cursor-pointer hover:bg-yellow-400 opacity-100":"opacity-50")}
                  onClick={(e) => {
                    if (dosageIndex!==null && timeIndex!==null){
                      setTherapyArray([...therapyArray, [buttonIndex, dosageIndex, timeIndex]])
                      let tempTH = [...props.therapyHistory];
                      tempTH[props.dayCounter] = [...therapyArray, [buttonIndex, dosageIndex, timeIndex]];
                      props.setTherapyHistory(tempTH);
                      setButtonIndex(null);
                      setDosageIndex(null);
                      setTimeIndex(null);
                    }
                  }}
                >確定</div>
              </div>
            </>
          }
        </div>
      </div>
      <div className='examinationTable inline-block w-5/12 align-top'>
        <div className=' bg-blue-50 ml-4 mr-4 p-4 overflow-x-auto max-h-screen overflow-auto'>
          <div>治療方式清單</div>
          {
            therapyArray.map((element) => (
              <TherapyBox
                key={Math.random()}
                onRemove={() => {
                  let tempTherapyArray = [...therapyArray];
                  tempTherapyArray.splice(tempTherapyArray.indexOf(element), 1);
                  setTherapyArray(tempTherapyArray);
                  let tempTH = [...props.therapyHistory];
                  tempTH.splice(props.dayCounter, 1, tempTherapyArray);
                  props.setTherapyHistory(tempTH);
                }}
              >
                {`${enums.Therapy[element[0] as keyof typeof enums.Therapy]} ${(element[1]!==null)?enums.Dosage[element[1] as keyof typeof enums.Dosage]:""} ${(element[2]!==null)?enums.Time[element[2] as keyof typeof enums.Time]:""}`}
              </TherapyBox>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Therapy
