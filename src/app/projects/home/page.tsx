import React from 'react'
import Card from './Card';
import { PageData } from '../types/types';

// import pages of card
import { data as hyponatremiaData } from '../hyponatremia/page';
import { data as hypoxiaData } from '../hypoxia/page';
import { data as shockData } from '../shock/page';

const pageData: Array<PageData> = [hypoxiaData, shockData, hyponatremiaData];

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
