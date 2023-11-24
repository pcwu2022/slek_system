import React, { useEffect, useState } from 'react';
import { SheetJson } from '../../ram_db/types';
import { StyledTitle } from '../components/StyledComponents';

import * as enums from '../../ram_db/enums';
import Image from 'next/image';

const Transition = (props: {
  dayCounter: number,
  data: SheetJson,
  state: enums.State,
  setState: React.Dispatch<React.SetStateAction<enums.State>>
}) => {
  const frames = 30;
  const [screenWidth, setScreenWidth] = useState<number>(innerWidth);
  const [leftOpacity, setLeftOpacity] = useState<number>(0);
  const [rightOpacity, setRightOpacity] = useState<number>(1);
  const [relativePosition, setRelativePosition] = useState<number>(-1);
  const [buttonOpacity, setButtonOpacity] = useState<number>(0);
  
  let t = 0-frames;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(innerWidth);
    });

    let itv = setInterval(() => {
      setLeftOpacity(Math.tanh(t*0.1)*0.7);
      setRightOpacity(Math.tanh(1-t*0.1)*0.7);
      setRelativePosition(Math.tanh(t*0.1));
      setButtonOpacity(Math.tanh((t-20)*0.5)/2+0.5);
      t += 1;
      if (t >= frames){
        clearInterval(itv);
      }
    }, 50);
  }, []);
  return (
    <div className='w-full'>
      <div className='-m-8 -mb-28 relative' style={{
        height: Math.floor(screenWidth*9/16)+"px"
      }}>
        <div
          className='w-1/2 h-full inline-block'
          style={{
            backgroundImage: "url('/hyponatremia/moon.jpg')",
            backgroundSize: "100%"
          }}
        >
          <div
            className='w-full h-full'
            style={{
              backgroundColor: "rgba(0,0,0,"+ leftOpacity +")"
            }}
          ></div>
        </div>
        <div
          className='w-1/2 h-full inline-block'
          style={{
            backgroundImage: "url('/hyponatremia/sun.jpg')",
            backgroundSize: "100%"
          }}
        >
          <div
            className='w-full h-full'
            style={{
              backgroundColor: "rgba(0,0,0,"+ rightOpacity +")"
            }}
          ></div>
        </div>
        <Image 
          src="/hyponatremia/moon_svg.png"
          alt="moon svg"
          width={100}
          height={100}
          className='w-20 h-20 absolute'
          style={{
            display: ((relativePosition>0)?"none":"block"),
            top: Math.floor(screenWidth*9/16/2-50)+"px",
            left: Math.floor(screenWidth/2-50+relativePosition*(screenWidth/4)) + "px"
          }}
        />
        <Image 
          src="/hyponatremia/sun_svg.png"
          alt="moon svg"
          width={100}
          height={100}
          className='w-20 h-20 absolute'
          style={{
            display: ((relativePosition>0)?"block":"none"),
            top: Math.floor(screenWidth*9/16/2-50)+"px",
            left: Math.floor(screenWidth/2-50+relativePosition*(screenWidth/4)) + "px"
          }}
        />
      </div>
      <div className='w-full text-center -mt-36'>
        <div 
          className='bg-red-700 text-white font-bold cursor-pointer inline-block p-2 pl-4 pr-4 rounded-md hover:bg-red-800'
          style={{
            opacity: buttonOpacity + ""
          }}
          onClick={() => {
            props.setState(enums.State.Examination);
          }}
        >
          入院第&nbsp;{props.dayCounter}&nbsp;天
        </div>
      </div>
    </div>
  )
}

export default Transition;
