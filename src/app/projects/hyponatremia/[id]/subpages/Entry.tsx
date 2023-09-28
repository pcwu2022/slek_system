'use client';

import React, { useEffect, useState } from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

// components
import ImageDisplay from '../components/ImageDisplay';
import { StyledTitle, StyledBox } from '../components/StyledComponents';
import Image from 'next/image';

const Entry = (props: {
  data: SheetJson,
  state: enums.State,
  setState: React.Dispatch<React.SetStateAction<enums.State>>
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(innerWidth);
  const [bgPos, setBgPos] = useState<number>(0);
  const [bgOpacity, setBgOpacity] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(innerWidth);
    });
    let maxPercentage = 0.097;
    let i = 0;
    let itv = setInterval(() => {
      setBgPos(0-(Math.tanh((i-40)/5)+1)/2*maxPercentage*screenWidth);
      setBgOpacity((Math.tanh((i-40)/5)+1)/2*0.5);
      i++;
      if (i >= 50){
        clearInterval(itv);
      }
    }, 100);
  }, [])
  return (
    <div className='w-full'>
      <div className='-m-8 -mb-28' style={{
        height: Math.floor(screenWidth*9/16)+"px",
        backgroundImage: "url('/hyponatremia/startpage.jpg')",
        backgroundSize: '100%',
        backgroundPosition: '0px ' + bgPos + 'px'
      }}>
        <div
          className='w-full h-full'
          style={{
            backgroundColor: 'rgba(0,0,0,' +bgOpacity+ ')'
          }}
        >
        </div>
        <div className='w-full text-center -mt-36'>
          <div 
            className='bg-red-700 text-white font-bold cursor-pointer inline-block p-2 pl-4 pr-4 rounded-md hover:bg-red-800'
            style={{
              opacity: bgOpacity*2 + ""
            }}
            onClick={() => {
              props.setState(enums.State.CC);
            }}
          >
          ！開始救人！
          </div>
        </div>
        {/* <Image 
          src='/hyponatremia/startpage.jpg'
          alt=''
          className='w-full h-full object-fit'
          width={600}
          height={600}
        /> */}
      </div>
      {/* <div className='w-1/12 inline-block'></div>
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
      <div className='w-1/12 inline-block'></div> */}
    </div>
  )
}

export default Entry
