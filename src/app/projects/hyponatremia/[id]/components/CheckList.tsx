import React, { useState } from 'react'

const CheckList = (props: {
    elements: Array<string | JSX.Element>,
    checked: Array<boolean>,
    setChecked: React.Dispatch<React.SetStateAction<Array<boolean> | null>>
}) => {
  
  return (
    <div>
    {
      props.elements.map((name) => (
        <div key={name as string}>
          <input 
            type="checkbox" 
            id={name as string}
            onChange={(e) => {
              let checkedCopy = [...props.checked];
              if (e.target.checked){
                checkedCopy[props.elements.indexOf(name)] = true;
              } else {
                checkedCopy[props.elements.indexOf(name)] = false;
              }
              props.setChecked(checkedCopy);
            }}  
          />
          &nbsp;&nbsp;
          <label 
            htmlFor={name as string}
            className={(props.checked[props.elements.indexOf(name)])?' text-black':'text-neutral-400'}
          >{name}</label>
        </div>
      ))
    }
    </div>
  )
}

export default CheckList;
