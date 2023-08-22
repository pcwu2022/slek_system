import React from 'react';
import type { PageData } from '../types/types';

const data: PageData = {
  title: "Hyponatremia",
  name: "hyponatremia",
  description: "Hyponatremia is low blood sodium concentration, causing fluid imbalance, nausea, confusion, and potentially dangerous neurological complications.",
  imageLink: "https://www.verywellhealth.com/thmb/6bpKlPELKuI6lylP9lULkDehH6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hyponatremia-overview-4586684_final-fc297d28a05a401c967ff6cc8a64d79d.png"
};

const hyponatremia = () => {
  return (
    <div>
      Hyponatremia
    </div>
  )
}

export default hyponatremia;
export { data };
