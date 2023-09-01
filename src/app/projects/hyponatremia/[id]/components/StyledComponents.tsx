import React, { useState } from 'react';

const StyledTitle = (props: { children: JSX.Element | string | null }) => {
    return (
        <>
            <div className = "bg-blue-400 font-bold text-white rounded-lg text-xl inline-block p-4 pt-2 pb-2 m-2"> {props.children} </div>
        </>
    )
};

const StyledButton = (props: { 
    onClick: (e: React.MouseEvent) => void, 
    children: JSX.Element | string | null 
}) => {
    const [state, setState] = useState<boolean>(false);
    return (
        <>
            <div 
                onClick={(e) => {
                    setState(!state);
                    props.onClick(e);
                }} 
                className = {"cursor-pointer hover:scale-95 duration-100 font-semibold rounded-lg text-lg inline-block p-4 pt-2 pb-2 m-2 " + (state?"bg-blue-800 text-white ":"bg-white text-blue-800 ")}
            > {props.children} </div>
        </>
    )
};

const StyledBox = (props: { children: JSX.Element | string | null }) => {
    return (
        <>
            <div className = "bg-blue-400 font-medium leading-9 text-white rounded-lg text-lg p-4 pt-2 pb-2 m-2"> {props.children} </div>
        </>
    )
};

export {
    StyledTitle,
    StyledBox,
    StyledButton
};