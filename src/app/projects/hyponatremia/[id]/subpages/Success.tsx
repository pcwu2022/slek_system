'use client';

import React from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';

const Success = (props: {data: SheetJson}) => {
  return (
    <div>
      Game Over. You Won.
    </div>
  )
}

export default Success
