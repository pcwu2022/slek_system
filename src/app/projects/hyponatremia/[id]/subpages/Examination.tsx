'use client';

import React, { useState } from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

// components
import { StyledTitle, StyledBox, StyledButton, StyledButtonDrill } from '../components/StyledComponents';
import StickerBanner from '../components/StickerBanner';

const Examination = (props: {data: SheetJson}) => {
  const [buttonIndex, setButtonIndex] = useState<string | null>(null);

  const buttonArray = ["Blood", "Urine", "ABG", "Radiology"];
  return (
    <div className='w-full'>
      {/* Banner */}
      <StickerBanner 
        title='檢查/檢驗' 
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
                } else {
                  setButtonIndex(key);
                }
              }}
            >
              {enums.Main[key as keyof typeof enums.Main]}
            </StyledButtonDrill>
          ))
        }
      </div>
      <div className='selections inline-block w-4/12 align-top'></div>
      <div className='examinationTable inline-block w-5/12 align-top'></div>
    </div>
  )
}

export default Examination
