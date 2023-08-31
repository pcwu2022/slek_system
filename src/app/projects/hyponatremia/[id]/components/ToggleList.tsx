import React, { ReactComponentElement, useState } from 'react';

const ToggleList = (props: {title: string, children: JSX.Element | string | null}) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <div className='toggle-list'>
      <div 
        className='triangle-button cursor-pointer inline-block align-top'
        onClick={() => { setState(!state) }}
      >{ state ? " ▼ " : " ▶ " }</div>
      <div className='toggle-right inline-block align-top'>
        <div className='toggle-title '>
          { props.title }
        </div>
        <div className={(state ? "block" : "hidden") + " toggle-children"}>
          { props.children }
        </div>
      </div>
    </div>
  )
}

export default ToggleList;
