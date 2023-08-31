import React from 'react';
import Image from 'next/image';

const ImageDisplay = (props: {imageFile: string}) => {
  return (
    <>
        <div className="flex justify-center items-center w-full">
            <div className="max-w-80 h-50 bg-white rounded-[50%] m-2 p-8">
                <Image 
                    src = {`/hyponatremia/${props.imageFile.replaceAll(' ', '')}`}
                    alt = "Image of Patient"
                    height = {200}
                    width = {150}
                    className = "object-cover"
                />
            </div>
        </div>
    </>
  )
};

export default ImageDisplay;
