import React from 'react';
import Link from 'next/link';

const Card = (props: {project: string, description: string}) => {
  return (
  <>
    <div
      className="inline-block w-80 m-10 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
      <img
          className="rounded-t-lg w-fit"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt="" 
      />
      </a>
      <div className="p-6">
        <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.project[0].toUpperCase() + props.project.substring(1)}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.description}
        </p>
        <Link href={`./${props.project}`}>
          <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Go!
          </button>
        </Link>
      </div>
    </div>
    {/* <Link href={`./projects/${props.project}`}>
      <div className="border-2 border-cyan-300 bg-cyan-200 m-5 p-10 inline-block">
        <div className="font-bold text-center text-lg">
          {props.project[0].toUpperCase() + props.project.substring(1)}
        </div>
      </div>
    </Link> */}
  </>
  )
}

export default Card;
