'use client';

import React, { useState } from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';
import template from '../../ram_db/template.json';

// components
import { StyledTitle, StyledBox, StyledButton, StyledButtonDrill } from '../components/StyledComponents';
import StickerBanner from '../components/StickerBanner';
import CheckList from '../components/CheckList';

const Examination = (props: {
  data: SheetJson,
  dayCounter: number
}) => {
  const [buttonIndex, setButtonIndex] = useState<keyof typeof template | null>(null);
  const [checked, setChecked] = useState<Array<boolean> | null>(null);

  const buttonArray: Array<keyof typeof template> = ["Blood", "Urine", "ABG", "Radiology"];
  return (
    <div className='w-full'>
      {/* Banner */}
      <StickerBanner 
        title={(props.dayCounter === 1)?'檢查 / 檢驗':`檢查 / 檢驗：入院第 ${props.dayCounter} 天` } 
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
          buttonArray.map((key) => (
            <StyledButtonDrill 
              key={key}
              state = {buttonIndex === key}
              onClick={(e) => {
                if (buttonIndex === key){
                  setButtonIndex(null);
                  setChecked(null);
                } else {
                  setButtonIndex(key);
                  setChecked(Object.keys(props.data[key]).map((key) => false));
                }
              }}
            >
              {template.Examination[key as keyof typeof template.Examination]}
            </StyledButtonDrill>
          ))
        }
      </div>
      <div className='selections inline-block w-4/12 align-top'>
        <div className='bg-yellow-100 ml-4 mr-4 p-4 max-h-screen overflow-auto'>
          {
            (buttonIndex === null || checked === null)?
            <>
              點選檢查項目以查看結果
            </>:
            <>
              {
                <CheckList 
                  elements={
                    Object.keys(props.data[buttonIndex]).filter((key) => (key!=='-' && key!=='')).map((key) => (
                      template[buttonIndex][key as keyof typeof template[typeof buttonIndex]]
                    ))
                  }
                  checked={checked}
                  setChecked={setChecked}
                />
              }
            </>
          }
        </div>
      </div>
      <div className='examinationTable inline-block w-5/12 align-top'>
        <div className=' bg-blue-50 ml-4 mr-4 p-4 overflow-x-auto max-h-screen overflow-auto'>
          {
            (buttonIndex === null || checked === null)?
            <>
              點選檢查項目以查看結果
            </>:
            <>
              <div className='font-semibold p-2 text-center text-blue-800'>
                檢查/檢驗結果
              </div>
              <table className='border-2 border-solid border-black w-full'>
                <thead>
                  <tr>
                    <td className='border-2 border-solid border-black p-2'>項目</td>
                    <td className='border-2 border-solid border-black p-2 '>檢查結果</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(props.data[buttonIndex]).map((key) => (
                      (checked[Object.keys(props.data[buttonIndex]).indexOf(key)])?(
                        <tr key={key}>
                          <td className='border-2 border-solid border-black p-2'>{template[buttonIndex][key as keyof typeof template[typeof buttonIndex]]}</td>
                          <td className='border-2 border-solid border-black p-2 break-words'>{props.data[buttonIndex][key]}</td>
                        </tr>
                      ):("")
                    ))
                  }
                </tbody>
              </table>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Examination
