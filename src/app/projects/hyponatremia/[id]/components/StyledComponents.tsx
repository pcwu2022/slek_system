import React from 'react';

const StyledTitle = (props: { children: JSX.Element | string | null }) => {
    return (
        <>
            <div className = "bg-blue-400 font-bold text-white rounded-lg text-xl inline-block p-4 pt-2 pb-2 m-2"> {props.children} </div>
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
    StyledBox
};