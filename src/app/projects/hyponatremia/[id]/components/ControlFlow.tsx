import React from 'react';
import * as enums from '../../ram_db/enums';

const ControlFlow = (props: { 
  state: enums.State, 
  setState: React.Dispatch<React.SetStateAction<enums.State>> 
  prevState: Array<enums.State>
  setPrevState: React.Dispatch<React.SetStateAction<Array<enums.State>>> 
}) => {

  const goBack = () => {
    // return to previous
    props.setState(props.prevState[props.prevState.length - 1]);
    // remove last element of backtracking stack
    let modifiedPrevState = props.prevState;
    modifiedPrevState.pop();
    props.setPrevState(modifiedPrevState);
  }

  const goContinue = () => {
    // backtracking: push current state into stack
    props.setPrevState([...props.prevState, props.state]);
    // forward control flow
    switch (props.state) {
      case enums.State.Entery: props.setState(enums.State.CC); break;
      case enums.State.CC: props.setState(enums.State.MedHistory); break;
      case enums.State.MedHistory: props.setState(enums.State.Diagnosis1); break;
      case enums.State.Diagnosis1: props.setState(enums.State.Examination); break;
      case enums.State.Examination: props.setState(enums.State.Diagnosis2); break;
      case enums.State.Diagnosis2: props.setState(enums.State.Therapy); break;
      case enums.State.Therapy: {
        // control success or continue
        if (true){
          props.setState(enums.State.DiagnosisF)
        } else {
          props.setState(enums.State.DiagnosisN)
        }
        break;
      }
      case enums.State.DiagnosisF: props.setState(enums.State.Success); break;
      case enums.State.DiagnosisN: props.setState(enums.State.TherapyN); break;
      case enums.State.TherapyN: {
        // control failure or continue
        if (true){
          props.setState(enums.State.ExaminationN)
        } else {
          props.setState(enums.State.Fail)
        }
        break;
      }
      case enums.State.ExaminationN: props.setState(enums.State.DiagnosisN); break;
      default: {
        console.log("Default");
        props.setState(enums.State.Entery);
        break;
      }
    }
  }
  
  return (
    <div className='control-flow'>
      {props.state}
      {(props.state === enums.State.Entery)?(<></>):(
        // create goBack button if not on the entry state
        <div className='back-button underline hover:cursor-pointer' onClick={goBack}>{"<"} back</div>
      )}
      {(props.state === enums.State.Success || props.state === enums.State.Fail)?(<></>):(
        // create goCountinue button if not on the finish state
        <div className='continue-button underline hover:cursor-pointer' onClick={goContinue}>continue {">"}</div>
      )}
    </div>
  )
}

export default ControlFlow;
