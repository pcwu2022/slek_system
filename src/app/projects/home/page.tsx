import React from 'react'
import Card from './Card';
import { PageData } from '../types/types';

const pageData: Array<PageData> = [
  {
    title: "Hyponatremia", 
    name: "hyponatremia",
    description: "Hyponatremia is low blood sodium concentration, causing fluid imbalance, nausea, confusion, and potentially dangerous neurological complications.",
    imageLink: "https://www.verywellhealth.com/thmb/6bpKlPELKuI6lylP9lULkDehH6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hyponatremia-overview-4586684_final-fc297d28a05a401c967ff6cc8a64d79d.png"
  },
  {
    title: "Hypoxia",
    name: "hypoxia",
    description: "Hypoxia is low oxygen levels in tissues, leading to shortness of breath, confusion, and potential organ damage due to inadequate oxygenation.",
    imageLink: "https://www.webpagescreenshot.info/image-url/K2wnw-aHa"
  },
  {
    title: "Shock",
    name: "shock",
    description: "Shock is a life-threatening condition where insufficient blood flow impairs vital organs, causing low blood pressure, rapid heartbeat, and confusion.",
    imageLink: "https://www.webpagescreenshot.info/image-url/bLDZaHuBj"
  }
];

const home = () => {
  return (
    <>
        <div className="dashboard p-5">
            <div className="font-bold text-2xl">Dashboard</div>
            {
              pageData.map((element: PageData) => (
                <Card 
                  pageData={element}
                  key={element.name}
                />
              ))
            }
        </div>
    </>
  )
}

export default home;
