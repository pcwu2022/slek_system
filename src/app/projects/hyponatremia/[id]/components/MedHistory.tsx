import React from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';
import ToggleList from './ToggleList';

const MedHistory = (props: {data: SheetJson}) => {
  return (
    <div>
      <div>Photo of a patient</div>
      <div>病人背景資料</div>
      <div className='med-history'>
        {
          Object.keys(props.data.MedHistory).map((key) => (
            <ToggleList title={key} key={key}>
              {props.data.MedHistory[key]}
            </ToggleList>
          ))
        }
      </div>
    </div>
  )
}

export default MedHistory
