import React from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

const CC = (props: {data: SheetJson}) => {
  return (
    <div>
      <div>Photo of a patient</div>
      <div>本次主訴</div>
      <div className='main-cc'>
        <div>{props.data.Main.CC}</div>
      </div>
    </div>
  )
};

export default CC;
