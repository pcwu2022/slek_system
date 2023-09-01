'use client';

import React from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

// components
import ImageDisplay from '../components/ImageDisplay';
import { StyledTitle, StyledBox } from '../components/StyledComponents';

const CC = (props: {data: SheetJson}) => {
  return (
    <div className='w-full'>
      <div className='w-1/12 inline-block'></div>
      <div className='imageLayout inline-block w-3/12 align-middle'>
        <ImageDisplay imageFile={props.data.Main.Image} />
      </div>
      <div className='w-1/12 inline-block'></div>
      <div className='mainLayout inline-block w-6/12 align-middle h-full'>
        <StyledTitle>本次主訴</StyledTitle>
        <div className='main-cc mt-8 h-full align-middle'>
          <StyledBox>
            <div>{props.data.Main.CC}</div>
          </StyledBox>
        </div>
      </div>
      <div className='w-1/12 inline-block'></div>
    </div>
  )
};

export default CC;
