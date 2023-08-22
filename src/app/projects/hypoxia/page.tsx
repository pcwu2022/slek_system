import React from 'react';
import type { PageData } from '../types/types';

const data: PageData = {
  title: "Hypoxia",
  name: "hypoxia",
  description: "Hypoxia is low oxygen levels in tissues, leading to shortness of breath, confusion, and potential organ damage due to inadequate oxygenation.",
  imageLink: "https://www.webpagescreenshot.info/image-url/K2wnw-aHa"
};

const hypoxia = () => {
  return (
    <div>
      <iframe 
        src="http://cindy12347.pythonanywhere.com/" 
        frameBorder="0"
        className='w-screen min-h-screen no-scrollbar -md-4'
      ></iframe>
    </div>
  )
}

export default hypoxia;
export { data };