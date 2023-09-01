'use client';

import React from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';
import ToggleList from '../components/ToggleList';

// components
import ImageDisplay from '../components/ImageDisplay';
import { StyledTitle, StyledBox } from '../components/StyledComponents';

const MedHistory = (props: {data: SheetJson}) => {
  return (
    <div className='w-full'>
      <div className='w-1/12 inline-block'></div>
      <div className='image-layout inline-block w-3/12 align-middle'>
        <ImageDisplay imageFile={props.data.Main.Image} />
      </div>
      <div className='w-1/12 inline-block'></div>
      <div className='main-layout inline-block w-6/12 align-middle'>
        <StyledTitle>病人背景資料</StyledTitle>
        <div className='history-layout mt-8'>
          <StyledBox>
            <div className='med-history overflow-auto'>
              {
                Object.keys(props.data.MedHistory).map((key) => (
                  <ToggleList title={key} key={key}>
                    {props.data.MedHistory[key]}
                  </ToggleList>
                ))
              }
            </div>
          </StyledBox>
        </div>
      </div>
      <div className='w-1/12 inline-block'></div>
    </div>
  )
}

export default MedHistory
