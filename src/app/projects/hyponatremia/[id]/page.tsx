import React from 'react';
import loadXlsx from '../ram_db/load_xlsx';
import { DBJson, SheetJson } from '../ram_db/types';
import ClientPage from './components/ClientPage';

const db: DBJson = loadXlsx();

const page = () => {
  return (
    <>
      <ClientPage db = {db}/>
    </>
  )
};

export default page;
