import React, { ReactComponentElement } from 'react';
import type { PageData } from '../types/types';
import loadXlsx from './ram_db/load_xlsx';
import { DBJson } from './ram_db/types';

const data: PageData = {
  title: "Hyponatremia",
  name: "hyponatremia",
  description: "Hyponatremia is low blood sodium concentration, causing fluid imbalance, nausea, confusion, and potentially dangerous neurological complications.",
  imageLink: "https://www.verywellhealth.com/thmb/6bpKlPELKuI6lylP9lULkDehH6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hyponatremia-overview-4586684_final-fc297d28a05a401c967ff6cc8a64d79d.png"
};

const db: DBJson = loadXlsx();

const hyponatremia = () => {
  return (
    <div>
      <pre>
        {
          JSON.stringify(db, null, 4)
        }
      </pre>
    </div>
  )
}

export default hyponatremia;
