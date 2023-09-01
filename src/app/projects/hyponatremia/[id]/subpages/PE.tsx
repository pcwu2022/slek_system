import React, { ReactComponentElement, useState} from 'react';
import { SheetJson } from '../../ram_db/types';
import * as enums from '../../ram_db/enums';
import Image from 'next/image';
import { LoremIpsum } from "lorem-ipsum";

// components
import { StyledTitle, StyledBox, StyledButton } from '../components/StyledComponents';
import StickerBanner from '../components/StickerBanner';

// lorem ipsum
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const ChatElement = (props: {
  sender: boolean, // true if is inquiry, false if is answer
  children: JSX.Element | string | null
}) => {
  return (
    <div className={'rounded-lg flex items-center' + ((props.sender)?" self-end ":" self-start ")}>
      <div className={'w-fit relative p-2 pl-4 pr-4 rounded-lg ' + ((props.sender)?" bg-blue-200 mr-2":" bg-neutral-200 mr-2")}>
        {props.children}
      </div>
    </div>
  )
};

const PEElement = (props: { 
  keyId: string, 
  peData: string, 
  inquiryQuestions: {[key:string]: string},
  inquiryClick: (key: string) => void
}) => {
  return (
    <div className='bg-neutral-100 m-4 p-4'>
      <div className='font-semibold text-blue-700'>
        {enums.PE[props.keyId as keyof typeof enums.PE]}
      </div>
      {
        (props.keyId !== "Inquiry")?(
          <div>
            {props.peData}
          </div>
        ):(
          <div>
            {
              Object.keys(props.inquiryQuestions).map((key) => (
                <div 
                  key={key} 
                  className='cursor-pointer hover:text-blue-700 hover:font-bold'
                  onClick={() => {
                    props.inquiryClick(key);
                  }}
                >
                  {props.inquiryQuestions[key]}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

const PE = (props: {
  data: SheetJson, 
  inquiryHistory: Array<string>, 
  setInquiryHistory: React.Dispatch<React.SetStateAction<Array<string>>>
}) => {
  // states
  const [questions, setQuestions] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // actions
  const buttonActive = (key: string) => {
    let index: number = questions.indexOf(key);
    if (index === -1){
      // does not contain key
      setQuestions([...questions, key]);
    } else {
      let tempQuestions: Array<string> = [...questions];
      tempQuestions.splice(index, 1);
      setQuestions(tempQuestions);
    }
  }

  return (
    <div className='w-full'>
      
      {/* Banner */}
      <StickerBanner title='理學檢查' imageFile={props.data.Main.Image}>{"stickerbanner"}</StickerBanner>
      <div className='m-6'></div>
      
      {/* Buttons */}
      <div className='sidebar inline-block w-2/12 align-top'>
        {
          Object.keys(props.data.PE).map((key) => (
            <StyledButton key={key} onClick={(e) => {
              buttonActive(key);
            }}>{
              enums.PE[key as keyof typeof enums.PE]
            }</StyledButton>
          ))
        }
      </div>

      {/* Choice and Data */}
      <div className='choice inline-block w-4/12 align-top h-72'>
        <div className={'bg-blue-50 max-h-full overflow-auto m-2 ml-8 mr-8' + ((questions.length === 0)?"":"p-2")}>
          {
            questions.map((key) => (
              <PEElement 
                key={key} 
                keyId={key} 
                peData={props.data.PE[key]} 
                inquiryQuestions={props.data.Questions}
                inquiryClick={(key: string) => {
                  props.setInquiryHistory([...props.inquiryHistory, key]);
                }}
              />
            ))
          }
        </div>
      </div>

      {/* Message */}
      <div className='message inline-block w-6/12 pr-8 align-top h-72'>
        <div className='container m-2 ml-8 mr-8 bg-blue-50 w-full h-full'>
          
          {/* Name */}
          <div className='name bg-blue-800 h-10 p-2 pl-4 pr-4 font-semibold text-white'>患者小明</div>
          
          {/* Main Text Area */}
          <div className='text-box flex-grow overflow-y-auto h-48'>
            <div className='flex flex-col space-y-2 p-2'>  
              {
                props.inquiryHistory.map((key) => (
                  <>
                    <ChatElement sender={true} key={Math.random()}>
                      {
                        (props.data.Questions[key] === undefined)?(
                          key
                        ):(
                          props.data.Questions[key]
                        )
                      }
                    </ChatElement>
                    <ChatElement sender={false} key={Math.random()}>
                    {
                        (props.data.Questions[key] === undefined)?(
                          lorem.generateWords(Math.floor(Math.random()*20))
                        ):(
                          props.data.Answers[key]
                        )
                      }
                    </ChatElement>
                  </>
                ))
              }
            </div>
          </div>
          
          {/* Input and Send Button */}
          <div className='send-box bg-blue-800 h-14 p-2 pl-4 pr-4 font-semibold text-white'>
            <input 
              type="text" 
              className='input-text align-middle rounded-xl text-black font-medium bg-neutral-100 m-2 pl-2 pr-2 w-5/6'
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div 
              className='submit-button inline-block align-middle cursor-pointer'
              onClick={() => {
                props.setInquiryHistory([...props.inquiryHistory, inputValue]);
              }}
            >
              <Image
                src='/hyponatremia/icons/plane.png'
                alt='send button'
                width={20}
                height={20}
              ></Image>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PE
