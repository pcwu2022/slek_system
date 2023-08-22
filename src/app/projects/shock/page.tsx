import React from 'react';
import { PageData } from '../types/types';

const data: PageData = {
  title: "Shock",
  name: "shock",
  description: "Shock is a life-threatening condition where insufficient blood flow impairs vital organs, causing low blood pressure, rapid heartbeat, and confusion.",
  imageLink: "https://www.webpagescreenshot.info/image-url/bLDZaHuBj"
};

const shock = () => {
  return (
    <div>
      <iframe 
        src="http://teamb.slekmed.org/" 
        frameBorder="0"
        className='w-screen min-h-screen no-scrollbar -md-4'
      ></iframe>
    </div>
  )
}

export default shock;
export { data };
