import React from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

const Entry = (props: {data: SheetJson}) => {
  return (
    <div>
      <div>Welcome to the game!</div>
      <div>Some photo of hospital and a patient sent inside</div>
    </div>
  )
}

export default Entry
