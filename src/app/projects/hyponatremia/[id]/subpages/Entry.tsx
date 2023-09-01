'use client';

import React from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

// components
import ImageDisplay from '../components/ImageDisplay';
import { StyledTitle, StyledBox } from '../components/StyledComponents';

const Entry = (props: {data: SheetJson}) => {
  return (
    <div className='w-full'>
      <div className='w-1/12 inline-block'></div>
      <div className='imageLayout inline-block w-3/12 align-middle'>
        <ImageDisplay imageFile={props.data.Main.Image} />
      </div>
      <div className='w-1/12 inline-block'></div>
      <div className='mainLayout inline-block w-6/12 align-middle h-full'>
        <StyledTitle>Welcome to the Game!</StyledTitle>
        <div className='main-intro mt-8 h-full align-middle'>
          <StyledBox>
            <div>{"Hyponatremia is a medical condition characterized by an abnormally low concentration of sodium ions in the blood, often below the normal range of 135-145 milliequivalents per liter (mEq/L). Sodium plays a crucial role in maintaining the body's fluid balance, nerve function, and muscle contractions."}</div>
          </StyledBox>
        </div>
      </div>
      <div className='w-1/12 inline-block'></div>
    </div>
  )
}

export default Entry
