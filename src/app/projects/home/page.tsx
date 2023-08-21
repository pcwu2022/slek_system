import React from 'react'
import Card from './Card';

const home = () => {
  return (
    <>
        <div className="dashboard p-5">
            <div className="font-bold text-2xl">Dashboard</div>
            <Card project='hyponatremia' description='Hyponatremia is low blood sodium concentration, causing fluid imbalance, nausea, confusion, and potentially dangerous neurological complications.'/>
            <Card project='hypoxia' description='Hypoxia is low oxygen levels in tissues, leading to shortness of breath, confusion, and potential organ damage due to inadequate oxygenation.'/>
            <Card project='shock' description='Shock is a life-threatening condition where insufficient blood flow impairs vital organs, causing low blood pressure, rapid heartbeat, and confusion.'/>
        </div>
    </>
  )
}

export default home;
