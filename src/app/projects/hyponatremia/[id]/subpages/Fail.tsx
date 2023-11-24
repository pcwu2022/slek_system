'use client';

import React from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

const Fail = (props: {data: SheetJson}) => {
  return (
    <div>
      Game Over. You Failed.
    </div>
  )
}

export default Fail
