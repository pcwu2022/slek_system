'use client';

import React, { useState } from 'react';
import { redirect, useParams } from 'next/navigation';
import { useEffect } from 'react';
import { DBJson, SheetJson } from '../../ram_db/types';

const ClientPage = ( props: { db: DBJson } ) => {
  const params = useParams();
  const routerId = params.id as keyof typeof props.db;
  const [sheet, setSheet] = useState<SheetJson | null>(null);

  // on page load
  useEffect(() => {
    if (!props.db.hasOwnProperty(routerId)){
      // no page exist
      redirect('./');
    }
    setSheet(props.db[routerId]);
  }, []);

  return (
    <>
      <pre>
        {JSON.stringify(sheet, null, 4)}
      </pre>
    </>
  )
};

export default ClientPage;
